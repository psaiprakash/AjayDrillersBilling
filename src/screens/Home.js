import React, {PureComponent} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import Label from '../components/Label';

export default class Home extends PureComponent {
  state = {
    rods: 0,
    casing: 0,
    transport: 500,
  };

  componentDidMount() {
    // this.calulate(900);
    // console.warn('hello');
  }

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
    console.warn('submit');
    let length = this.state.rods * 20;
    let finalprice = this.calulate(length);
    alert(finalprice);
  };

  calulate = n => {
    console.warn('total length', n);
    let sum = 300 * 80;
    let minlength = 400;
    let basicincrement = 6;
    let count = 0;
    let basicprice = 80;
    let lastlength = 300;

    if (n <= 300) {
      console.warn(
        'lessthan 300 feet',
        n * 80 + this.state.casing * 30 + this.state.transport,
      );
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
    console.warn(
      'finalprice------',
      sum + this.state.casing * 30 + this.state.transport,
    );
    return sum + this.state.casing * 30 + this.state.transport;
  };

  render() {
    console.warn('rods', this.state.casing);
    return (
      <View style={styles.container}>
        <Label
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

        {/* <Text> Ajay Drillers </Text>
        <View>
          <TextInput value={rods} />
          <Text>Rods :</Text>
        </View>
        <View>
          <TextInput onChangeText={this.handleCasing()} />
          <Text>Casing :</Text>
        </View>
        <View>
          <TextInput onChangeText={this.handleTransport()} />
          <Text>Transport :</Text>
        </View>

        <TouchableOpacity onPress={() => this.handlesubmit()}>
          Submit
        </TouchableOpacity>
        <Text>{this.state.grandTotal}</Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
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
});
