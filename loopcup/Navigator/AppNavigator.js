import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '../Screen/Home';
import ShopScreen from '../Screen/Shop';
import LoginScreen from '../Screen/Login';
import TopUpScreen from '../Screen/TopUp';
import ShowDrinkScreen from '../Screen/ShowDrink'

AppNavigator = createStackNavigator(
    {
        Login : LoginScreen,
        Home: HomeScreen, 
        Shop: ShopScreen, 
        TopUp: TopUpScreen,
        ShowDrink: ShowDrinkScreen, 
    },{
        initialRouteName : 'Login',
        headerMode : 'none'
    }
);

export default createAppContainer(AppNavigator)