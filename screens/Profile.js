import React from "react";
import { View , Text , StyleSheet ,TextInput , TouchableOpacity, Button} from "react-native";
import * as firebase from 'firebase'


export default class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state={currentUser:""}
    }
   static navigationOptions ={
       header: null,
   };
   onSignOutPress = () =>{
       firebase.auth().signOut();
   }

   render (){
       const {currentUser} = firebase.auth() ;
       return (
           <View style={{paddingTop:450}}>
               <Text style={{textAlign:"center"}}>Hello {currentUser.email}</Text>
               
               <Button title="SignOut"  onPress={this.onSignOutPress}/>
           </View>
       )
   }
}
const styles =StyleSheet.create({

});
