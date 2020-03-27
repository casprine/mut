import * as React from 'react';
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
import { AppearanceProvider } from 'react-native-appearance';
import EStyleSheet from 'react-native-extended-stylesheet';

// Root Navigator
import RootNavigator from './navigation';

// theme
import theme from '~/theme';

// context
import { ThemeContext } from '~/context';

// components
import { SafeAreaView } from '~/components/common';

EStyleSheet.build({
  // always call EStyleSheet.build() even if you don't use global variables!
});

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const containerRef = React.useRef();

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          Inter: require('./assets/fonts/Inter-Regular.ttf'),
          Larsseit: require('./assets/fonts/Larsseit.ttf'),
          Circular: require('./assets/fonts/Circular.ttf'),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      <ThemeContext.ProviderWrapper>
        <SafeAreaView>
          <NavigationContainer ref={containerRef}>
            <ThemeProvider theme={theme}>
              <AppearanceProvider>
                <RootNavigator />
              </AppearanceProvider>
            </ThemeProvider>
          </NavigationContainer>
        </SafeAreaView>
      </ThemeContext.ProviderWrapper>
    );
  }
}
