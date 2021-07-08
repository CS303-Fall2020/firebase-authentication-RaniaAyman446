import React from "react";
import * as firebase from 'firebase'
export default class SignIn extends React.Component{
    render(){
        return(
            firebase.auth().onAuthStateChanged(user => {
                this.props.navigation.navigate(user ? "Profile" : "Register")
                
            })
            
        )
    }
}