import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const ThemeContext = createContext({});

const Provider = ({ children }) => {
  return <ThemeContext.Provider>{children}</ThemeContext.Provider>;
};

ThemeContext.ProviderWrapper = Provider;

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeContext;
