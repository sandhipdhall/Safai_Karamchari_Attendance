import React, { Component } from 'react'
import { Text, View, Dimensions, StyleSheet, Picker, ScrollView, TouchableOpacity } from 'react-native'
import { Appbar } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Modal from 'react-native-modal';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MorningShift from './AttendanceTab/MorningShift';
import EveningShift from './AttendanceTab/EveningShift';
import PushNotification from "react-native-push-notification";

const Tab = createMaterialTopTabNavigator();



const { width, height } = Dimensions.get('window')


export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            circle: '',
            ward: '',
            getDate: "",
            isVisible: false,
            showTable:false
        };

        PushNotification.configure({
            
            onNotification: function(notification) {
                console.log('LOCAL NOTIFICATION ==>', notification)
              },
            popInitialNotification: true,
              requestPermissions: true
          });
    }

testPush =() =>{
    PushNotification.localNotification({
        title: "My Notification Title", // (optional)
        message: "My Notification Message", // (required)
      });
}


    updateCircle = (circle) => {
        this.setState({ circle: circle })
    }

    updateWard = (ward) => {
        this.setState({ ward: ward })
    }

    componentDidUpdate(){
        var that = this;
        setTimeout(function () {
            that.GetCureentDate_Time();
        }, 1000);
       }   

       GetCureentDate_Time = async () => { 
       
        var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();
        var hours = new Date().getHours(); //Current Hours
        var min = new Date().getMinutes(); //Current Minutes
        var sec = new Date().getSeconds(); //Current Seconds

        this.setState({
            getDate: date + '-' + month + '-' + year ,
            getTime :  hours + ":" + min + ":" + sec
        })

        if (this.state.getTime == "16:46:15") {
           this.testPush();
        }
    }


    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#c99742' }}>
                <Appbar.Header style={{ backgroundColor: '#966D25' }}>
                    <Appbar.Content title="Safai Karamchari Attendance" />
                </Appbar.Header>


                <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                    <Text style={{ fontSize: 18, color: 'white',  fontWeight: 'bold' }}>{this.state.getDate}</Text>
                    <Text style={{ fontSize: 18, color: 'white',  fontWeight: 'bold' }}>{this.state.getTime}</Text>
                </View>

                <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                    <View style={{ backgroundColor: 'white', marginTop: "5%", width: "40%", marginLeft: 'auto', marginRight: 'auto' }}>
                        <Picker selectedValue={this.state.circle} onValueChange={this.updateCircle}>
                            <Picker.Item label="Circle No." />
                            <Picker.Item label="1" value="1" />
                            <Picker.Item label="2" value="2" />
                            <Picker.Item label="3" value="3" />
                            <Picker.Item label="4" value="4" />
                            <Picker.Item label="5" value="5" />
                        </Picker>
                    </View>

                    <View style={{ backgroundColor: 'white', marginTop: "5%", width: "40%", marginLeft: 'auto', marginRight: 'auto'}}>
                        <Picker selectedValue={this.state.ward} onValueChange={this.updateWard}>
                            <Picker.Item label="Ward No." />
                            <Picker.Item label="1" value="1" />
                            <Picker.Item label="2" value="2" />
                            <Picker.Item label="3" value="3" />
                            <Picker.Item label="4" value="4" />
                            <Picker.Item label="5" value="5" />
                        </Picker>
                    </View>
                </View>
                <View style={{ marginLeft: 'auto', marginRight: 'auto', flexDirection: 'row', backgroundColor: 'white', paddingLeft: "8%", paddingRight: "8%", paddingTop: "2%", paddingBottom: "2%", borderRadius: 20 , marginTop:'3%',marginBottom:"2%" }}>
                    <AntDesign
                        name="search1"
                        color={'black'}
                        size={20}
                        style={{ right: 15 }}
                    // onPress={() => { this.testPush() }}
                    />
                    <TouchableOpacity
                    onPress={()=>this.setState({showTable:true})}
                    >
                        <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: 'bold' }}>Search</Text>
                    </TouchableOpacity>
                </View>

                <Tab.Navigator
                        tabBarOptions={{
                            labelStyle: { fontSize: 16, fontWeight: 'bold' },
                            activeTintColor: "orange",
                            inactiveTintColor: 'black',
                            indicatorStyle: { backgroundColor: "orange" }
                        }}>
                        <Tab.Screen name="Morning Shift" component={MorningShift} />
                        <Tab.Screen name="Evening Shift" component={EveningShift} />
                    </Tab.Navigator>


                {/* <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', margin: '4%' }}>
                    <TouchableOpacity
                       // onPress={() => { this._FilterData() }}
                        style={styles.btnStyle}>
                        <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: 'bold' }}>Clear</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnStyle}>
                        <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: 'bold' }}>Submit</Text>
                    </TouchableOpacity>
                </View> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerText: {
        fontSize: 15,
        textAlign: 'center',
        width: 'auto',
    },
    dataText: {
        fontSize: 16,
        textAlign: 'center',
        width: 'auto',
    },
    tableNoBgcolor: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        height: "auto",
        padding: 10,
        backgroundColor: '#ffefd5'
    },
    tableBgcolorBlack: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        height: "auto",
        padding: 10,
        backgroundColor: '#eed5b7'
    },
    btnStyle: {
        backgroundColor: 'white',
        width: '40%',
        padding: "3%",
        borderRadius: 20
    }
})
