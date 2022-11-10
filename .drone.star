def release(image_prefix = '', build_folder = '.'): 
  image_name = 'registry.gitlab.com/${DRONE_REPO}:' + image_prefix + '${DRONE_TAG##v}'
    
  return {
    'kind': 'pipeline',
    'name': 'release',
    'trigger': {
      'ref': [
        'refs/tags/v*',
      ],
      'event': {
        'exclude': [
          'promote',
        ],
      },
    },
    'volumes': [
      {
        'name': 'dockersock',
        'host': {
          'path': '/var/run/docker.sock',
        },  
      },
    ],
    'steps': [
      {
        'name': 'build',
        'image': 'docker:dind',
        'depends_on': [
          'clone',
        ],
        'volumes': [
          { 
            'name': 'dockersock',
            'path': '/var/run/docker.sock',
          },
        ],
        'commands': [
          'export CI_CONTAINER_NAME=' + image_name,
          'docker build -t $${CI_CONTAINER_NAME} ' + build_folder,
        ],
      },
      {
        'name': 'publish',
        'image': 'docker:dind',
        'depends_on': [
          'build',
        ],
        'volumes': [
          { 
            'name': 'dockersock',
            'path': '/var/run/docker.sock',
          },
        ],
        'environment': {
          'REGISTRY_USER': {
            'from_secret': 'REGISTRY_USER',
          },
          'REGISTRY_TOKEN': {
            'from_secret': 'REGISTRY_TOKEN',
          },
        },
        'commands': [
          'export CI_CONTAINER_NAME=' + image_name,
          'docker login -u $${REGISTRY_USER} -p $${REGISTRY_TOKEN} registry.gitlab.com',
          'docker push $${CI_CONTAINER_NAME}',
        ],
      },
      {
        'name': 'clean up',
        'image': 'docker:dind',
        'depends_on': [
          'publish',
        ],
        'volumes': [
          { 
            'name': 'dockersock',
            'path': '/var/run/docker.sock',
          },
        ],
        'commands': [
          'export CI_CONTAINER_NAME=' + image_name,
          'docker image rm $${CI_CONTAINER_NAME}',
        ],
      },
    ]
  }

def deploy_steps(domain): 
  image_name = 'registry.gitlab.com/${DRONE_REPO}:${DRONE_TAG##v}'

  return [
    {
      "name": 'login to registry',
      "environment": {
        "REGISTRY_USER": {
          "from_secret": 'REGISTRY_USER',
        },
        "REGISTRY_TOKEN": {
          "from_secret": 'REGISTRY_TOKEN',
        },
      },
      "commands": [
        'export CI_CONTAINER_NAME=' + image_name,
        'docker login -u $${REGISTRY_USER} -p $${REGISTRY_TOKEN} registry.gitlab.com',
      ],
    },
    {
      "name": 'pull',
      "depends_on": [
        'login to registry',
      ],
      "commands": [
        'docker pull ' + image_name,
      ],
    },
    {
      "name": 'deploy',
      "depends_on": [
        'pull',
        'login to registry',
      ],
      "environment": {
        'CURRENCY_SOURCE': {
          'from_secret': 'CURRENCY_SOURCE',
        },
        'SESSION_SECRET': {
          'from_secret': 'SESSION_SECRET',
        },
        'DOMAIN': domain,
      },
      'commands': [
        'export CI_CONTAINER_NAME=' + image_name,
        'docker stack deploy -c service.yml --with-registry-auth dpksklad',
      ],
    },
  ]

def main(ctx):
  return [
    release(),
    {
      'kind': 'pipeline',
      'type': 'exec',
      'name': 'deploy to dpksklad.abbexmarket.kz',
      'trigger': {
        'ref': [
          'refs/tags/v*',
        ],
        'event': [
          'promote',
        ],
        'target': [
          'abbex.kz',
        ],
      },
      'node': {
        'env': 'production',
        'scope': 'deploy',
        'domain': 'abbex.kz',
      },
      'steps': deploy_steps('dpksklad.abbexmarket.kz'),
    },
  ]
