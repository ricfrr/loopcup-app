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
import Icon from "react-native-vector-icons/MaterialCommunityIcons";


export default class DrinkBoughtComponent extends Component {


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

            <TouchableOpacity style={[styles.container]}>
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
                        <View style={{ width: '100%', height: '100%' }}>
                            <Icon name="qrcode-scan" style={styles.icon} />
                        </View>
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
        height: '80%',
        textAlignVertical: 'center',
        fontFamily: "roboto-regular",
        alignContent: 'center',
        textAlignVertical: 'center'
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
    },
    icon: {
        color: "rgba(210,149,0,1)",
        fontSize: 35,
        height: '80%',
        textAlignVertical: 'center',
        textAlign: 'center'
    }
});
