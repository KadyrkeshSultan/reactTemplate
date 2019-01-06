import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';

const generate = (props) => (
    <TouchableWithoutFeedback
        onPress={() => {
            props.add()
        }}
        //onLongPress={() => alert('Touched')}
        //onPressIn={() => alert('Touched Press In')}
        //onPressOut={() => alert('Touched Press Out')}
        //delayLongPress={5000}
    >
        <View style={styles.generate}>
            <Text>Add number</Text>
        </View>
    </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
    generate:{
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#00bce4',
        width: '100%',
        marginBottom: '10%'
    }
});

export default generate;