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
  renderItem = ({item}) => {    
    console.log(item);
    return(      
       <View style={styles.Container}>
         <View style={styles.imgItem}>
           </View> 
         <View style={styles.txtItem}>
            <Text>{item.id}</Text>
            <Text>{item.title}</Text>          
            <Text>{item.releaseYear}</Text>          
         </View>
       </View>
    )   
  };

// Hàm chạy trước Render
componentDidMount = async() => {
  let url = 'https://reactnative.dev/movies.json';
  this.setState({ loading: true });
  fetch(url)
    .then(res => res.json())
    .then(res => {
      this.setState({
        data: res.movies,        
        loading: false,
        refreshing: false
      });
    })
    .catch(error => {
      this.setState({ error, loading: false });
    });
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
