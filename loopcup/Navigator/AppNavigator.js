import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '../Screen/Home';
import ShopScreen from '../Screen/Shop';

AppNavigator = createStackNavigator(
    {
        Home: HomeScreen, 
        Shop: ShopScreen    
    },{
        initialRouteName : 'Home',
        headerMode : 'none'
    }
);

export default createAppContainer(AppNavigator)