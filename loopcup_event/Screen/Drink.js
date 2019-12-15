import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import { Grid, Row, Content, Col, Button } from "native-base";
import AsyncStorage from '@react-native-community/async-storage';
import { withNavigation } from 'react-navigation';
import { ToastAndroid } from 'react-native';


import Icon from 'react-native-vector-icons/Ionicons';




class Drink extends Component {
    constructor(props) {
        super(props)
        this.state = {
            base_url: 'http://40.68.90.134/', //'http://10.100.13.83:5000/',
        }
    }

    async validate() {
        var url = this.state.base_url + 'owner/drink';
        var id = this.props.navigation.getParam('drink_id')
        console.log(url)
        console.log(this.state.drink_id)
        await fetch(url, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ coupon_id: id })
        }).then(async response => {
            if (response.status === 200) {
                this.props.navigation.navigate("Home")
            } else {
                ToastAndroid.show('Problem! While Validating', ToastAndroid.SHORT);
            }
        });
    }

    render() {
        return (
            <Grid style={{ backgroundColor: "rgba(20,19,19,1)" }} key={2}>
                <Row size={20}>
                    <Col size={80}>
                        <Icon name="md-arrow-back" size={40} style={styles.topUpIcon} onPress={() => this.props.navigation.navigate("Home")} />
                    </Col>
                    <Col size={20}></Col>
                </Row>
                <Row size={10}>
                    <Col style={{ alignItems: 'center' }}>
                        <Text style={styles.drinkText}>{this.props.navigation.getParam('drink_name')}</Text>
                    </Col>
                </Row>
                <Row size={80} style={{ alignContent: 'center', alignItems: 'center', height: '100%', width: '100%' }}>
                    <Col size={50}>
                        <Button style={styles.buttonPay} onPress={() => this.validate()}><Text style={styles.textBuyButton}>Accept</Text></Button>
                    </Col>
                    <Col size={50}>
                        <Button style={styles.buttonPay} onPress={() => this.props.navigation.navigate("Home")}><Text style={styles.textBuyButton}>Discrad</Text></Button>
                    </Col>
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
    buttonPay: {
        backgroundColor: 'rgba(210,149,0,1)',
        width: '90%',
        alignSelf: 'center',
        borderRadius: 10,
        alignItems: 'center',
    },
    textBuyButton: {
        alignContent: 'center',
        textAlign: 'center',
        color: "rgba(255,255,255,1)",
        width: '80%',
        fontSize: 20,
        fontFamily: "roboto-regular",
    },
    drinkText: {
        alignContent: 'center',
        textAlign: 'center',
        color: "rgba(255,255,255,1)",
        width: '80%',
        fontSize: 40,
        fontFamily: "roboto-regular",
    },
    topUpIcon: {
        color: "rgba(255,255,255,1)",
        textAlignVertical: 'center',
        marginLeft: '5%'
    }
});

export default withNavigation(Drink)

