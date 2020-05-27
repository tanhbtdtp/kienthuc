/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React ,{Component} from 'react';
import {StyleSheet,List,FlatList,ListItem, View,Text,Image} from 'react-native';


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
            <Image              
              style={styles.img}
              source={{ uri: item.image_url }}              
            />
           </View> 
         <View style={styles.txtItem}>
            <Text>{item.id}</Text>
            <Text>{item.name}</Text>
            <Text numberOfLines={3} >{item.description}</Text>
                
         </View>
       </View>
    )   
  };

// Hàm chạy trước Render
componentDidMount = () => {
  this.getdata_();
  }




getdata_ =() =>{

  let url = 'https://api.punkapi.com/v2/beers?page=2&per_page=30';
  this.setState({ loading: true });
  fetch(url)
    .then(res => res.json())
    .then(res => {
      this.setState({
        data: res,        
        loading: false,
        refreshing: false
      });
    })
    .catch(error => {
      this.setState({ error, loading: false });
    });
};





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
      justifyContent:"center",
      alignItems:"center"    
  },
  img :{   
    height:90,
    width:90,
    resizeMode : "contain",
    marginVertical:10
    
  }
  
});
