import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Grid, Col } from "native-base";

export default class CupState extends Component {
  constructor(props){
    super(props)
  }
  render() {
    var message = "Not Paired"
    if (this.props.num_cup>0){
      message = this.props.num_cup + " cup paired"
    }
    return (
      <Grid >
        <Col size={40} >
          <View style={styles.cupPic}>
            <Image
              source={require("../assets/images/cup.png")}
              resizeMode="contain"
              style={styles.image}
            />
          </View>
          
        </Col>
        <Col size={60}>
    <Text style={styles.text2}>{message}</Text>
        </Col>
      </Grid>
    );
  }
}

const styles = StyleSheet.create({
  cupPic: {
    width:'100%',
    height:'100%', 
    alignContent:'center'
  },
  image: {
    width: '60%',
    height: '60%'
  },
  text2: {
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    fontFamily: "roboto-regular",
    width :'100%',
    height : '80%', 
    textAlignVertical: 'center'
  }
});
