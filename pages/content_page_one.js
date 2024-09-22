import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal, TextInput} from 'react-native';

export default function ContentPageOne() {
    // 모달 상태 변수
    const [namemodalupVisible, setnamemodalupVisible] = useState(false);
    const [datemodalupVisible, setDateModalupVisible] = useState(false);
    const [premodalupVisible, setPreModalupVisible] = useState(false);
    const [checkmodalupVisible,setCheckModalupVisible] = useState(false);


    // textfield
    const [Nametext, onChangeNameText] = React.useState(''); 
    const [Datetext, onChangeDateText] = React.useState(''); 
    const [Pretext, onChangePreText] = React.useState(''); 
    const [Checktext, onChangeCheckText] = React.useState(''); 

    const [NamebuttonText, setNameButtonText] = React.useState("내용");
    const [DatebuttonText, setDateButtonText] = React.useState("내용");
    const [PrebuttonText, setPreButtonText] = React.useState("내용");
    const [CheckbuttonText, setCheckButtonText] = React.useState("내용");


    // 이름 모달 열기
    const namemodalup = () => {
        console.log('namemodalup');
        setnamemodalupVisible(true);
    };

    //소비기한 모달 열기
    const Datemodalup = () => {
        console.log('Datemodalup');
        setDateModalupVisible(true);
    };

    //주의사항 모달 열기
    const Premodalup = () => {
        console.log('Premodalup');
        setPreModalupVisible(true);
    };

    //섭취여부 모달 열기
    const Checkmodalup = () => {
        console.log('Checkmodalup');
        setCheckModalupVisible(true);
    };


    // 모달 닫기 및 버튼 텍스트 업데이트
    const closemodal = () => {
        console.log('close modal');

        setNameButtonText(Nametext);
        setDateButtonText(Datetext);
        setPreButtonText(Pretext);
        setCheckButtonText(Checktext);

        setnamemodalupVisible(false);
        setDateModalupVisible(false);
        setPreModalupVisible(false);
        setCheckModalupVisible(false);
    };

    

    return (
    <View style={styles.container}>

        {/* 이름 모달 */}
        <Modal
        animationType="slide"
        transparent={true}
        visible={namemodalupVisible}
        onRequestClose={() => {
          setnamemodalupVisible(!namemodalupVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text>이름</Text>
            <TextInput style={styles.textfieldinput} onChangeText={onChangeNameText} value={Nametext} placeholder="이름 입력"/>
            <TouchableOpacity style={styles.category_name} onPress={closemodal}><Text>확인</Text></TouchableOpacity>
          </View>
        </View>
      </Modal>

        {/* 소비기한 모달 */}
        <Modal
            animationType="slide"
            transparent={true}
            visible={datemodalupVisible}
            onRequestClose={() => {
                setDateModalupVisible(!datemodalupVisible);
            }}>
            <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text>소비기한</Text>
                <TextInput style={styles.textfieldinput} onChangeText={onChangeDateText} value={Datetext} placeholder="날짜 입력"/>
                <TouchableOpacity style={styles.category_name} onPress={closemodal}><Text>확인</Text></TouchableOpacity>
            </View>
            </View>
        </Modal>

        {/* 주의사항 모달 */}
        <Modal
            animationType="slide"
            transparent={true}
            visible={premodalupVisible}
            onRequestClose={() => {
                setPreModalupVisible(!premodalupVisible);
            }}>
            <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text>주의사항</Text>
                <TextInput style={styles.textfieldinput} onChangeText={onChangePreText} value={Pretext} placeholder="주의사항 입력"/>
                <TouchableOpacity style={styles.category_name} onPress={closemodal}><Text>확인</Text></TouchableOpacity>
            </View>
            </View>
        </Modal>

        {/* 섭취여부 모달 */}
        <Modal
            animationType="slide"
            transparent={true}
            visible={checkmodalupVisible}
            onRequestClose={() => {
                setCheckModalupVisible(!checkmodalupVisible);
            }}>
            <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text>섭취여부</Text>
                <TextInput style={styles.textfieldinput} onChangeText={onChangeCheckText} value={Checktext} placeholder="섭취여부 입력"/>
                <TouchableOpacity style={styles.category_name} onPress={closemodal}><Text>확인</Text></TouchableOpacity>
            </View>
            </View>
        </Modal>

      <View style={styles.top_container}>
        <TouchableOpacity style={styles.photo_button}><Text>photo</Text></TouchableOpacity>
      </View>
      
      <View style={styles.body_container}>
        <View style={styles.contentlabel}>
            <View style={styles.category_name}><Text>이름</Text></View>
            <TouchableOpacity style={styles.category_content} onPress={namemodalup}><Text>{NamebuttonText}</Text></TouchableOpacity>
        </View>
        <View style={styles.contentlabel}>
            <View style={styles.category_name}><Text>소비기한</Text></View>
            <TouchableOpacity style={styles.category_content}  onPress={Datemodalup}><Text>{DatebuttonText}</Text></TouchableOpacity>
        </View>
        <View style={styles.contentlabel}>
            <View style={styles.category_name}><Text>주의사항</Text></View>
            <TouchableOpacity style={styles.category_content} onPress={Premodalup}><Text>{PrebuttonText}</Text></TouchableOpacity>
        </View>
        <View style={styles.contentlabel}>
            <View style={styles.category_name}><Text>섭취여부</Text></View>
            <TouchableOpacity style={styles.category_content} onPress={Checkmodalup}><Text>{CheckbuttonText}</Text></TouchableOpacity>
        </View>
      </View>
      <View style={styles.footer_container}>
        <TouchableOpacity style={styles.check_button}><Text>확인</Text></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top_container: {
    flex:4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body_container: {
    flex:5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer_container : {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  photo_button : {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "white",
    padding: 10,
    width : '90%',
    height : '90%',
    borderColor:'#000',
    borderWidth:1,
    borderRadius:10,
    margin:10,
  },
  contentlabel : {
    flexDirection:"row",
    justifyContent: 'center',
    alignItems: 'center',
    margin : 10,
  },
  category_name : {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "white",
    padding: 10,
    width : 100,
    height : 50,
    borderColor:'#000',
    borderWidth:1,
    borderRadius:10,
    margin:10,
  },
  category_content : {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor : "white",
    width : 200,
    height : 50,
    borderColor:'#000',
    borderWidth:1,
    borderRadius:10,
    margin:10,
  },
  check_button : {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor : "white",
    width : 200,
    height : 50,
    borderColor:'#000',
    borderWidth:1,
    borderRadius:10,
    margin:10,
  },


  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    borderColor:'#000',
    borderWidth:1,
    borderRadius:10,
    width :'80%',
    height : '30%'
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  textfieldinput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width : 100,
    alignItems: 'center'
  },
});