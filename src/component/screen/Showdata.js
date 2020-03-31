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

class ShowData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios
      .get(`http://laravel.rue.stoss-medica.int/api/students`)
      .then(res => {
        console.log(res.data);
        const data = res.data;
        this.setState({data});
      })
      .catch(err => consule.log(err));
  }

  AmbildataCuy = (
    student_id,
    student_name,
    student_class,
    student_phone_number,
    student_email,
  ) => {
    this.props.navigation.navigate('Editdata', {
      ID: student_id,
      NAME: student_name,
      CLASS: student_class,
      PHONE_NUMBER: student_phone_number,
      EMAIL: student_email,
    });
  };

  renderItems = ({item, index}) => {
    const {
      student_id,
      student_name,
      student_class,
      student_phone_number,
      student_email,
    } = item;
    return (
      <View style={{flex: 1}}>
        <TouchableOpacity
          onPress={this.AmbildataCuy.bind(
            this,
            student_id,
            student_name,
            student_class,
            student_phone_number,
            student_email,
          )}>
          <Text>
            {student_id} . {student_name}
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

    return (
      <View style={{flex: 1}}>
        <View style={{height: '90%'}}>
          <FlatList
            data={this.state.data}
            keyExtractor={item => item.toString()}
            renderItem={this.renderItems}
          />
        </View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Adddata')}>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{textAlign: 'center'}}>Add Data</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default ShowData;
