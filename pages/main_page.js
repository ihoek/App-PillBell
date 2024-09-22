import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function MainPage({navigation,route}) {
  return (
    <View style={styles.container}>
      <View style={styles.top_container}></View>
      <View style={styles.body_container}>
        <View style={styles.choicelabel}>
          <TouchableOpacity style={styles.photo_button} onPress={() => { navigation.navigate('ContentPageOne') }}><Text>photo</Text></TouchableOpacity>
          <Text style={styles.choicetext}>이름</Text>
        </View>
        <View style={styles.choicelabel}>
          <TouchableOpacity style={styles.photo_button} onPress={() => { navigation.navigate('ContentPageTwo') }}><Text>photo</Text></TouchableOpacity>
          <Text style={styles.choicetext}>이름</Text>
        </View>
        <View style={styles.choicelabel}>
          <TouchableOpacity style={styles.photo_button} onPress={() => { navigation.navigate('ContentPageThree') }}><Text>photo</Text></TouchableOpacity>
          <Text style={styles.choicetext}>이름</Text>
        </View>
      </View>


      <View style={styles.footer_container}>
        <View style={styles.footer_containerlabel}>
        <TouchableOpacity style={styles.footer_button}><Text>추가</Text></TouchableOpacity>
        <TouchableOpacity style={styles.footer_button}><Text>삭제</Text></TouchableOpacity>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
  },
  top_container: {
    flex:1,
    //backgroundColor:"yellow"
  },
  body_container: {
    flex:7,
    //backgroundColor:"green",
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer_container : {
    flex:2,
    //backgroundColor:"blue"
  },
  choicelabel : {
    flexDirection:"row",
    justifyContent: 'center',
    alignItems: 'center',
    margin : 15,
  },
  photo_button : {
    alignItems: 'center',
    backgroundColor: "white",
    padding: 10,
    width : 100,
    height : 100,
    borderColor:'#000',
    borderWidth:1,
    borderRadius:10,
    margin:10,
  },
  choicetext : {
    backgroundColor : "white",
    width : 200,
    height : 100,
    borderColor:'#000',
    borderWidth:1,
    borderRadius:10,
    margin:10,
  },
  footer_containerlabel : {
    flexDirection:"row",
    justifyContent: 'center',
    alignItems: 'center'
  },
  footer_button : {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor : "white",
    width : 100,
    height : 50,
    borderColor:'#000',
    borderWidth:1,
    borderRadius:10,
    margin:10,alignItems: 'center',
    justifyContent: 'center',
  }
});