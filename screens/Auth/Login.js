import React, { useContext } from 'react';
import { SafeAreaView, Button, ScrollView } from 'react-native';

// componets
import { Text, Box } from '~/components/common';
import { VerificationCodeDisplay, ManagedKeypad } from '~/components/formElements';

// context
import { ThemeContext } from '~/context';

const Login = () => {
  const { activeTheme, changeTheme } = useContext(ThemeContext);

  return (
    <>
      <Box style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button title="Change" onPress={() => changeTheme(activeTheme === 'light' ? 'dark' : 'light')} />

        <ScrollView>
          <Text fontFamily="Inter">Find your first Flat</Text>
          <Text fontFamily="Firma">Find your first Flat</Text>
        </ScrollView>
        <ManagedKeypad />

        {/* <VerificationCodeDisplay value="1235" /> */}
        {/* <Button title="Change" onPress={() => changeTheme(activeTheme === 'light' ? 'dark' : 'light')} /> */}
      </Box>
    </>
  );
};

export default Login;
