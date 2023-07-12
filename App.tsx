/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Provider } from 'react-redux';
import MainNavigation from './src/Navigation/MainNavigation';
import store from './src/Store/Store';




function App(): JSX.Element {


  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider >
  );
}



export default App;
