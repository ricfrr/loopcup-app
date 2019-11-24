import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Grid, Row, Col, Button, Input } from "native-base";
import { withNavigation } from 'react-navigation';
import UserTopInfoBack from "../components/UserTopInfoBack";

class TopUp extends Component {

  constructor(props) {
    super(props)
    this.state = {
      amount : "0"
    }
  }

  render() {
    return (
      <Grid style={{ backgroundColor: "rgba(20,19,19,1)" }}>
        <Row size={10}>
          <UserTopInfoBack />
        </Row>
        <Row size={50}>
          <View style={styles.image_container}>
            <Input style={styles.moneyValueText}
              keyboardType='number-pad'
              style={styles.amountText}
              onChangeText={(_amount) => {
                this.setState({ amount: _amount })
              }
              }
              value={this.state.amount}
            />
            <Text style={styles.euroText}> €</Text>
            
          </View>

        </Row>
        <Row size={40}>
          <View style={{ width: '100%', alignItems: 'center' }}>
            <Text style={styles.ratioText}> 1€ = 10Lc</Text>
            <Button style={styles.buttonPay} onPress={() => this.props.navigation.navigate('Home')}>
              <Text style={styles.textBuyButton}>Top Up</Text>
            </Button>
          </View>

        </Row>
      </Grid>

    );
  }
}

const styles = StyleSheet.create({

  image_container: {
    height: '80%',
    width: '100%',
    alignItems: 'center',
    alignContent: 'center'

  },
  ratioText: {
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    fontFamily: "roboto-regular",
    width: '100%',
    height: '50%',
    textAlignVertical: 'center',
    textAlign: 'center'

  },
  amountText:{
    color: "rgba(255,255,255,1)",
    fontSize: 50,
    fontFamily: "roboto-regular",
    width: '100%',
    height: '20%',
    textAlignVertical: 'bottom',
    textAlign: 'center'
  },
  euroText:{
    color: "rgba(255,255,255,1)",
    fontSize: 50,
    fontFamily: "roboto-regular",
    width: '100%',
    textAlignVertical: 'center',
    textAlign: 'center'
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

export default withNavigation(TopUp)
