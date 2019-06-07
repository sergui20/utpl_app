import React from 'react';
import { Dimensions, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

import CoverCard from './cover-card';
import DescriptionSection from './description-section';
import AuthorSection from './author-section';

const { width } = Dimensions.get("window");

function Card(props) {
    const { containerStyle } = styles;

    return (
        <TouchableOpacity style={containerStyle} onPress={() => Actions.watchCourse({mooc: props})}>
            <CoverCard />

            <DescriptionSection title={props.title} validation={props.validacion} />

            <AuthorSection source={props.source} name={props.author.name} profession={props.author.profesion} />
        </TouchableOpacity>
    );
}

const styles = {
    containerStyle: {
        width: width - 150,
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    }
};

export default Card;
