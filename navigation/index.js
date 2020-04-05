import React from 'react';

// screens
import { AuthNavigator, AppNavigator } from '~/screens';

const RootNavigator = () => {
  const isLoggedIn = true;
  return (
    <>
      {isLoggedIn && <AppNavigator />}
      {!isLoggedIn && <AuthNavigator />}
    </>
  );
};

export default RootNavigator;
