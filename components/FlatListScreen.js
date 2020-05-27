/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React ,{Component} from 'react';
import {StyleSheet,List,FlatList,ListItem, View,Text} from 'react-native';


const DATA =[
{"key" : "1", "name" : "tan", "year" :"2020" },
{"key" : "2", "name" : "tan1", "year" :"20201" },
{"key" : "3", "name" : "tan2", "year" :"20202" },
{"key" : "4", "name" : "tan3", "year" :"20203" },
{"key" : "5", "name" : "tan4", "year" :"20204" },
{"key" : "6", "name" : "tan2", "year" :"20202" },
{"key" : "7", "name" : "tan3", "year" :"20203" },
{"key" : "8", "name" : "tan4", "year" :"20204" },
{"key" : "9", "name" : "tan2", "year" :"20202" },
{"key" : "10", "name" : "tan3", "year" :"20203" },
{"key" : "11", "name" : "tan4", "year" :"20204" },
]


export default class FlatListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false,
    };
  };


  keyExtractor = (item, index) => index.toString()
  renderItem = ({ item }) => {
     return(
        <View>
          <Text>{item.key}</Text>
          <Text>{item.name}</Text>
          <Text>{item.year}</Text>
        </View>
     )   
  };


  
  // Render chính
    render() {
    return(     
     <View>
        <FlatList
        keyExtractor={this.keyExtractor}
        data={DATA}     
        renderItem={this.renderItem}
           //console.log(`Item = ${item.key}  `);
        />
     </View>    
     
    )
  };
};
/////////////////////////

const styles=StyleSheet.create({
  Container :{

  } 
});
