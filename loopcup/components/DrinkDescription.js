import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Button, Grid, Col, Row } from "native-base";
import { withNavigation } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import { ToastAndroid } from 'react-native';


class DrinkDescription extends Component {
    constructor(props) {
        super(props)
        this.state = {
            base_url: 'http://192.168.1.4:5000/',
            drink_id: this.props.navigation.getParam('drink_id')
        }
    }

    async buy() {
        var url = this.state.base_url + 'drink/buy';
        var id = await AsyncStorage.getItem('id');
        console.log(url)
        console.log(this.state.drink_id)
        await fetch(url, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ profile_id: id, drink_id: this.state.drink_id, cup_number : parseFloat(this.props.navigation.getParam('cup_paired')) })
        }).then(async response => {
            if (response.status === 200) {
                this.props.navigation.goBack()
            } else {
                ToastAndroid.show('Problem! Try to check your credit', ToastAndroid.SHORT);
            }
        });
    }

    render() {
        var bill = []

        if (this.props.navigation.getParam('cup_paired') == 0) {
            bill.push(
                <Row size={40}>
                    <Col size={50}>
                        <Row size={20}>
                            <Text style={styles.text_cash_name}> </Text>
                        </Row>
                        <Row size={20}>
                            <Text style={styles.text_cash_name}> {this.props.navigation.getParam('drink_name')}</Text>
                        </Row>
                        <Row size={20}>
                            <Text style={styles.text_cash_name}> Cup</Text>
                        </Row>
                        <Row size={2}>
                            <View style={styles.lineStyleLeft} />
                        </Row>
                        <Row size={18}>
                            <Text style={styles.text_cash_name}> Total</Text>
                        </Row>
                    </Col>

                    <Col size={50}>
                        <Row size={20}>
                            <Text style={styles.text_cash}> Lc {this.props.navigation.getParam('loop_coins')}</Text>
                        </Row>
                        <Row size={20}>
                            <Text style={styles.text_cash}> Lc {this.props.navigation.getParam('drink_cost')}</Text>
                        </Row>
                        <Row size={20}>
                            <Text style={styles.text_cash}> Lc 20</Text>
                        </Row>
                        <Row size={2}>
                            <View style={styles.lineStyleRight} />
                        </Row>
                        <Row size={18}>
                            <Text style={styles.text_cash}> Lc {(parseFloat(this.props.navigation.getParam('loop_coins')) - 20 - parseFloat(this.props.navigation.getParam('drink_cost'))).toFixed(2)}</Text>
                        </Row>
                    </Col>
                </Row>)

        } else {
            bill.push(
                <Row size={40}>
                    <Col size={50}>
                        <Row size={30}>
                            <Text style={styles.text_cash_name}> </Text>
                        </Row>
                        <Row size={30}>
                            <Text style={styles.text_cash_name}> {this.props.navigation.getParam('drink_name')}</Text>
                        </Row>
                        <Row size={2}>
                            <View style={styles.lineStyleLeft} />
                        </Row>
                        <Row size={28}>
                            <Text style={styles.text_cash_name}> Total</Text>
                        </Row>
                    </Col>

                    <Col size={50}>
                        <Row size={30}>
                            <Text style={styles.text_cash}> Lc {this.props.navigation.getParam('loop_coins')}</Text>
                        </Row>
                        <Row size={30}>
                            <Text style={styles.text_cash}> Lc {this.props.navigation.getParam('drink_cost')}</Text>
                        </Row>
                        <Row size={2}>
                            <View style={styles.lineStyleRight} />
                        </Row>
                        <Row size={28}>
                            <Text style={styles.text_cash}> Lc {(parseFloat(this.props.navigation.getParam('loop_coins')) - parseFloat(this.props.navigation.getParam('drink_cost'))).toFixed(2)}</Text>
                        </Row>
                    </Col>
                </Row>)
        }

        return (
            <Grid >
                <Row size={30} >
                    <View style={styles.image_container}>
                        <Image style={styles.image} source={{ uri: this.props.navigation.getParam('drink_image') }} />
                    </View>

                </Row>
                <Row size={10}>
                    <Text style={styles.text}> {this.props.navigation.getParam('drink_name')}</Text>
                </Row>
                <Row size={20}>
                    <Text style={styles.text2}>{this.props.navigation.getParam('drink_descr')}</Text>
                </Row>
                {bill}
                <Row size={10}>
                    <View style={{ width: '100%', alignItems: 'center' }}>
                        <Button style={styles.buttonPay}>
                            <Text style={styles.textBuyButton} onPress={() => { this.buy() }}>PAY</Text>
                        </Button>
                    </View>

                </Row>
            </Grid>
        );
    }
}

const styles = StyleSheet.create({

    image_container: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        alignSelf: 'center',
        alignContent: 'center'
    },
    image: {
        height: 200,
        width: 200,
        borderRadius: 100
    },
    text: {
        color: "rgba(255,255,255,1)",
        fontSize: 35,
        fontFamily: "roboto-regular",
        width: '100%',
        height: '100%',
        textAlignVertical: 'top',
        textAlign: 'center'

    },
    text2: {
        color: "rgba(255,255,255,1)",
        fontSize: 15,
        fontFamily: "roboto-regular",
        width: '100%',
        height: '100%',
        textAlignVertical: 'top',
        textAlign: 'center'
    },
    text_cash: {
        color: "rgba(255,255,255,1)",
        fontSize: 30,
        fontFamily: "roboto-regular",
        width: '100%',
        height: '100%',
        textAlignVertical: 'top',
        textAlign: 'left'

    },
    text_cash_name: {
        color: "rgba(255,255,255,1)",
        fontSize: 30,
        fontFamily: "roboto-regular",
        width: '100%',
        height: '100%',
        textAlignVertical: 'top',
        textAlign: 'center'

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

export default withNavigation(DrinkDescription)