import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import UserTopInfo from "../components/UserTopInfo";
import CupState from "../components/CupState";
import DrinkComponent from "../components/DrinkComponent";
import DrinkBoughtComponent from "../components/DrinkBoughtComponent"
import { Grid, Row, Col } from "native-base";

export default class Home extends Component {
  render() {
    return (
      <Grid style={{ backgroundColor: "rgba(20,19,19,1)" }}>
        <Row size={10}>
          <UserTopInfo />
        </Row>
        <Row size={10}>
          <CupState/>
        </Row>
        <Row size={5}>
          <Text style={styles.Menu}>Drinks</Text>
        </Row>
        <Row size={25}>
          <ScrollView
          >
            <DrinkBoughtComponent drink_name ="Beer" drink_id = "1111" drink_cost ="30" drink_image ="https://media.timeout.com/images/103592805/image.jpg"/>

          </ScrollView>
        </Row>
        <Row size={5}>
          <Text style={styles.Menu}>Menu</Text>
        </Row>
        <Row size={30}>
          <ScrollView
          >
            <DrinkComponent drink_name ="Mojito" drink_id = "1111" drink_cost ="40" drink_image ="https://kitchenswagger.com/wp-content/uploads/2019/01/improved-whiskey-cocktail2.jpg"/>
            <DrinkComponent drink_name ="Medium Beer" drink_id = "1111" drink_cost ="30" drink_image ="https://media.timeout.com/images/103592805/image.jpg"/>
            <DrinkComponent drink_name ="Small Beer" drink_id = "1111" drink_cost ="20" drink_image ="https://media.timeout.com/images/103592805/image.jpg"/>
          </ScrollView>

        </Row>

      </Grid>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(20,19,19,1)"
  },
  scrollArea: {
    width: 375,
    height: 338,
    backgroundColor: "rgba(20,19,19,1)",
  },
  scrollArea_contentContainerStyle: {
    width: 349,
    height: 316
  },
  drinkComponent: {
    width: 302,
    height: 51,
    marginTop: 35,
    marginLeft: 37
  },
  Menu: {
    color: "rgba(255,255,255,1)",
    fontSize: 35,
    height: '100%',
    textAlignVertical : 'center',
    width:'100%',
    marginLeft: 10,
    fontFamily: "roboto-regular"
  },
  scrollAreaStack: {
    width: 375,
    height: 373
  }
});
