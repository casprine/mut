import React, { useState } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

// componets
import { Text, Box, SafeAreaView, StatusBar } from '~/components/common';
import { VerificationCodeDisplay, ManagedKeypad } from '~/components/formElements';

const Login = () => {
  const [pin, setPin] = useState('');

  const username = 'Casprine';
  return (
    <>
      <StatusBar />
      <SafeAreaView style={{ flex: 1 }}>
        <Box style={styles.container}>
          <Box style={styles.salutation}>
            <Text heading size={1.563}>
              Welcome {username}
            </Text>
            <Text style={styles.subText} align="center">
              Please enter your pin code
            </Text>
          </Box>
          <Box style={styles.VerificationBox}>
            <VerificationCodeDisplay value={pin} />
            {/* <Button title="Change" onPress={() => changeTheme(activeTheme === 'light' ? 'dark' : 'light')} /> */}
          </Box>

          <ManagedKeypad onValueChange={({ _, newValue }) => setPin(newValue)} />
        </Box>
      </SafeAreaView>
    </>
  );
};

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  salutation: {
    marginTop: '6rem',
    justifyContent: 'center',
    alignItems: 'center',
  },

  subText: {
    marginTop: '0.5rem',
  },

  VerificationBox: {
    marginTop: '4rem',
    marginBottom: 'auto',
  },
});
export default Login;
