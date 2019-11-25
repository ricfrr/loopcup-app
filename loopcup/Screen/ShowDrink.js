import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Grid, Row, Col, Button, Input } from "native-base";
import { withNavigation } from 'react-navigation';
import UserTopInfoBack from "../components/UserTopInfoBack";
import QRCode from 'react-native-qrcode-svg';


class ShowDrink extends Component {

    constructor(props) {
        super(props)
        this.state = {
            amount: "0"
        }
    }

    render() {
        return (
            <Grid style={{ backgroundColor: "rgba(20,19,19,1)" }}>
                <Row size={10}>
                    <UserTopInfoBack />
                </Row>
                <Row size={60}>
                    <View style={{ height: '80%', alignItems: 'center', alignSelf: 'center', alignContent: 'center', width:'100%',textAlignVertical:'center' }}>
                    <QRCode
                            value={this.props.navigation.getParam('drink_id')}
                            size={350}
                            bgColor='Black'
                            fgColor='white' />
                    </View>

                </Row>
                <Row size={30}>
                    <View style={{ width: '100%', alignItems: 'center' }}>
                        <Text style={styles.textDrink}> {this.props.navigation.getParam('drink_name')}</Text>
                        <Text style={styles.text}> show the qr to the bartender</Text>
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
    textDrink: {
        color: "rgba(255,255,255,1)",
        fontSize: 30,
        fontFamily: "roboto-regular",
        width: '100%',
        height: '40%',
        textAlign: 'center'

    },

    text: {
        color: "rgba(255,255,255,1)",
        fontSize: 25,
        fontFamily: "roboto-regular",
        width: '100%',
        height: '40%',
        textAlign: 'center'
    },



});

export default withNavigation(ShowDrink)
