import React, { createContext, useState } from 'react';

import PropTypes from 'prop-types';

const ThemeContext = createContext({});

const Provider = ({ children }) => {
  const [activeTheme, setActiveTheme] = useState('dark');

  return <ThemeContext.Provider value={{ activeTheme, changeTheme }}>{children}</ThemeContext.Provider>;

  function changeTheme(type) {
    setActiveTheme(type);
  }
};

ThemeContext.ProviderWrapper = Provider;

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeContext;
