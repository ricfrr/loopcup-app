import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import UserTopInfo from "../components/UserTopInfo";
import CupState from "../components/CupState";
import DrinkComponent from "../components/DrinkComponent";
import DrinkBoughtComponent from "../components/DrinkBoughtComponent"
import { Grid, Row, Content, Spinner } from "native-base";
import AsyncStorage from '@react-native-community/async-storage';


export default class Home extends Component {
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


  componentDidMount() {

    this.getUserInfo()
    this.getMenu()
    this.willFocusSubscription = this.props.navigation.addListener(
      'willFocus',
      () => {
        this.getUserInfo()
        this.getMenu()
      }
    );
  }

  componentWillUnmount() {
    this.willFocusSubscription.remove();
  }


  async getMenu() {
    var api_url = this.state.base_url + "drink/all";
    fetch(api_url).then(async response => {
      if (response.status === 200) {
        response.json().then(async (responseJson) => {
          try {
            this.setState({
              menu: responseJson
            })
          } catch (error) {
            console.log("error loading data")
          }
        }
        )
      } else {
        console.log("error retrieving data")
      }
    });
    console.log(this.state.menu)
  }

  async getUserInfo() {
    var mail = await AsyncStorage.getItem('email');
    this.setState({
      isLoading: true
    })
    var api_url = this.state.base_url + "profile/info/";
    var profile_info_url = api_url + mail;
    console.log(profile_info_url);

    fetch(profile_info_url).then(async response => {
      if (response.status === 200) {
        response.json().then(async (responseJson) => {
          try {
            this.setState({
              isLoading: false,
              drinks: responseJson["drinks"],
              cup_paired: responseJson["cups"],
              loop_coins: responseJson["loop_coins"],
              id: responseJson["id"],
            })
            await AsyncStorage.setItem('id', this.state.id);
          } catch (error) {
            console.log("error loading data")
          }
        }
        )
      } else {
        console.log("error retrieving data")
      }
    });
  }

  render() {
    var home = [];
    // spinner for while is fetching data
    if (this.state.isLoading) {
      home = [];
      home.push(
        <Content key={1} style={{ backgroundColor: "rgba(20,19,19,1)" }}>
          <Spinner color='rgba(255,255,255,1)'></Spinner>
        </Content>
      )
    } else {


      var user_drinks = []
      if (this.state.drinks.length == 0) {
        user_drinks.push(
          <Text style={styles.no_drink_user_text}>Buy something from the menu</Text>
        )
      } else {
        for (var i = 0; i < this.state.drinks.length; i++) {
          user_drinks.push(<DrinkBoughtComponent key={i} loop_coins={this.state.loop_coins} drink_name={this.state.drinks[i]["message"]} drink_id={this.state.drinks[i]["coupon_id"]} drink_cost={this.state.drinks[i]["cost"]} drink_image={this.state.base_url + this.state.drinks[i]["image"]} drink_descr={this.state.drinks[i]["description"]} />)
        }
      }

      var menu = []
      for (var i = 0; i < this.state.menu.length; i++) {
        menu.push(<DrinkComponent key={i} loop_coins={this.state.loop_coins} drink_name={this.state.menu[i]["message"]} drink_id={this.state.menu[i]["coupon_id"]} drink_cost={this.state.menu[i]["cost"]} drink_image={this.state.base_url + this.state.menu[i]["image"]} drink_descr={this.state.menu[i]["description"]} />)
      }


      // 
      home = [];
      home.push(
        <Grid style={{ backgroundColor: "rgba(20,19,19,1)" }} key={2}>
          <Row size={10}>
            <UserTopInfo loop_coins={this.state.loop_coins} />
          </Row>
          <Row size={10}>
            <CupState num_cup={this.state.cup_paired} />
          </Row>
          <Row size={5}>
            <Text style={styles.Menu}>Your Drinks</Text>
          </Row>
          <Row size={25}>
            <ScrollView
            >
              {user_drinks}
            </ScrollView>
          </Row>
          <Row size={5}>
            <Text style={styles.Menu}>Menu</Text>
          </Row>
          <Row size={30}>
            <ScrollView
            >
              {menu}
            </ScrollView>

          </Row>

        </Grid>
      )
    }
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
    textAlignVertical: 'center',
    width: '100%',
    marginLeft: 10,
    fontFamily: "roboto-regular"
  },
  no_drink_user_text: {
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    height: '40%',
    textAlignVertical: 'center',
    width: '100%',
    marginLeft: 10,
    fontFamily: "roboto-regular"
  },
  scrollAreaStack: {
    width: 375,
    height: 373
  }
});
