import {AppRegistry} from 'react-native';
import './gesture-handler';
import {name as appName} from './app.json';
import Main from './src/navigation/Main';


AppRegistry.registerComponent(appName, () => Main);
