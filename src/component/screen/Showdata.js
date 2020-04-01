import React from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  YellowBox,
  StyleSheet,
  Image,
  Alert,
  Platform,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';

class Showdatacls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  //componentDidUpdate() {
  //console.log('reload Screen');
  //this.getData();
  //}

  getData = () => {
    setTimeout(() => {
      //Alert.alert('Daten werden geladen!');

      axios
        .get(`http://laravel.rue.stoss-medica.int/api/students`)
        .then(res => {
          console.log('GET DATA ');
          const data = res.data;
          this.setState({data});
        })
        .catch(err => console.log('GET Error: ', err));
    }, 3000);
  };

  componentDidMount() {
    console.log('first mount component');
    this.getData();
  }

  showDataItem = (
    id,
    student_name,
    student_class,
    student_phone_number,
    student_email,
  ) => {
    this.props.navigation.navigate('Editdata', {
      ID: id,
      NAME: student_name,
      CLASS: student_class,
      PHONE_NUMBER: student_phone_number,
      EMAIL: student_email,
    });
  };

  renderItems = ({item, index}) => {
    const {
      id,
      student_name,
      student_class,
      student_phone_number,
      student_email,
    } = item;
    return (
      <View style={{flex: 1}}>
        <TouchableOpacity
          onPress={this.showDataItem.bind(
            this,
            id,
            student_name,
            student_class,
            student_phone_number,
            student_email,
          )}>
          <Text>
            {id} . {student_name}
          </Text>
          <Text> {student_class}</Text>
          <Text> {student_phone_number}</Text>
          <Text> {student_email}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    YellowBox.ignoreWarnings(['Encountered', 'ReferenceError']);
    const test = test ? test : '';
    return (
      <View style={styles.MainContainer}>
        <View style={{height: '90%'}}>
          <FlatList
            data={this.state.data}
            keyExtractor={item => item.toString()}
            renderItem={this.renderItems}
          />
        </View>

        <TouchableOpacity
          activeOpacity={0.4}
          style={styles.Btn_AddData}
          onPress={() => this.props.navigation.navigate('Adddata')}>
          <Text style={styles.StyleAddData}> Add-DATA </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: 30,
    paddingLeft: 10,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderColor: 'skyblue',
    borderWidth: 3,
  },

  StylingTextInput: {
    textAlign: 'right',
    width: '90%',
    marginBottom: 7,
    height: 40,
    borderWidth: 1,
    borderColor: '#075e54',
    borderRadius: 5,
  },

  Btn_AddData: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginBottom: 7,
    width: '90%',
    backgroundColor: '#00BCD4',
  },

  StyleAddData: {
    color: '#fff',
    textAlign: 'center',
  },
});
export default Showdatacls;
