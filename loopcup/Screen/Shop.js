import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import UserTopInfo from "../components/UserTopInfo";
import DrinkDescription from "../components/DrinkDescription";
import { Grid, Row, Col } from "native-base";
import UserTopInfoBack from "../components/UserTopInfoBack";

export default class Shop extends Component {

  constructor(props){
      super(props)
  }  
  render() {
    return (
      <Grid style={{ backgroundColor: "rgba(20,19,19,1)" }}>
        <Row size={10}>
          <UserTopInfoBack/>
        </Row>
        <Row size={90}>
          <DrinkDescription />
        </Row>
        

      </Grid>

    );
  }
}

