import React from 'react';

// screens
import { AuthNavigator, AppNavigator } from '~/screens';

const RootNavigator = () => {
  const isLoggedIn = false;
  return (
    <>
      {isLoggedIn && <AppNavigator />}
      {!isLoggedIn && <AuthNavigator />}
    </>
  );
};

export default RootNavigator;
