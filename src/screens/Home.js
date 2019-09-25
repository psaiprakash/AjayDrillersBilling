/* eslint-disable react-native/no-inline-styles */
import React, {PureComponent} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
  Modal,
} from 'react-native';
import Logo from '../assets/Logo.png';

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
  },
  text: {
    fontSize: 16,
    color: '#3a3a3a',
    marginLeft: 2,
    marginBottom: 5,
  },
  input: {
    height: 40,
    marginBottom: 30,
    padding: 5,
    paddingHorizontal: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#7a7a7a',
    borderColor: '#303030',
    borderWidth: 1,
  },
  submitButton: {
    backgroundColor: '#245ea7',
    padding: 10,
    height: 40,
    marginTop: 30,
    textAlign: 'center',
  },
  submitButtonText: {
    color: 'white',
    justifyContent: 'center',
    textAlign: 'center',
  },
  topstyle: {
    height: 175,
    backgroundColor: '#245ea7',
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});

export default class Home extends PureComponent {
  state = {
    rods: 0,
    casing: 0,
    transport: 500,
  };

  handleRods = value => {
    this.setState({rods: value});
  };

  handleCasing = value => {
    this.setState({casing: value});
  };

  handleTransport = value => {
    this.setState({transport: value});
  };

  handlesubmit = () => {
    let length = this.state.rods * 20;
    let finalprice = this.calulate(length);
    alert(finalprice);
  };

  calulate = n => {
    console.warn('trasportonchange', Number(this.state.transport));
    let sum = 300 * 80;
    let minlength = 400;
    let basicincrement = 6;
    let count = 0;
    let basicprice = 80;
    let lastlength = 300;
    if (n <= 300) {
      console.warn('trasportfinallessthan300', Number(this.state.transport));
      return (
        n * 80 + Number(this.state.casing) * 30 + Number(this.state.transport)
      );
    } else {
      while (minlength <= n) {
        if (count === 2) {
          basicincrement = basicincrement * 2;
          count = 0;
        }
        basicprice = basicprice + basicincrement;
        sum = sum + 100 * basicprice;

        count = count + 1;
        lastlength = minlength;
        minlength = minlength + 100;
      }
    }
    if (lastlength === n) {
      //ss console.warn('finalprice', sum);
    } else {
      //  console.warn('finalprice', sum + (n - lastlength) * basicprice);
      if (count === 2) {
        basicincrement = basicincrement * 2;
        count = 0;
      }
      basicprice = basicprice + basicincrement;
      sum = sum + (n - lastlength) * basicprice;
    }
    // console.warn(
    //   'finalprice------',
    //   sum + this.state.casing * 30 + this.state.transport,
    // );
    console.warn('trasportfinal', Number(this.state.transport));
    return sum + Number(this.state.casing) * 30 + Number(this.state.transport);
  };

  render() {
    console.warn('trasport', Number(this.state.transport));
    return (
      <View style={styles.container}>
        <View style={styles.topstyle}>
          <View
            style={{
              width: 100,
              height: 100,
              backgroundColor: '#fff',
              borderRadius: 100,
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 30,
            }}>
            <Image source={Logo} style={{width: 70, height: 70}} />
          </View>
          <View
            style={{
              height: 20,
              width: '100%',
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              backgroundColor: '#fff',
            }}
          />
        </View>
        <View style={{padding: 20}}>
          <Text style={styles.text}>No.of Rods:</Text>
          <TextInput
            style={styles.input}
            label="No. of Rods"
            placeholder=""
            keyboardType="numeric"
            value={this.state.rods}
            onChangeText={this.handleRods}
          />
          <Text style={styles.text}>Casing:</Text>
          <TextInput
            style={styles.input}
            label="Casing"
            underlineColorAndroid="transparent"
            keyboardType="numeric"
            onChangeText={this.handleCasing}>
            {this.state.casing}
          </TextInput>
          <Text style={styles.text}>Transport:</Text>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            keyboardType="numeric"
            label="Transport"
            initial={this.state.transport}
            onChangeText={this.handleTransport}>
            {this.state.transport}
          </TextInput>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => this.handlesubmit()}>
            <Text style={styles.submitButtonText}> Submit </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
