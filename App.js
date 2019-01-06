import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Nav from './src/Nav/nav';
import Generate from './src/Generator/generate'

export default class App extends React.Component {
    state = {
        nameOfApp: "My awesome app"
    }



    render() {
        return (
        <View style={styles.container}>
            <Nav nameOfApp={this.state.nameOfApp}/>
            <Generate/>
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
  }
});
