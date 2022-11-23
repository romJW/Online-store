import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import styles from './styles/tailwind.css';
export function links() {
  return [
    { rel: 'stylesheet', href: styles },
    {
      rel: 'stylesheet',
      href: 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css',
    },
    { rel: 'stylesheet', href: '/assets/fontawesome/css/all.css' },
    {rel:"preconnect", href:"https://fonts.googleapis.com"},
    {rel:"preconnect", href:"https://fonts.gstatic.com" },
    {rel:"stylesheet", href:"https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;500;600;700;800;900&display=swap"},
    {rel:"stylesheet", href:"https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;500;600;700;800;900&display=swap"}

  ];
}


export const meta = () => ({
  charset: 'utf-8',
  title: 'New Remix App',
  viewport: 'width=device-width,initial-scale=1',
});

export default function App() {

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body data-theme="berry">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
      </body>
    </html>
  );
}
