def release_steps(image_prefix = '', build_folder = '.'): 
  image_name = 'registry.gitlab.com/${DRONE_REPO}:' + image_prefix + '${DRONE_TAG##v}'

  return [
    {
      'name': 'login to registry',
      'environment': {
        'REGISTRY_USER': {
          'from_secret': 'REGISTRY_USER',
        },
        'REGISTRY_TOKEN': {
          'from_secret': 'REGISTRY_TOKEN',
        },
      },
      'commands': [
        'docker login -u $${REGISTRY_USER} -p $${REGISTRY_TOKEN} registry.gitlab.com',
      ],
    },
    {
      'name': 'build',
      'depends_on': [
        'clone',
      ],
      'commands': [
        'export CI_CONTAINER_NAME=' + image_name,
        'docker build -t $${CI_CONTAINER_NAME} ' + build_folder,
      ],
    },
    {
      'name': 'publish',
      'depends_on': [
        'login to registry',
        'build',
      ],
      'commands': [
        'export CI_CONTAINER_NAME=' + image_name,
        'docker push $${CI_CONTAINER_NAME}',
      ],
    },
    {
      'name': 'clean up',
      'depends_on': [
        'publish',
      ],
      'commands': [
        'export CI_CONTAINER_NAME=' + image_name,
        'docker image rm $${CI_CONTAINER_NAME}',
      ],
    },
  ]

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
    {
      'kind': 'pipeline',
      'type': 'exec',
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
      'node': {
        'env': 'ci',
        'scope': 'build',
        'domain': 'drone.croxware.com',
      },
      'steps': release_steps(),
    },
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
