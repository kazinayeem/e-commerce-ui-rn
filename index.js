import {AppRegistry} from 'react-native';
import './gesture-handler';
import {name as appName} from './app.json';
import Main from './src/navigation/Main';

import {
  configureReanimatedLogger,
  ReanimatedLogLevel,
} from 'react-native-reanimated';

// This is the default configuration
configureReanimatedLogger({
  level: ReanimatedLogLevel.warn,
  strict: false, // Reanimated runs in strict mode by default
});
AppRegistry.registerComponent(appName, () => Main);
