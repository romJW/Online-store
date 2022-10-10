import React from 'react'

export const MobileMenuContext = React.createContext({
  isOpen: false,
  toggle: () => {},
});
