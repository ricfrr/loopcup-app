import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import { Grid, Row, Content, Col, Spinner } from "native-base";
import AsyncStorage from '@react-native-community/async-storage';
import { ToastAndroid } from 'react-native';
import UserTopInfo from "../components/UserTopInfo";
import { withNavigation } from 'react-navigation';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { Button } from "react-native-paper";




class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      loop_coins: 0,
      cup_paired: 0,
      drinks: 0,
      id: 0,
      menu: [],
      base_url: 'http://192.168.1.4:5000/',
      count: 0
    }
  }



  componentWillUnmount() {
    this.willFocusSubscription.remove();
  }

  render() {

    // 
    home = [];
    home.push(
      <Grid style={{ backgroundColor: "rgba(20,19,19,1)" }} key={2}>
        <Col size={100} style={{ alignContent: 'center' }}>
          <Row size={100} style={{ alignContent: 'center', alignItems:'center', width:'100%' }}>

            <Button style={styles.buttonPay} onPress={()=>{this.props.navigation.navigate("Scan")}}><Text style={styles.textBuyButton}>SCAN QR</Text></Button>

          </Row>

        </Col>
      </Grid>
    )
    return (
      home
    );
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(20,19,19,1)"
  },
  buttonPay: {
    backgroundColor: 'rgba(210,149,0,1)',
    width: '100%',
    height: '8%',
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
  }
});

export default withNavigation(Home)

