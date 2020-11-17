import React, {Component, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const Counter = () => {
  const [number, setNumber] = useState(0);
  return (
    <View>
      <Text style={styles.number}>{number}</Text>
      <Button
        title="Add Number"
        onPress={() => {
          setNumber(number + 1);
        }}
      />
    </View>
  );
};

class ClassCounter extends Component {
  state = {
    number: 0,
  };
  render() {
    return (
      <View>
        <Text style={styles.number}>{this.state.number}</Text>
        <Button
          title="Add Number"
          onPress={() => this.setState({number: this.state.number + 1})}
        />
      </View>
    );
  }
}

const StateDinamis = () => {
  return (
    <View>
      <Text style={styles.title}>State Dinamic Component</Text>
      <Text style={{marginTop: 20}}>Using Functional Component</Text>
      <Counter />
      <Counter />
      <Text style={{marginTop: 20}}>Using Class Component</Text>
      <ClassCounter />
      <ClassCounter />
    </View>
  );
};

export default StateDinamis;

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  number: {
    fontSize: 30,
  },
});
