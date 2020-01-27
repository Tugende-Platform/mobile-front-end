import { AppRegistry} from 'react-native';
import { name as appName } from "./app.json";
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import WelcomeScreen from './components/WelcomeScreen';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import PayTicket from './components/PayTicket';
import CheckTickets from './components/CheckTickets';

const MainNavigator = createStackNavigator({
  CheckTickets: {screen: CheckTickets},
  Home: { screen: WelcomeScreen },
  SignUp: { screen: SignUp },
  LogIn: { screen: LogIn },
  PayTicket: {screen: PayTicket},
});

const App = createAppContainer(MainNavigator);

AppRegistry.registerComponent(appName, ()=> App);

export default App;