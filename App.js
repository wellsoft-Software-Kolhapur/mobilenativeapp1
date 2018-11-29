/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import React, { Component } from 'react'; 
import { StyleSheet, View, TextInput, Button, Text, Alert ,Platform} from 'react-native';


type Props = {};
export default class App extends Component<Props> {
  constructor() {
 
    super()
 
    this.state = {
 
      UserName: '',
      UserEmail: '',
      UserPassword: '',
	  UserId :''
 
    }
 
  }
 
UserRegistrationFunction = () =>{
 
  fetch('http://192.168.1.103:81/User_Project/user_registration.php', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
  
      name: this.state.UserName,
  
      email: this.state.UserEmail,
  
      password: this.state.UserPassword ,
	  
	   id: this.state.UserId 
  
    })
  
  }).then((response) => response.json())
        .then((responseJson) => {
  
  // Showing response message coming from server after inserting records.
          Alert.alert(responseJson);
  
        }).catch((error) => {
          console.error(error);
        });
 
}
 
  render() {
    return (
 
<View style={styles.MainContainer}>
 
        <Text style= {styles.title}>User Registration Form</Text>
  
        <TextInput
          placeholder="Enter User Name"
          onChangeText={name => this.setState({UserName : name})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
          />
 
        <TextInput
          placeholder="Enter User Email"
          onChangeText={email => this.setState({UserEmail : email})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
          />
 
        <TextInput
          placeholder="Enter User Password"
          onChangeText={password => this.setState({UserPassword : password})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
          secureTextEntry={true}
          />
 
        <Button title="Click Here To Register" onPress={this.UserRegistrationFunction} color="#2196F3" />
      
  
 
</View>
            
    );
  }
  <Viewstyle={styles.MainContainer} >
  <TextInput
          placeholder="Enter User ID"
          onChangeText={id => this.setState({UserId : id})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
          />
		   <Button title="Click Here To View Records " onPress={this.UserRegistrationFunction} color="#2196F3" />
  
  </View>
}


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


const styles = StyleSheet.create({
 
MainContainer :{
 
  justifyContent: 'center',
  flex:1,
  margin: 10
},
 
TextInputStyleClass: {
 
  textAlign: 'center',
  marginBottom: 7,
  height: 40,
  borderWidth: 1,
  borderColor: '#2196F3',
  borderRadius: 5 ,
},

title:{

  fontSize: 22, 
  color: "#009688", 
  textAlign: 'center', 
  marginBottom: 15
}
 
});

