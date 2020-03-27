import React, { useState, createRef, useEffect } from 'react';
import { InteractionManager, Image } from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';

// componets
import { Text, Box, SafeAreaView, StatusBar } from '~/components/common';
import { Button, TextInput } from '~/components/formElements';

const inputRef = createRef();

const Signup = () => {
  const [state, setState] = useState({
    username: '',
    pin: '',
  });

  useEffect(() => {
    const handler = InteractionManager.runAfterInteractions(() => {
      inputRef.current.focus();
    });
    return () => handler;
  }, []);

  return (
    <>
      <StatusBar />
      <SafeAreaView style={{ flex: 1 }}>
        <Box style={styles.container}>
          <Box style={styles.heading}>
            <Box style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text heading size={1.563}>
                Welcome to Mut
              </Text>
              <Image
                style={styles.emojiHand}
                source={{
                  uri:
                    'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/waving-hand-sign_1f44b.png',
                }}
              />
            </Box>
            <Text style={styles.subText}>Your personal glorified planner</Text>
          </Box>
          <Box style={styles.formControl}>
            <TextInput
              ref={inputRef}
              value={state.username}
              placeholderText="Username"
              name="username"
              style={styles.usernameInput}
              onChange={(name, value) => setState({ ...state, [name]: value })}
            />

            <TextInput
              value={state.pin}
              placeholderText="Pin"
              name="pin"
              maxLength={4}
              keyboardType="number-pad"
              onChange={(name, value) => setState({ ...state, [name]: value })}
            />
          </Box>
        </Box>
        <Button styleOverride={{ marginTop: 'auto', margin: 0 }}>
          <Text color="textInverse"> Start </Text>
        </Button>
      </SafeAreaView>
    </>
  );
};

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    padding: '2rem',
  },

  emojiHand: {
    width: '1.2rem',
    height: '1.2rem',
    marginLeft: '0.5rem',
  },

  heading: {
    marginTop: '3rem',
    marginBottom: '2rem',
  },

  subText: {
    marginTop: '0.5rem',
  },

  usernameInput: {
    marginBottom: '1.5rem',
  },

  formControl: {},
});
export default Signup;
