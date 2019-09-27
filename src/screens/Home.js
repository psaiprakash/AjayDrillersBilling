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
import Logo from '../assets/Logo.png';
import Result from '../components/Results';

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 16,
    color: '#3a3a3a',
    marginLeft: 2,
    marginBottom: 5,
  },
  textAjay: {
    fontSize: 16,
    color: '#3a3a3a',
    marginLeft: 2,
    marginBottom: 5,
    marginTop: 30,
    textAlign: 'center',
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
let length;
let casingLength;

export default class Home extends PureComponent {
  state = {
    rods: 0,
    casing: 0,
    transport: 500,
    openModal: false,
    grandTotal: '',
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
    length = this.state.rods * 20;
    let finalprice = this.calulate(length);
    // alert('length: ' + length + ' Price: ' + finalprice);
    this.setState({openModal: true, grandTotal: finalprice});
  };

  calulate = n => {
    let sum = 300 * 80;
    let minlength = 400;
    let basicincrement = 6;
    let count = 0;
    let basicprice = 80;
    let lastlength = 300;
    casingLength = Number(this.state.casing) * 30;
    if (n <= 300) {
      return n * 80 + casingLength + Number(this.state.transport);
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
    return sum + casingLength + Number(this.state.transport);
  };

  render() {
    // console.warn('trasport', Number(this.state.transport));
    const {openModal} = this.state;
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
            <Image source={Logo} style={{width: 90, height: 90}} />
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
            onSubmitEditing={() => {
              this.casingTextInput.focus();
            }}
            blurOnSubmit={false}
          />
          <Text style={styles.text}>Casing:</Text>
          <TextInput
            style={styles.input}
            label="Casing"
            underlineColorAndroid="transparent"
            keyboardType="numeric"
            onChangeText={this.handleCasing}
            ref={input => {
              this.casingTextInput = input;
            }}
            onSubmitEditing={() => {
              this.transportTextInput.focus();
            }}
            blurOnSubmit={false}>
            {this.state.casing}
          </TextInput>
          <Text style={styles.text}>Transport:</Text>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            keyboardType="numeric"
            label="Transport"
            initial={this.state.transport}
            onChangeText={this.handleTransport}
            ref={input => {
              this.transportTextInput = input;
            }}>
            {this.state.transport}
          </TextInput>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => this.handlesubmit()}>
            <Text style={styles.submitButtonText}> Submit </Text>
          </TouchableOpacity>
        </View>
        {openModal && (
          <Result
            open={openModal}
            openPage={this.openPages}
            grandTotal={this.state.grandTotal}
            depth={length}
            casing={casingLength}
            transport={this.state.transport}
            close={() =>
              this.setState({
                openModal: false,
              })
            }
          />
        )}
      </View>
    );
  }
}
