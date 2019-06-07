import React from 'react';
import { View } from 'react-native';

function CardSection(props) {
    return (
        <View style={style.containerStyle}>
            {props.children}
        </View>
    );
}

const style = {
    containerStyle: {
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        position: 'relative'
    }
};

export default CardSection;
