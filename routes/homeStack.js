import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Todo from "../screens/Todo";
import ReviewDetails from "../screens/reviewDetails";
import TodoItem from "../components/todoItem";
import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';
import Register from "../screens/Register";
import Login from "../screens/Login";
import ForgotPassword from "../screens/ForgotPassword";
import Profile from "../screens/Profile";
import Loading from "../screens/Loading";
import SignIn from "../screens/SignIn";

//firebase

var firebaseConfig = {
    apiKey: "AIzaSyB29NbOisafk0g99jPz0MLB9Z1hMPfIUPs",
    authDomain: "socialapp-63ba3.firebaseapp.com",
    databaseURL: "https://socialapp-63ba3.firebaseio.com",
    projectId: "socialapp-63ba3",
    storageBucket: "socialapp-63ba3.appspot.com",
    messagingSenderId: "304043455069",
    appId: "1:304043455069:web:ea73ea8b3e1629e10593b4",
    measurementId: "G-6KXREL77RR"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  


const screens ={
    Loading:{
        screen:Loading,
        navigationOption:{
            title:"Loading",
            headerStyle:{
                backgroundColor:"coral"
                }
                } 
            },
Login:{
    screen:Login,
    navigationOption:{
     title:"Login"
        }
        }, 
         
Profile:{
    screen:Profile,
    navigationOption:{
    title:"Profile"
                }
                }, 
Register:{
    screen:Register,
    navigationOption:{
        title:"Register"
        } 
    },
SignIn:{
        screen:SignIn,
        navigationOption:{
        title:"SignIn"
                    }
                    }, 
ForgotPassword:{
        screen:ForgotPassword,
        navigationOption:{
            title:"ForgotPassword"
            } 
        },
Profile:{
        screen:Profile,
        navigationOption:{
            title:"Profile",
            headerStyle:{
                backgroundColor:"coral"
                }
                } 
            },
Todo:{
    screen:Todo,
    navigationOption:{
        headertitle:() => <Header/>
    }
},
ReviewDetails:{
    screen:ReviewDetails,
    navigationOption:{
        title:"Todo Details"
    }
},

}


const HomeStack = createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerTintColor:'#558',
        headerStyle:{backgroundColor:'#999',height:90,}
    }
});

export default createAppContainer(HomeStack);