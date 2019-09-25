/* eslint-disable react-native/no-inline-styles */
import React, {PureComponent} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
} from 'react-native';
import Label from '../components/Label';
import Logo from '../assets/Logo.png';

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
    let sum = 300 * 80;
    let minlength = 400;
    let basicincrement = 6;
    let count = 0;
    let basicprice = 80;
    let lastlength = 300;
    if (n <= 300) {
      return n * 80 + this.state.casing * 30 + this.state.transport;
    } else {
      while (minlength <= n) {
        console.warn('length', minlength);
        console.warn('countvalue', count);
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
    return sum + this.state.casing * 30 + this.state.transport;
  };

  render() {
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
            }}>
            <Image source={Logo} style={{width: 70, height: 70}} />
          </View>
        </View>
        <View style={{padding: 20}}>
          <Text>No.of Rods</Text>
          <TextInput
            style={styles.input}
            label="No. of Rods"
            keyboardType="numeric"
            value={this.state.rods}
            onChangeText={this.handleRods}
          />
          <Label
            style={styles.input}
            label="Casing"
            underlineColorAndroid="transparent"
            keyboardType="numeric"
            onChangeText={this.handleCasing}
          />
          <Label
            style={styles.input}
            underlineColorAndroid="transparent"
            keyboardType="numeric"
            label="Transport"
            initial={this.state.transport}
            onChangeText={this.handleTransport}
          />
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

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1,
  },
  submitButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    color: 'white',
  },
  topstyle: {
    height: 175,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
