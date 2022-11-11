import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import styles from './styles/tailwind.css';
import { MobileMenuContext } from './contexts/MobileMenu.js';
import { useState } from 'react'

export function links() {
  return [
    { rel: 'stylesheet', href: styles },
    { rel: 'stylesheet', href: 'assets/fontawesome/css/all.css' },
  ];
}


export const meta = () => ({
  charset: 'utf-8',
  title: 'New Remix App',
  viewport: 'width=device-width,initial-scale=1',
  robots: 'noindex',
});

export default function App() {
  const [mobileMenuOpen, setMobileMenuState] = useState();

  const mobileMenu = {
    isOpen: mobileMenuOpen,
    toggle: () => setMobileMenuState(!mobileMenuOpen)
  }

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body data-theme="berry">
      <MobileMenuContext.Provider value={mobileMenu}>
          <Outlet />
        </MobileMenuContext.Provider>

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
