import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

function CoverCard () {
    return (
        <View>
            <Image source={require('../../images/course1.jpg')} style={styles.moocCoverPhoto}></Image>
        </View>
    )
}

const styles = StyleSheet.create({
    moocCoverPhoto: {
        width: 'auto',
        height: 150,
    },
})

export default CoverCard;