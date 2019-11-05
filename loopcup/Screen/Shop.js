import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import UserTopInfo from "../components/UserTopInfo";
import CupState from "../components/CupState";
import DrinkDescription from "../components/DrinkDescription";
import { Grid, Row, Col } from "native-base";

export default class Shop extends Component {

  constructor(props){
      super(props)
  }  
  render() {
    return (
      <Grid style={{ backgroundColor: "rgba(20,19,19,1)" }}>
        <Row size={10}>
          <UserTopInfo />
        </Row>
        <Row size={90}>
          <DrinkDescription/>
        </Row>
        

      </Grid>

    );
  }
}

const styles = StyleSheet.create({
  
});
