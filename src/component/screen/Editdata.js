import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';

class Editdatacls extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      TextInput_ID: '',
      TextInput_Student_Name: '',
      TextInput_Student_Class: '',
      TextInput_Student_PhoneNumber: '',
      TextInput_Student_Email: '',
    };
  }

  componentDidMount() {
    // Received Student Details Sent From Previous Activity and Set Into State.
    //console.log(this.props.route.params);

    this.setState({
      TextInput_ID: this.props.route.params.ID,
      TextInput_Student_Name: this.props.route.params.NAME,
      TextInput_Student_Class: this.props.route.params.CLASS,
      TextInput_Student_PhoneNumber: this.props.route.params.PHONE_NUMBER,
      TextInput_Student_Email: this.props.route.params.EMAIL,
    });
  }

  editData = () => {
    axios
      .put(
        `http://laravel.rue.stoss-medica.int/api/students/${this.state.TextInput_ID}`,
        {
          //id: this.state.TextInput_ID,
          student_name: this.state.TextInput_Student_Name,
          student_class: this.state.TextInput_Student_Class,
          student_phone_number: this.state.TextInput_Student_PhoneNumber,
          student_email: this.state.TextInput_Student_Email,
        },
      )
      .then(res => {
        console.log('Data Saved');
      })
      .catch(err => console.log('Error123:', err));

    //setTimeout(this.props.navigation.navigate('Showdata'), 3000);
    /*
    this.setTimeout(function() {
      this.props.navigation.navigate('Showdata');
    }, 1000);
    */
  };

  deleteData = () => {
    axios
      .delete(
        `http://laravel.rue.stoss-medica.int/api/students/${this.state.TextInput_ID}`,
        {
          //id: this.state.TextInput_ID,
        },
      )

      .then(res => console.log(res))
      .catch(err => console.log(err));

    this.props.navigation.navigate('Showdata');
  };

  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={{fontSize: 20, textAlign: 'center', marginBottom: 7}}>
          {' '}
          Edit Data{' '}
        </Text>

        <TextInput
          placeholder="Student Name Shows Here"
          value={this.state.TextInput_Student_Name}
          onChangeText={TextInputValue =>
            this.setState({TextInput_Student_Name: TextInputValue})
          }
          underlineColorAndroid="transparent"
          style={styles.StylingTextInput}
        />

        <TextInput
          placeholder="Student Class Shows Here"
          value={this.state.TextInput_Student_Class}
          onChangeText={TextInputValue =>
            this.setState({TextInput_Student_Class: TextInputValue})
          }
          underlineColorAndroid="transparent"
          style={styles.StylingTextInput}
        />

        <TextInput
          placeholder="Student Phone Number Shows Here"
          value={this.state.TextInput_Student_PhoneNumber}
          onChangeText={TextInputValue =>
            this.setState({TextInput_Student_PhoneNumber: TextInputValue})
          }
          underlineColorAndroid="transparent"
          style={styles.StylingTextInput}
        />

        <TextInput
          placeholder="Student Email Shows Here"
          value={this.state.TextInput_Student_Email}
          onChangeText={TextInputValue =>
            this.setState({TextInput_Student_Email: TextInputValue})
          }
          underlineColorAndroid="transparent"
          style={styles.StylingTextInput}
        />

        <TouchableOpacity
          activeOpacity={0.4}
          style={styles.Btn_AddData}
          onPress={this.editData}>
          <Text style={styles.StyleAddData}> Edit Data </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.4}
          style={styles.Btn_AddData}
          onPress={this.deleteData}>
          <Text style={styles.StyleAddData}> Delete Data </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.4}
          style={styles.Btn_AddData}
          onPress={() => this.props.navigation.navigate('Showdata')}>
          <Text style={styles.StyleAddData}> Show All DATA </Text>
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

export default Editdatacls;
