import React, { Component } from 'react';
import { View, Text, Dimensions, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
const {height,width}=Dimensions.get('window')
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        mobile:''
    };
  }
  
  
  onLogin=()=>{
    this.props.navigation.navigate("Home");
  }

  render() {
    return (
        <View style={{backgroundColor:'#c99742',height:height/1}}>   
               <View style={{alignItems:'center',}}>
          <Image
          style={styles.imageStyle}
          source={require('../Assets/logo.jpg')}
          />
        <Text style={[styles.textStyle,{marginTop:'3%'}]}>Bikaner Nagar Nigam</Text>
        <Text style={[styles.textStyle,{marginTop:'5%'}]}>
        Safai Karamchari Attandance System
        </Text>
        <Text style={{marginTop:'17%',fontWeight:'bold',fontSize:25}}>
            LOGIN
        </Text>
        
      </View>
      <View style={{justifyContent:'center',alignItems:'center',marginTop:'10%'}}>
        <TextInput
    
      label="Enter Mobile Number"
      type='flat'
      theme={{
        colors: {
            placeholder: 'white',
            text: 'white',
            primary: 'white',
            underlineColor: 'white',
            background: 'transparent'
        }
    }}
    style={{width:width/1.2}}
      value={this.state.mobile}
      onChangeText={text =>this.setState({mobile:text})}
    />

<TextInput
    
    label="Enter Password"
    type='flat'
    theme={{
      colors: {
          placeholder: 'white',
          text: 'white',
         
          primary: 'white',
          underlineColor: 'white',
          background: 'transparent'
      }
  }}
  style={{width:width/1.2}}
    value={this.state.mobile}
    onChangeText={text =>this.setState({mobile:text})}
  />
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop:'10%' }}>
                    <TouchableOpacity style={styles.loginNowButton}
                        onPress={this.onLogin}>

                        <Text style={{ fontSize: 18, color: 'white', fontWeight: 'bold' }}> Login</Text>


                    </TouchableOpacity>
                </View>
      </View>

    );
  }
}
const styles=StyleSheet.create({
    imageStyle:{
        width:width/1.3,
        height:height/8,
        marginTop:height/10

    },
    textStyle:{
        fontSize:20,
        fontWeight:'bold'

    },
    loginNowButton: {
        width: width / 2.2,

        backgroundColor: "#966D25",
        height: height / 16,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderRadius: 30

    },
})
