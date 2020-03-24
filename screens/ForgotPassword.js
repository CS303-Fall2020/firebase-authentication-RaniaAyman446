import React from "react";
import { View , Text , StyleSheet ,TextInput , TouchableOpacity ,Alert ,Button} from "react-native";
import * as firebase from 'firebase'
import {NavigationAction} from 'react-navigation'

export default class ForgotPassword extends React.Component{
constructor(props){
    super(props);
    this.state={
        email :""
    };
}
onResetPassPress = () => {
    firebase.auth().sendPasswordResetEmail(this.state.email)
    .then(() => {
        Alert.alert("Password reset email has been sent.")
    },(error) => {
        Alert.alert(error.message)
    });
}


    render(){
        return(
            <View style={styles.container}>
        <View style={styles.form}>
        <View>
            <Text style={{fontSize:30 , color:"green"}}>Forgot Password?</Text>
            <Text style={styles.inputTitle}>Email</Text>
            <TextInput style={styles.input} autoCapitalize="none" value={this.state.email} onChangeText={(text) => {this.setState({email:text})}} ></TextInput>
        </View>

        <TouchableOpacity style={styles.button} onPress={this.onResetPassPress} >
   <Text style={{ color:"#FFF" , fontWeight:"500"}}>SEND RESET EMAIL</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.button1} onPress={() => this.props.navigation.navigate("Login")}>
   <Text style={{ color:"#FFF" , fontWeight:"500"}}>Back to Login</Text>
  </TouchableOpacity>
       
        </View>
       
        </View>
    )}
   
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        
    },
    form:{
        marginBottom:48,
        marginHorizontal:30,
        marginTop:50,
       
      
    },
    inputTitle:{
        color:"#8A8F9E",
        fontSize:10,
       textTransform:"uppercase",
       marginTop:50
    },
    input:{
        borderBottomColor:"#8A8F9E",
        borderBottomWidth:StyleSheet.hairlineWidth,
        height:40,
        fontSize:15,
        color:"#161F3D"
    },
    button:{
        marginHorizontal:30,
        backgroundColor:"green",
        borderRadius:4,
        height:52,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40
    },
    button1:{
        marginHorizontal:30,
        backgroundColor:"green",
        borderRadius:4,
        height:52,
        alignItems:"center",
        justifyContent:"center",
        marginTop:90
    }
})

/*<TouchableOpacity style={styles.button} >
          <Text style={{ color:"#FFF" , fontWeight:"500"}}>SEND RESET EMAIL</Text>
          </TouchableOpacity>*/