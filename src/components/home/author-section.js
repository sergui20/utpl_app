import React from 'react';
import { View, Image, Text } from 'react-native';

function AuthorSection(props) {
    return (
        <View style={styles.containerStyle}>
            <Image source={props.source} style={styles.authorPhoto} />
            <View style={styles.authorInfo}>
                <Text>{props.name}</Text>
                <Text>{props.profession}</Text>
            </View>
        </View>
    );
}

const styles = {
    containerStyle: {
        padding: 5,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        position: 'relative'
    },
    authorPhoto: {
        width: 35,
        height: 35,
        borderRadius: 35
    },
    authorInfo: {
        marginLeft: 5
    }
};

export default AuthorSection;
