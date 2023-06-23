import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigation from './src/Navigation/AppStack';
import store from './src/store';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar barStyle={'light-content'} />
        <AppNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
