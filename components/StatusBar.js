import React, { useContext } from 'react';
import { StatusBar } from 'react-native';

import { ThemeContext } from '~/context';

const ThemedStatusBar = ({ ...rest }) => {
  const { activeTheme } = useContext(ThemeContext);

  return <StatusBar {...rest} barStyle={activeTheme === 'light' ? 'dark-content' : 'light-content'} />;
};

export default ThemedStatusBar;
