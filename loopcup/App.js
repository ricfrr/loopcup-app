import React, {Component} from 'react';
import AppNavigator from './Navigator/AppNavigator';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import couponReducers from './Reducers/CouponReducers';



const store = createStore(couponReducers);


export default class App extends React.Component {

  constructor(props) {
      super(props);
      //AsyncStorage.clear();     //Uncomment this row, if you want reset the local storage
  }

  render() {
      return (
        <Provider store={store}>
            <AppNavigator/>
        </Provider>
      )
     
    
  }
}



