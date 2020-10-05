import React, { Component } from 'react'
import { Text, View, Dimensions, Image, StyleSheet, ProgressBarAndroid, ActivityIndicator } from 'react-native'
const {height,width}=Dimensions.get('window')

export default class SplashScreen extends Component {

    componentWillMount(){
        var that = this;
        setTimeout(function () {
            that.Hide_Splash_Screen();
        }, 2000);
       }    

       Hide_Splash_Screen = async () => { 
            this.props.navigation.navigate("Login");
    
    }


    render() {
        return (
            <View style={{backgroundColor:'#c99742',height:height/1}}>
                <View style={{marginTop:'10%'}}>
                <Image
          style={styles.imageStyle}
          source={require('../Assets/logo.jpg')}
          />
                </View>
                <View style={{justifyContent:'center',alignItems:'center',marginTop:'20%'}}>
                    <Text style={styles.textStyle}>Welcome To Bikaner</Text>
                    <Text style={styles.textStyle}>Nagar Nigam</Text>
                    <Text style={styles.textStyle}>Safai Karamchari</Text>
                    <Text style={styles.textStyle}>Attendance System</Text>
                    <ActivityIndicator size="large" color="#966D25" style={{marginTop:'10%'}} />

                </View>
                
            </View>
        )
    }
}
const styles=StyleSheet.create({
    imageStyle:{
        width:width/1,
        height:height/6,
        marginTop:height/10

    },
    textStyle:{
        color:'white',
        fontSize:30,
        fontWeight:'bold',
        marginTop:'3%'

    }
})