import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import { Grid, Col, Row } from "native-base";
import Icon from 'react-native-vector-icons/Ionicons';
import { withNavigation } from 'react-navigation';
import AsyncStorage from "@react-native-community/async-storage";


class UserTopInfoBack extends Component {
  constructor(props){
    super(props)
    this.state = {
      token: null
    }
    this.get_url_pic()
  }

  async get_url_pic(){
    _token = await AsyncStorage.getItem('access_token')
    this.setState({
      token : _token  
    })
    console.log("https://graph.facebook.com/me/picture?access_token="+this.state.token)
  }
  render() {
    return (
      <Grid>
        <Col size={80}>
          <Row >
            <Icon name="md-arrow-back" size={40} style={styles.topUpIcon} onPress={()=> this.props.navigation.goBack()}/> 
          </Row>
        </Col>
        <Col size={20} style={{ height: '100%', alignContent: 'center' }}>
          <View style={{ marginTop: 20, height: '100%', alignItems: 'center', alignSelf: 'center', alignContent: 'center' }}>
            <Image style={styles.image} source={{ uri:  "https://graph.facebook.com/me/picture?access_token="+this.state.token }} />
          </View>
        </Col>
      </Grid>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  text: {
    color: "rgba(255,255,255,1)",
    fontSize: 35,
    fontFamily: "roboto-regular",
    width: '60%',
    marginTop: 20,
  },
  textRow: {
    height: 53,
    flexDirection: "row",
    flex: 1,
    marginRight: 1
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 64
  },
  topUpIcon: {
    color: "rgba(255,255,255,1)",
    textAlignVertical :'center', 
    marginLeft: '5%'
  }
});


export default withNavigation(UserTopInfoBack)
