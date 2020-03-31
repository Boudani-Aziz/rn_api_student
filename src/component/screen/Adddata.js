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

class AddData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      TextInput_Student_Name: '',
      TextInput_Student_Class: '',
      TextInput_Student_PhoneNumber: '',
      TextInput_Student_Email: '',
    };
  }

  adddata = () => {
    axios
      .post('http://laravel.rue.stoss-medica.int/api/students', {
        student_name: this.state.TextInput_Student_Name,
        student_class: this.state.TextInput_Student_Class,
        student_phone_number: this.state.TextInput_Student_PhoneNumber,
        student_email: this.state.TextInput_Student_Email,
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => consule.log(err));
  };

  render() {
    YellowBox.ignoreWarnings(['Encountered', 'ReferenceError']);

    return (
      <View style={styles.MainContainer}>
        <Text style={{fontSize: 20, textAlign: 'center', marginBottom: 7}}>
          {' '}
          Add Data{' '}
        </Text>

        <TextInput
          placeholder="Enter Student Name"
          onChangeText={TextInputValue =>
            this.setState({TextInput_Student_Name: TextInputValue})
          }
          underlineColorAndroid="transparent"
          style={styles.StylingTextInput}
        />

        <TextInput
          placeholder="Enter Student Class"
          onChangeText={TextInputValue =>
            this.setState({TextInput_Student_Class: TextInputValue})
          }
          underlineColorAndroid="transparent"
          style={styles.StylingTextInput}
        />

        <TextInput
          placeholder="Enter Student Phone Number"
          onChangeText={TextInputValue =>
            this.setState({TextInput_Student_PhoneNumber: TextInputValue})
          }
          underlineColorAndroid="transparent"
          style={styles.StylingTextInput}
        />

        <TextInput
          placeholder="Enter Student Email"
          onChangeText={TextInputValue =>
            this.setState({TextInput_Student_Email: TextInputValue})
          }
          underlineColorAndroid="transparent"
          style={styles.StylingTextInput}
        />

        <TouchableOpacity
          activeOpacity={0.4}
          style={styles.Btn_AddData}
          onPress={this.adddata}>
          <Text style={styles.StyleAddData}> Addkan Data</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    alignItems: 'center',
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#fff',
  },

  StylingTextInput: {
    textAlign: 'center',
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

export default AddData;
