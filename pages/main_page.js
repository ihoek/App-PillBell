import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

export default function MainPage({navigation,route}) {
  const { photoUri, name, data, check} = route.params || {};


  return (
    <View style={styles.container}>
        <View style={styles.choicelabel}>
          <TouchableOpacity style={styles.photo_button} onPress={() => { navigation.navigate('ContentPageOne') }}>
            {photoUri ? (<Image source={{ uri: photoUri }} style={styles.photoImage} />) : (<Text>photo</Text>)}
          </TouchableOpacity>
          <View  style={styles.choicecontent}>
            <View style={styles.choicetext}><Text>{name || "이름"}</Text></View>
            <View style={styles.choicetext}><Text>{data || "소비기한"}</Text></View>
            <View style={styles.choicetext}><Text>{check || "섭취여부"}</Text></View>
          </View>
        </View>
        <View style={styles.choicelabel}>
          <TouchableOpacity style={styles.photo_button} onPress={() => { navigation.navigate('ContentPageTwo') }}><Text>photo</Text></TouchableOpacity>
          <View  style={styles.choicecontent}>
            <View style={styles.choicetext}><Text>이름</Text></View>
            <View style={styles.choicetext}><Text>소비기한</Text></View>
            <View style={styles.choicetext}><Text>섭취여부</Text></View>
          </View>
        </View>
        <View style={styles.choicelabel}>
          <TouchableOpacity style={styles.photo_button} onPress={() => { navigation.navigate('ContentPageThree') }}><Text>photo</Text></TouchableOpacity>
          <View  style={styles.choicecontent}>
            <View style={styles.choicetext}><Text>이름</Text></View>
            <View style={styles.choicetext}><Text>소비기한</Text></View>
            <View style={styles.choicetext}><Text>섭취여부</Text></View>
          </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  choicelabel : {
    flexDirection:"row",
    justifyContent: 'center',
    alignItems: 'center',
    margin : 15,
  },
  photo_button : {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "white",
    padding: 5,
    width : 160,
    height : 160,
    borderColor:'#000',
    borderWidth:1,
    borderRadius:10,
    margin:10,
  },
  choicetext : {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor : "white",
    width : 200,
    height : 45,
    borderColor:'#000',
    borderWidth:1,
    borderRadius:10,
    margin:5,
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
  },
  choicecontent : {
    alignItems: 'center',
    justifyContent: 'center',
  },
  photoImage  : {
    width: '100%',
    height: '100%',
  },
});