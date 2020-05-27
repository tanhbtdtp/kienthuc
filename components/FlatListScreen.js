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


const DATA_ =[
  {
    "title": "The Basics - Networking",
    "description": "Your app fetched this from a remote endpoint!",
    "movies": [
      { "key": "1", "name": "Star Wars", "Year": "1977" },
      { "key": "2", "name": "Back to the Future", "Year": "1985" },
      { "key": "3", "name": "The Matrix", "Year": "1999" },
      { "key": "4", "name": "Inception", "Year": "2010" },
      { "key": "5", "name": "Interstellar", "Year": "2014" }
    ]
  },
  {
    "title": "Hello",
    "description": "Your app fetched this from a remote endpoint!",
    "movies": [
      { "key": "1", "name": "Star Wars", "Year": "1977" },
      { "key": "2", "name": "Back to the Future", "Year": "1985" },
      { "key": "3", "name": "The Matrix", "Year": "1999" },
      { "key": "4", "name": "Inception", "Year": "2010" },
      { "key": "5", "name": "Interstellar", "Year": "2014" }
    ]
  },

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
  renderItem = ({item}) => {    
    console.log(item);
    return(      
       <View style={styles.Container}>
         <View style={styles.imgItem}>
           </View> 
         <View style={styles.txtItem}>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>          
            <Text>{item.movies.year}</Text>          
         </View>
       </View>

    )   
  };

// Hàm chạy trước Render
componentWillMount =() =>{
  this.setState({
       data:DATA_,
  })
}
 

FlatListItemSeparator = () => {
    return (      
      <View style={{
         height: 2,
         width:"100%",
         backgroundColor:"rgba(0,0,0,0.3)",
          }}/>
       );
    };


  // Render chính
render() {
    return(       
     <View>
        <FlatList
        keyExtractor={this.keyExtractor}
        data={this.state.data}     
        renderItem={this.renderItem}           
        ItemSeparatorComponent = {this.FlatListItemSeparator}
        />                
     </View>         
     
    )
  };
};


//////////////////////////////////////////////////
const styles=StyleSheet.create({
  Container :{
    flex:1,
    flexDirection:"row",
    backgroundColor:"gray",        
  },

  txtItem :{
    flex :4,
    color:"white"
  },
  imgItem:{
      flex:1,
      backgroundColor:"blue"
  }  
});
