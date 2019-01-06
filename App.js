import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{backgroundColor: 'red', width: '100%'}}>
            <Text>Text for View 1</Text>
        </View>
        <View style={styles.view2}>
            <Text>Text for View 2</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    marginTop: 20
  },
  view2:{
      backgroundColor: 'blue'
  }
});
