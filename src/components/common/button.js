import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

function Button(props) {
    return (
        <View>
            <TouchableOpacity style={{backgroundColor: '#f9bf15', paddingVertical: 8, marginVertical: 10}} onPress={props.onPress}>
                <Text style={{color: '#004073', textAlign: 'center', fontSize: 18, fontWeight: 'bold'}}>{props.buttonText}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Button;
