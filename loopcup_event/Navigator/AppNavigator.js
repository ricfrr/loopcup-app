import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '../Screen/Home';
import LoginScreen from '../Screen/Login';
import ScanScreen from '../Screen/ScanScreen';
import DrinkScreen from '../Screen/Drink'
import Drink from '../Screen/Drink';

AppNavigator = createStackNavigator(
    {
        Login : LoginScreen,
        Home: HomeScreen, 
        Scan: ScanScreen, 
        Drink: DrinkScreen
    },{
        initialRouteName : 'Login',
        headerMode : 'none'
    }
);

export default createAppContainer(AppNavigator)