import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';

export default class getData extends React.Component {
        constructor(props) {
         super(props)
         this.state = {
           persons: []
               }
             }
             componentDidMount() {
               axios.get(`http://'http://192.168.03:4000/post'/get`)
                 .then(res => {
                   const persons = res.data;
                   this.setState({ persons });
                 })
             } 
             
             onDelete(i,e){
                const id = this.state.persons[i].id;
    console.log(id)

    axios.delete(`http://localhost:4000/delete/${id}`)
    
      .then(res => {
          alert(res);
        })
  
             }
render(){
  return(
  <View style={styles.container}>
  {/* <Text style={styles.text}>This is ViewList</Text> */}
  <View >
      <Text >Id</Text>
      <Text >Name</Text>
      <Text >Email</Text>
      <Text >Phone</Text>
      <Text>notes</Text>
  </View>
<FlatList
  data={this.state.data}
  keyExtractor={(item, index) => index.toString()}
  renderItem={({item}) => 
  <View style={styles.list}>
      <Text >{item.Id}</Text>
      <Text >{item.Name}</Text>
      <Text >{item.Email}</Text>
      <Text >{item.Phone}</Text>
      <Text >{item.notes}</Text>
      <TouchableOpacity >
      <td>
                 <form onSubmit>
                  <button className="btn btn-danger" type="submit" value={item.id} onClick={e => this.onDelete(i,e)}>Delete</button>
              </form> 
                 </td>
      </TouchableOpacity>
  </View>
  }
/>
  <TouchableOpacity onPress={this.test()}>
      <Text >Get</Text>
  </TouchableOpacity>
</View>
)
}

}