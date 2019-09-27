/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {PureComponent} from 'react';
import SplashScreen from 'react-native-splash-screen';
import Home from './screens/Home';

class App extends PureComponent {
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return <Home />;
  }
}

export default App;
