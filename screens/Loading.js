import React from "react";
import * as firebase from 'firebase'
export default class Loading extends React.Component{
    render(){
        return(
            firebase.auth().onAuthStateChanged(user => {
                this.props.navigation.navigate(user ? "Profile" : "Login")
                
            })
            
        )
    }
}