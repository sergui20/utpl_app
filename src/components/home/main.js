import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';

import data from '../../../api.json';
const categories = data.courses.categories

import Card from './card';

class Main extends Component {
    static navigationOptions = {
        title: 'UTPL'
    }

    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.mainTitle}>Explora nuestros Cursos</Text>
                {
                    categories.map( category => {
                        return (
                            <View key={category.id} style={styles.categoryContainer}>
                                <Text style={styles.categoryTitle}>{category.title}</Text>

                                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                    {
                                        category.moocs.map( mooc => {
                                            return (
                                                <Card key={mooc.id} {...mooc} source={require('../../images/profile1.png')} />
                                            )
                                        })
                                    }
                                </ScrollView>
                            </View>
                        )
                    })
                }
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    mainTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        paddingLeft: 5,
        marginTop: 10,
        marginBottom: 15
    },
    categoryContainer: {
        marginBottom: 30
    },
    categoryTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingLeft: 5,
        color: '#0a6ebd'
    }
})

export default Main;