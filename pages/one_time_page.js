import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function OneTime({navigation,route}) {
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };
    
    return (
        <View style={styles.container}>
            <View style={styles.containertop}>
                <Text>알람설정</Text>
            </View>

            <View style={styles.containerbody}>
                <View style={styles.timemodalbody}>
                    <View style={styles.time_alertmodal}><Text>시간설정</Text></View>
                    <TouchableOpacity style={styles.time_alertmodal_content} onPress={showTimepicker}><Text>시간설정</Text></TouchableOpacity>
                    
                </View>
                    <Text>selected: {date.toLocaleString()}</Text>
                            {show && (
                                <DateTimePicker
                                testID="dateTimePicker"
                                value={date}
                                mode={mode}
                                is24Hour={true}
                                onChange={onChange}
                                />
                            )}
                <View style={styles.timemodalbody}>
                    <View style={styles.time_alertmodal}><Text>알람시간</Text></View>
                    <TouchableOpacity style={styles.time_alertmodal_content}><Text>10분전 알람</Text></TouchableOpacity>
                </View>

            </View>

            <View style={styles.containerbottom}>
            <TouchableOpacity style={styles.time_alertmodal_content} onPress={() => { navigation.navigate('ContentPageOne') }} ><Text>확인</Text></TouchableOpacity>
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
  containertop : {
    flex : 1
  },
  containerbody : {
    flex : 3
  },
  containerbottom : {
    flex : 1
  },
  time_alertmodal : {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "white",
    padding: 10,
    width : 100,
    height : 45,
    borderColor:'#000',
    borderWidth:1,
    borderRadius:10,
    margin:10,
  },
  timemodalbody : {
    flexDirection:"row",
    alignItems: 'center',
    justifyContent: 'center',
  },
  time_alertmodal_content: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "white",
    padding: 10,
    width : 140,
    height : 45,
    borderColor:'#000',
    borderWidth:1,
    borderRadius:10,
    margin:10,
  }

  
});