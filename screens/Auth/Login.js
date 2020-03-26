import React, { useContext } from 'react';
import { SafeAreaView, Button } from 'react-native';

// componets
import { Text, Box } from '~/components/common';

// context
import { ThemeContext } from '~/context';

const Login = () => {
  const { activeTheme, changeTheme } = useContext(ThemeContext);

  return (
    <>
      <Box style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text> Hello world Login</Text>
        <Button title="Change" onPress={() => changeTheme(activeTheme === 'light' ? 'dark' : 'light')} />
      </Box>
    </>
  );
};

export default Login;
