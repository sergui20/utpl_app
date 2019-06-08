import React, { Component } from 'react'
import { View, TextInput, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

class SearchScreen extends Component {
    static navigationOptions = {
        title: 'Buscar MOOC'
    }

    render() {
        return (
            <View style={styles.inputContainer}>
                <TextInput style={styles.inputText} placeholder="Buscar" autoCorrect={false} />
                    <Ionicons style={styles.searchIcon} name="ios-search" color="#004073" size={20} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 10,
        height: 40,
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: '#ddd',
        borderRadius: 5,
        opacity: 0.9,
        marginHorizontal: 10
    },
    inputText: {
        backgroundColor: 'white',
        flex: 1
    },
    searchIcon: {
        backgroundColor: 'white',
        paddingTop: 8,
        paddingRight: 8
    },
})

export default SearchScreen;