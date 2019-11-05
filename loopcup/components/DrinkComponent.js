import React, { Component } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  ScrollView,
  Text,
  Image
} from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import { Grid, Col } from "native-base";
import { withNavigation } from 'react-navigation';

class DrinkComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      drink_name: props.drink_name,
      drink_id: props.drink_id,
      drink_cost: props.drink_cost,
      drink_image: props.drink_image
    }
  }

  render() {
    return (

      <TouchableOpacity style={[styles.container]} onPress={()=> this.props.navigation.navigate('Shop', {
        drink_name: this.state.drink_name,
        drink_image: this.state.drink_image,
        drink_cost: this.state.drink_cost, 
        drink_descr: 'Traditionally, a mojito is a cocktail that consists of five ingredients: white rum, sugar (traditionally sugar cane juice), lime juice, soda water, and mint.[1][2] Its combination of sweetness, citrus, and herbaceous mint flavors is intended to complement the rum, and has made the mojito a popular summer drink.',
      })}>
        <Grid>
          <Col size={15}>
            <View style={{ height: '100%', alignItems: 'center', alignSelf: 'center', alignContent: 'center' }}>
              <Image style={styles.image} source={{ uri: this.state.drink_image }} />
            </View>
          </Col>
          <Col size={60}>
            <Text style={styles.text3}>{this.state.drink_name}</Text>
          </Col>
          <Col size={20}>
            <Text style={styles.text4}>Lc {this.state.drink_cost}</Text>
          </Col>
        </Grid>

      </TouchableOpacity>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 12,
    width: '95%',
    alignSelf: 'center',
    padding: '1%',
    margin: '1%'
  },
  text3: {
    color: "#121212",
    fontSize: 22,
    height: '100%',
    textAlignVertical: 'center',
    fontFamily: "roboto-regular",
    alignContent: 'center'
  },
  text4: {
    color: "rgba(210,149,0,1)",
    fontSize: 22,
    height: '100%',
    textAlignVertical: 'center',
    fontFamily: "roboto-regular",
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 64
  }
});


export default withNavigation(DrinkComponent)