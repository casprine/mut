import React from 'react';
import { SafeAreaView } from 'react-native';

// componets
import { Text } from '~/components';

const Login = () => {
  return (
    <>
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text> Hello world Login</Text>
      </SafeAreaView>
    </>
  );
};

export default Login;
