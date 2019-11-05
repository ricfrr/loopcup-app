import React, { Component} from "react";
import { StyleSheet, View,Image, Text } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import { Grid, Col } from "native-base";

export default class UserTopInfo extends Component {
  render() {
    return (
      <Grid>
        <Col size={80}>
        <Text style={styles.text}>Lc 135.42</Text>
        </Col>
        <Col size={20} style={{height:'100%', alignContent:'center'}}>
          <View style={{marginTop:20,height:'100%', alignItems:'center', alignSelf:'center', alignContent:'center'}}>
          <Image style={ styles.image } source={{ uri: 'https://media.licdn.com/dms/image/C4D03AQHKDnkwleqztQ/profile-displayphoto-shrink_200_200/0?e=1578528000&v=beta&t=AFYzBQiOgauGqOFfIgRxrYoFomOuecx3zbheB0D_u4o' }} />
  
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
    width: '100%',
    marginTop: 20,
    
  },
  textRow: {
    height: 53,
    flexDirection: "row",
    flex: 1,
    marginRight: 1
  },
  image: {
    height:50,
    width: 50,
    borderRadius: 64
  },
});
