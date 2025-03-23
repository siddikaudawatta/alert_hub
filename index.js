import { AppRegistry } from 'react-native';
import EntryPoint from './app/EntryPint'
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => EntryPoint);