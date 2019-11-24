import React, { Component } from 'react';
import { LoginButton, LoginManager, AccessToken,GraphRequest, GraphRequestManager} from 'react-native-fbsdk';
import { Button } from 'react-native-paper';
import {StyleSheet,Text} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import AsyncStorage from '@react-native-community/async-storage';
import { withNavigation } from 'react-navigation';





class FBLoginButton extends Component {

  constructor(props) {
    super(props)
    this.checkLogin()
    this.state = {
      email : '',
      name : ''
    }    
  }

  async checkLogin(){
    token = await AsyncStorage.getItem('access_token')
    if (token !== null){
      this.props.navigation.navigate("Home")
    }
  }
  async initialize_user(token){
    await AsyncStorage.setItem('access_token',token)
    var graph_url = "https://graph.facebook.com/v2.5/me?fields=email,name&access_token=";
    var data_url = graph_url + token;

    console.log(data_url)
    await fetch(data_url).then(async response => {
      if (response.status === 200) {
        response.json().then(async (responseJson) => {
          try {
            console.log(responseJson)
            this.setState({
              email : responseJson['email'],
              name : responseJson['name']
          })
            await AsyncStorage.setItem('email',this.state.email);
            await AsyncStorage.setItem('name',this.state.name);
            console.log("data-------")
            console.log(this.state.email)
            console.log(this.state.name)
          } catch (error) {
            console.log("error loading data")
          }
        }
        )
      } else {
        console.log("error retrieving data")
      }
    });
    this.props.navigation.navigate("Home")         
  }


  render() {
    return (

        <LoginButton
          style={styles.loginButton}
          onLoginFinished={
            (error, result) => {
              if (error) {
                console.log("login has error: " + result.error);
              } else if (result.isCancelled) {
                console.log("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  async (data) => {
                    await this.initialize_user(data.accessToken.toString())
                  }
                )
              }
            }
          }
          onLogoutFinished={() => {LoginManager.logOut(); console.log("logout.")}}/>
    )
  }
};

const styles = StyleSheet.create({
  loginButton : {
    backgroundColor: '#4267B2',
    width: '80%',
    height: '15%',
    borderRadius: 20,
    textAlignVertical:'center', 
    textAlign:'center',
    alignContent:'center',
    alignItems:'center',
    fontSize:50,
  },
  textLogin: {
    alignContent: 'center',
    textAlign: 'center',
    color: 'black',
    width: '100%',
    fontSize: 20,
    fontFamily: "roboto",
},
})

export default withNavigation(FBLoginButton);