//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// create a component
const HomeCard = ({heading,text2,amount,lastText}) => {
  return (
    <View
      style={{
        width: 240,
        marginRight:10,
        height:130,
        borderWidth: 1,
        borderColor: '#303030',
        backgroundColor: 'rgba(105, 105, 105, 0.2)',
        marginTop: 20,
        borderRadius:10,
        padding:10,
        marginLeft:10,
        flex:1,
        elevation:2
      }}>
      <Text style={{fontSize: 20, color: '#fff',fontWeight:'600'}}>{heading}</Text>
      <Text style={{color: '#fff',fontSize:13}}>{text2}</Text>

      <Text style={{color: '#fff',marginTop:15,fontSize:25,fontWeight:'bold'}}>{amount}</Text>
      <Text style={{color: "#11d9b2",fontSize:11,marginTop:3}}>{lastText}</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default HomeCard;
