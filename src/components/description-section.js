import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

function DescriptionSection (props) {
    return (
        <View style={styles.containerStyle}>
            <Text style={styles.moocTitle}>{props.title}</Text>
            <Text>{`Proceso de valudacion: ${props.validation}`}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        position: 'relative'
    },
    moocTitle: {
        fontSize: 30
    }
})

export default DescriptionSection;