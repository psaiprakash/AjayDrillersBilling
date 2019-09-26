/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Modal,
  Text,
  TouchableHighlight,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

class Results extends Component {
  handleclose = () => {
    this.props.close();
  };

  render() {
    console.warn('model', this.props.grandTotal);
    return (
      <View style={{marginTop: 22}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.props.openModel}
          onRequestClose={() => this.handleclose()}>
          <View style={styles.topstyle}>
            <View
              style={{
                height: 20,
                width: '100%',
                paddingBottom: 10,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                backgroundColor: '#fff',
              }}
            />
          </View>

          <View style={{padding: 20, flex: 1, alignItems: 'center'}}>
            <Text
              style={{
                fontSize: 20,
                color: '#5a5a5a',
                fontWeight: 'bold',
                marginBottom: 20,
              }}>
              Results
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '70%',
                paddingBottom: 10,
                marginBottom: 20,
                borderBottomWidth: 1,
                borderBottomColor: '#efefef',
              }}>
              <Text
                style={{fontSize: 16, color: '#9a9a9a', fontWeight: 'bold'}}>
                Depth:
              </Text>
              <Text
                style={{fontSize: 20, color: '#0a0a0a', fontWeight: 'bold'}}>
                {this.props.depth}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '70%',
                marginBottom: 20,
                paddingBottom: 10,
                borderBottomWidth: 1,
                borderBottomColor: '#efefef',
              }}>
              <Text
                style={{fontSize: 16, color: '#9a9a9a', fontWeight: 'bold'}}>
                Casing:
              </Text>
              <Text
                style={{fontSize: 20, color: '#0a0a0a', fontWeight: 'bold'}}>
                {this.props.casing}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '70%',
                marginBottom: 20,
              }}>
              <Text
                style={{fontSize: 16, color: '#9a9a9a', fontWeight: 'bold'}}>
                Transport:
              </Text>
              <Text
                style={{fontSize: 20, color: '#0a0a0a', fontWeight: 'bold'}}>
                {this.props.transport}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '80%',
                marginBottom: 20,
                borderTopWidth: 2,
                paddingTop: 15,
                borderTopColor: '#7a7a7a',
              }}>
              <Text
                style={{fontSize: 20, color: '#7a7a7a', fontWeight: 'bold'}}>
                Total Amount:
              </Text>
              <Text
                style={{fontSize: 25, color: '#245ea7', fontWeight: 'bold'}}>
                {this.props.grandTotal}
              </Text>
            </View>
            <TouchableOpacity
              style={styles.submitButton}
              onPress={() => {
                this.handleclose();
              }}>
              <Text style={styles.submitButtonText}> Back </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.bottomstyle}>
            <View
              style={{
                height: 20,
                width: '100%',
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                backgroundColor: '#fff',
              }}
            />
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
    color: '#fff',
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
    backgroundColor: '#7a7a7a',
    height: 76,
    marginTop: 30,
    width: 76,
    borderRadius: 38,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  submitButtonText: {
    color: 'white',
    justifyContent: 'center',
    textAlign: 'center',
  },
  topstyle: {
    height: 75,
    backgroundColor: '#245ea7',
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  bottomstyle: {
    height: 75,
    backgroundColor: '#245ea7',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

export default Results;

{
  /* <TouchableHighlight
              onPress={() => {
                this.handleclose();
              }}>
              <Text>BACK</Text>
            </TouchableHighlight> */
}
