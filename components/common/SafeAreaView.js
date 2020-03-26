import React, { useContext } from 'react';
import { SafeAreaView } from 'react-native';

import { ThemeContext } from '~/context';

// theme
import theme from '~/theme';

const ThemedSafeAreaView = ({ children, ...rest }) => {
  const { activeTheme } = useContext(ThemeContext);

  return (
    <SafeAreaView
      {...rest}
      style={{
        flex: 1,
        backgroundColor: theme.colors[activeTheme].background,
      }}
    >
      {children}
    </SafeAreaView>
  );
};

export default ThemedSafeAreaView;
