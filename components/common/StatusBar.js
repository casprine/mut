import React, { useContext } from 'react';
import { StatusBar, Platform } from 'react-native';

import { ThemeContext } from '~/context';

const ThemedStatusBar = ({ ...rest }) => {
  const { activeTheme } = useContext(ThemeContext);

  let style;

  // activeTheme === 'light' ? 'dark-content' : 'light-content'
  if (activeTheme === 'light') {
    style = Platform.OS === 'ios' ? 'dark-content' : 'light-content';
  } else {
    style = 'light-content';
  }

  return <StatusBar {...rest} barStyle={style} translucent />;
};

export default ThemedStatusBar;
