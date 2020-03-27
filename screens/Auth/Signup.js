import React, { useState, createRef, useEffect } from 'react';
import { InteractionManager, Image, Platform } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

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

  // useEffect(() => {
  //   const handler = InteractionManager.runAfterInteractions(() => {
  //     inputRef.current.focus();
  //   });
  //   return () => handler;
  // }, []);

  return (
    <>
      <StatusBar />
      <SafeAreaView>
        <KeyboardAwareScrollView contentContainerStyle={{ flex: 1 }}>
          <Box style={{ flex: 1 }}>
            <Box style={styles.container}>
              <Box style={styles.logoContainer}>
                <Image source={require('../../assets/images/icon.png')} style={styles.logo} />
              </Box>
              <Box style={styles.heading}>
                <Box style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text heading size={1.8}>
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
                <Text style={styles.subText}>
                  Your personal glorified planner. Organize and priortize all your tasks so you can live more and stress
                  less.
                </Text>
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

            <Box style={{ marginTop: 'auto', margin: 0 }}>
              <Button>
                <Text color="textInverse"> Welcome Aboard </Text>
              </Button>
            </Box>
          </Box>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    padding: '2rem',
  },

  logoContainer: {
    marginTop: '1.5rem',
  },

  logo: {
    width: 70,
    height: 70,
  },

  emojiHand: {
    width: '1rem',
    height: '1rem',
    marginLeft: '0.5rem',

    ...Platform.select({
      ios: {
        marginTop: -10,
      },
    }),
  },

  heading: {
    marginBottom: '1.5rem',
    marginTop: '1.5rem',
  },

  subText: {
    marginTop: '0.7rem',
  },

  usernameInput: {
    marginBottom: '1.5rem',
  },

  formControl: {
    marginTop: '1.2rem',
  },
});
export default Signup;
