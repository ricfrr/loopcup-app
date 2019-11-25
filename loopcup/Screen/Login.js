import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Grid, Row, Col, Button } from "native-base";
import { withNavigation } from 'react-navigation';
import FBLoginButton from '../components/FBLoginButton';


class Login extends Component {

  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Grid style={{ backgroundColor: "rgba(20,19,19,1)" }}>
        <Row size={80}>
          <View style={styles.image_container}>
            {/* TODO image without background and payoff */}
            <Image
              source={require("../assets/images/logo.png")}

              style={styles.image}
            />
          </View>

        </Row>
        
        <Row size={30}>
          <View style={{ width: '100%', alignItems: 'center' }}>
          <FBLoginButton/>
          </View>

        </Row>
      </Grid>

    );
  }
}

const styles = StyleSheet.create({

  image_container: {
    marginTop:'20%',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    alignContent: 'center'

  },
  image: {
    height: 300,
    width: 300,
  },
  text: {
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    fontFamily: "roboto-regular",
    width: '100%',
    height: '80%',
    textAlignVertical: 'center'
  },
  buttonPay: {
    backgroundColor: 'rgba(210,149,0,1)',
    width: '80%',
    alignSelf: 'center',
    borderRadius: 10,
    alignItems: 'center',
  },
  textBuyButton: {
    alignContent: 'center',
    textAlign: 'center',
    color: "rgba(255,255,255,1)",
    width: '100%',
    fontSize: 20,
    fontFamily: "roboto-regular",
  },

  lineStyleRight: {
    width: '80%',
    height: 2,
    backgroundColor: "rgba(230, 230, 230,1)",
    textAlign: 'left'
  },
  lineStyleLeft: {
    width: '80%',
    height: 2,
    backgroundColor: "rgba(230, 230, 230,1)",
    marginLeft: '20%'

  }

});

export default withNavigation(Login)
