import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  alert,
  ActionSheetIOS
} from 'react-native';
import {Actions} from 'react-native-router-flux;'
import getData from './src/getData';
 
export default class Forms extends Component{
        constructor(props) {
                super(props)
                       this.state = {
                        persons: [],
                        users: []
                      }
                      
                      //this.handleIdChange = this.handleIdChange.bind(this);
                      this.handleNameChange = this.handleNameChange.bind(this);
                      this.handleEmailChange = this.handleEmailChange.bind(this);
                      this.handlePhoneChange = this.handlePhoneChange.bind(this);
                      //this.handleDropChange=this.handleDropChange.bind(this);
                      this.handleNoteChange=this.handleNoteChange.bind(this);
                      this.onSubmit = this.onSubmit.bind(this);
                     
                    }
                    handlefirstNameChange(e) {
                        this.setState({firstname: e.target.value})
                      }
                      handlelastNameChange(e) {
                        this.setState({lastname: e.target.value})
                      }
                      handleEmailChange(e) {
                        this.setState({email: e.target.value})
                      }
                    
                      handlePhoneChange(e) {
                        this.setState({phone: e.target.value})
                      }
                    
                    handleNoteChange(e){
                      this.setState({notes:e.target.value})
                    }
                    getData(){
                            Actions.getData()
                    }
                     
                      onSubmit(e) {
                          e.preventDefault();
                          const employee = {
                            firstname: this.state.firstname,
                            lastname: this.state.lastname,
                            phone: this.state.phone,
                            email: this.state.email,
                           
                           notes:this.state.notes
                          }
                          
                          axios.post('http://192.168.03:4000/post', employee)
                          .then(res => {
                            
                              const persons = res.data;
                              this.setState({ persons });
                            })  
                            alert("your form submitted successfully")
                        
                      }  

        render(){
                <View style={styles.container}>
                        <TextInput style={styles.inputBox}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder="FirstName"
              placeholderTextColor = "#ffffff"
              selectionColor="#fff"
              onChange={this.handlefirstNameChange}
              />
              <TextInput style={styles.inputBox}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder="LastName"
              placeholderTextColor = "#ffffff"
              selectionColor="#fff"
              onChange={this.handlefirstNameChange}
              
              />
          <TextInput style={styles.inputBox}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder="Email"
              placeholderTextColor = "#ffffff"
              selectionColor="#fff"
              keyboardType="email-address"
              onChange={this.handleemailChange}
              />


<TextInput style={styles.inputBox}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder="Contact Number"
              selectionColor="#fff"
              placeholderTextColor = "#ffffff"
              onChange={this.handlephoneChange}
              />
<TextInput
    multiline={true}
    numberOfLines={4}
    placeholder="Message"
    placeholderTextColor = "#ffffff"
         selectionColor="#fff"
         onChange={this.handlenoteChange}
    />
<TouchableOpacity style={styles.button}>
             <Text style={styles.buttonText}>
             onPress={this.onSubmit}
             Post</Text>
           </TouchableOpacity>

           <TouchableOpacity style={styles.button}>
             <Text style={styles.buttonText}>
             onPress={this.getData}
             Post</Text>
           </TouchableOpacity>
              </View>
        }

}

const styles = StyleSheet.create({
        container : {
          flexGrow: 1,
          justifyContent:'center',
          alignItems: 'center'
        },
      
        inputBox: {
          width:300,
          backgroundColor:'rgba(255, 255,255,0.2)',
          borderRadius: 25,
          paddingHorizontal:16,
          fontSize:16,
          color:'#ffffff',
          marginVertical: 10
        },
        button: {
          width:300,
          backgroundColor:'#1c313a',
           borderRadius: 25,
            marginVertical: 10,
            paddingVertical: 13
        },
        buttonText: {
          fontSize:16,
          fontWeight:'500',
          color:'#ffffff',
          textAlign:'center'
        }
      
      });