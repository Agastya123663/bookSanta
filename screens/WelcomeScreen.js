import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity, Alert} from 'react-native';
import db from "../config"
import firebase from 'firebase'

export default class WelcomeScreen extends React.Component{
    constructor(){
        super();
        this.state={
            emailId : "",
            password : ""
        }
    }

    userSignUp=(emailId,password)=>{
        firebase.auth().createUserWithEmailAndPassword(emailId,password).then((response)=>{
            console.log("User Added")
            return Alert.alert("User Added")
            
        }).catch((function(error){
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage)
            return Alert.alert(errorMessage);
        }))
    }

    userLogin=(emailId,password)=>{
        firebase.auth().signInWithEmailAndPassword(emailId,password).then((response)=>{
            console.log("Successfull login")
            return Alert.alert("Successfull login")
            
        }).catch((function(error){
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage)
            return Alert.alert(errorMessage);
        }))
    }

    render(){
        return(
            <View style={styles.container}>

                <View>
                    <Text style={styles.title}>Book Santa </Text>
                </View>
                
                <View>
                    <TextInput style={styles.loginBox} placeholder="Email id" keyboardType="email-address" onChangeText={(text)=>{
                        this.setState({
                            emailId : text
                        })
                    }}/>

                    <TextInput style={styles.loginBox} placeholder="Password" secureTextEntry={true} onChangeText={(text)=>{
                        this.setState({
                            password:text
                        })
                    }}/>

                    <TouchableOpacity style={[styles.button,{marginBottom:20,marginTop:20}]} onPress={()=>{
                        this.userLogin(this.state.emailId,this.state.password)
                    }}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={()=>{
                        this.userSignUp(this.state.emailId,this.state.password)
                    }}>
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>

                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        backgroundColor:'#f8be85',
        justifyContent:"center"
    },
    title:{
        fontSize:65,
        fontWeight:300,
        paddingBottom:30,
        color:'#553d00'
    },
    loginBox:{
        width:300,
        height:40,
        borderBottomWidth:1.5,
        borderColor:'#ff8a65',
        fontSize:20,
        margin:10,
        paddingLeft:10
    },
    profileContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    button:{
        width:300,
        height:50,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:25,
        backgroundColor:'#ff9800',
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:8
        },
        shadowOpacity:0.30,
        shadowRadius:10.32,
        elevation:16
    },
    buttonText:{
        color:"#ffff'",
        fontSize:20,
        fontWeight:200
    }
})