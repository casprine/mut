import React, { useContext } from 'react';
import { SafeAreaView, Button } from 'react-native';

// componets
import { Text } from '~/components';

// context
import { ThemeContext } from '~/context';

// theme
import theme from '~/theme';

const Login = () => {
  const { activeTheme, changeTheme } = useContext(ThemeContext);

  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: theme.colors[activeTheme].background,
        }}
      >
        <Text> Hello world Login</Text>

        <Button title="Change" onPress={() => changeTheme(activeTheme === 'light' ? 'dark' : 'light')} />
      </SafeAreaView>
    </>
  );
};

export default Login;
