import React, { Component } from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { withNavigation } from 'react-navigation';
import AsyncStorage from "@react-native-community/async-storage";
import { ToastAndroid } from 'react-native';




import { connect } from 'react-redux';


class ScanScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            base_url: 'http://40.68.90.134/',// 'http://10.100.13.83:5000/',
        }
    };

    async getInfoDrink(_drink_id) {
        var api_url = this.state.base_url + "owner/drink/"+_drink_id;
        fetch(api_url).then(async response => {
          if (response.status === 200) {
            response.json().then(async (responseJson) => {
              try {
                this.props.navigation.navigate('Drink', {
                    drink_name: responseJson["message"],
                    drink_id: _drink_id
                  })
              } catch (error) {
                ToastAndroid.show('Unvalid Coupon', ToastAndroid.SHORT);

                this.props.navigation.goBack()

                console.log("error loading data")
              }
            }
            )
          } else {
            ToastAndroid.show('Unvalid Coupon', ToastAndroid.SHORT);

            this.props.navigation.goBack()
            console.log("error retrieving data")
          }
        });
        console.log(this.state.menu)
      }

    async onSuccess(e) {
        console.log(e.data);
        await this.getInfoDrink(e.data)
          
    }

    render() {
        var pop_up = []
        if (this.state.triggerPopUp) {

        } else {
            pop_up = []
        }

        return (
            <QRCodeScanner
                onRead={async(ev)=>{this.onSuccess(ev)}}
                fadeIn={true}
                topViewStyle={{ display: 'none' }}
                bottomViewStyle={{}}
                containerStyle={{}}
                showMarker={true}
                cameraStyle={{ height: '100%' }}
            />
        );
    }
}




export default withNavigation(ScanScreen)

