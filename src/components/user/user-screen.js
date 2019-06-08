import React, { Component } from 'react';

import Card from '../common/card';
import CardSection from '../common/card-section';
import Input from '../common/input';
import Button from '../common/button';

class UserScreen extends Component {
    static navigationOptions = {
        title: 'Iniciar Sesión'
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input label="Email" placeholder="user@gmail.com"></Input>
                </CardSection>

                <CardSection>
                    <Input placeholder="password" label="Password" hideText={true}></Input>
                </CardSection>

                {/* <Text>
                    {this.state.error}
                </Text> */}

                <CardSection>
                    <Button buttonText="Entrar" />
                </CardSection>
            </Card>
        )
    }
}

export default UserScreen;