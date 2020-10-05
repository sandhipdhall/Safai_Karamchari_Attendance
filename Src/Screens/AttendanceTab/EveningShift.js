import React, { Component } from 'react'
import { Text, View, Dimensions, StyleSheet, Picker, ScrollView, TouchableOpacity } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Modal from 'react-native-modal';
import { RadioButton } from 'react-native-paper';


var data = [
    {
        Sno: 1,
        TokenNo: "1234",
        EmpName: "ram kumar"
    },
    {
        Sno: 2,
        TokenNo: "1234",
        EmpName: "satish kumar"
    },
    {
        Sno: 3,
        TokenNo: "1234",
        EmpName: "raj kumar"
    },
    {
        Sno: 4,
        TokenNo: "1234",
        EmpName: "suman singh"
    },
    {
        Sno: 5,
        TokenNo: "1234",
        EmpName: "akash sharma"
    },
    {
        Sno: 6,
        TokenNo: "1234",
        EmpName: "suraj singh"
    },
    {
        Sno: 7,
        TokenNo: "1234",
        EmpName: "harsh raj"
    },
    {
        Sno: 8,
        TokenNo: "1234",
        EmpName: "ruchi yadhav"
    },
    {
        Sno: 9,
        TokenNo: "1234",
        EmpName: "naman verma"
    },

    {
        Sno: 10,
        TokenNo: "1234",
        EmpName: "ronny singh"
    },
    {
        Sno: 11,
        TokenNo: "1234",
        EmpName: "aman vyas"
    },

];

const { width, height } = Dimensions.get('window')

export default class EveningShift extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
            checked: 'P',
        };
    }

    render() {
        return (
            <View>
                <View style={{ width: width, marginLeft: 'auto', marginRight: 'auto' }}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        borderBottomWidth: 1,
                        height: "auto",
                        padding: 10,
                        backgroundColor: 'white'
                    }}>
                        <Text style={styles.headerText}>S no.</Text>
                        <Text style={styles.headerText}>Token No</Text>
                        <Text style={styles.headerText}>Emp Name / Fh Name</Text>
                        <Text style={styles.headerText}></Text>
                    </View>
                    <ScrollView style={{height:height/1.76}}>
                        {
                            data.map((item) =>
                            <TouchableOpacity
                            onPress={() => { this.setState({ isVisible: true, name: item.EmpName }) }}
                                style={[(item.Sno % 2 == 0) ? styles.tableBgcolorBlack : styles.tableNoBgcolor]}
                            >
                                    <Text style={styles.dataText}>{item.Sno}</Text>
                                    <Text style={[styles.dataText, { width: '25%' }]}>{item.TokenNo}</Text>
                                    <Text style={[styles.dataText, { width: '25%' }]}>{item.EmpName}</Text>
                                    <AntDesign
                                        name="downcircle"
                                        color={'black'}
                                        size={15}
                                        style={{right:10}}
                                        onPress={() => { this.setState({ isVisible: true, name: item.EmpName }) }}
                                    />

                                </TouchableOpacity>
                            )
                        }
                    </ScrollView>
                </View>


                <Modal
                    animationType={"slide"}
                    transparent={true}
                    onRequestClose={() => { console.log("Modal has been closed.") }}
                    isVisible={this.state.isVisible}
                >
                    <View style={{ height: '50%', backgroundColor: 'white' }}>
                        <AntDesign
                            name='closecircle'
                            size={25}
                            color="red"
                            style={{ left: "90%", top: "2%" }}
                            onPress={() => { this.setState({ isVisible: !this.state.isVisible}) }}
                        />
                        <View style={{justifyContent:'center',alignItems:'center'}}> 
                        <Text style={{ fontSize: 22, fontWeight: 'bold', margin: "2%" }}>{this.state.name}</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto' }}>


                            <View style={{ flexDirection: 'row' }}>
                                <RadioButton
                                    value="P"
                                    status={this.state.checked === 'P' ? 'checked' : 'unchecked'}
                                    onPress={() => { this.setState({ checked: 'P' }); }}
                                />
                                <Text style={{ fontSize: 16, fontWeight: 'bold', top: 5 }}>Present</Text>
                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                <RadioButton
                                    value="WPL"
                                    status={this.state.checked === 'WPL' ? 'checked' : 'unchecked'}
                                    onPress={() => { this.setState({ checked: 'WPL' }); }}
                                />
                                <Text style={{ fontSize: 16, fontWeight: 'bold', top: 5 }}>WPL</Text>
                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                <RadioButton
                                    value="CL"
                                    status={this.state.checked === 'CL' ? 'checked' : 'unchecked'}
                                    onPress={() => { this.setState({ checked: 'CL' }); }}
                                />
                                <Text style={{ fontSize: 16, fontWeight: 'bold', top: 5 }}>CL</Text>
                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                <RadioButton
                                    value="ML"
                                    status={this.state.checked === 'ML' ? 'checked' : 'unchecked'}
                                    onPress={() => { this.setState({ checked: 'ML' }); }}
                                />
                                <Text style={{ fontSize: 16, fontWeight: 'bold', top: 5 }}>ML</Text>
                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                <RadioButton
                                    value="PL"
                                    status={this.state.checked === 'PL' ? 'checked' : 'unchecked'}
                                    onPress={() => { this.setState({ checked: 'PL' }); }}
                                />
                                <Text style={{ fontSize: 16, fontWeight: 'bold', top: 5 }}>PL</Text>
                            </View>

                        </View>
                        <View style={{ justifyContent: 'flex-end',alignItems:'flex-end',marginBottom:'1%',marginRight:'1%' }}>
                            <TouchableOpacity 
                             onPress={() => { this.setState({ isVisible: !this.state.isVisible}) }}
                            style={[styles.btnStyle,{ backgroundColor: '#c99742'}]}>
                                <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: 'bold' }}>Submit</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </Modal>

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
