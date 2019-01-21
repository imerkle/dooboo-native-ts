import { AppRegistry, YellowBox } from 'react-native';
import App from 'app';

/**
 * React Native 0.54 warning message ignore.
 */
YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',,
  'Module RCTImageLoader',
]);

AppRegistry.registerComponent('dooboo', () => App);
