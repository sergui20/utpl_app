import React, { Component } from 'react';
import { View, Text, ScrollView, Image, Dimensions } from 'react-native';
import { withNavigation } from 'react-navigation';
import YouTube from 'react-native-youtube';

import Button from '../common/button';

const { width } = Dimensions.get("window")

class WatchScreen extends Component {
    static navigationOptions = {
        title: 'UTPL'
    }

    render() {
        const props = this.props.navigation.state.params
        return (
            <View>
                <View style={{width, height:300}}>
                    <YouTube
                        apiKey="YOUR_API_KEY" 
                        videoId="KVZ-P-ZI6W4"
                        controls={2}
                        style={{ flex: 1 }}
                    />
                </View>
                <ScrollView style={styles.moocInfo}>
                    <View style={{flex: 1, height: 850}}>
                        <View>
                            <Text style={styles.moocTitle}>{props.mooc.title}</Text>
                            <View style={styles.moocVideoInfo}>
                                <View style={styles.containerAuhtorInfo}>
                                    <Image source={require('../../images/profile1.png')} style={styles.authorPhoto} />
                                    <View style={{marginLeft: 5}}>
                                        <Text>{props.mooc.author.name}</Text>
                                        <Text>Economista</Text>
                                    </View>
                                </View>
                                <Text>1h27m</Text>
                                <Text>10/09/2018</Text>
                            </View>
                        </View>

                        <View style={{borderTopColor: '#ddd', borderTopWidth: 1, paddingTop: 5}}>
                            <Text style={{fontWeight: 'bold', textAlign: 'justify'}}>
                                Descripcion:
                                <Text style={{fontWeight: 'normal', textAlign: 'center'}}> Bienvenido al MOOC “Presupuestos” cuyo objetivo es contribuir a formar profesionales críticos y analíticos que evidencien la importancia del presupuesto en las empresas privadas y en el sector público, para tomar decisiones que permitan alcanzar los objetivos organizacionales. También se busca que el profesional cuente con las herramientas fundamentales para una correcta elaboración, control e interpretación de los informes de desempeño, que son fundamentales para cumplir el presupuesto..</Text>
                            </Text>
                        </View>

                        <View style={{marginTop: 10}}>
                            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Modulos del curso:</Text>
                            <View style={styles.modulesContainer}>
                                <View style={styles.modulesTypes}>
                                    <Image style={styles.modulesImage} source={require('../../images/m1.png')} />
                                    <Text style={styles.moduleText}>Presentación del curso</Text>
                                </View>

                                <View style={styles.modulesTypes}>
                                    <Image style={styles.modulesImage} source={require('../../images/m2.png')} />
                                    <Text style={styles.moduleText}>El proceso administrativo</Text>
                                </View>

                                <View style={styles.modulesTypes}>
                                    <Image style={styles.modulesImage} source={require('../../images/m3.png')} />
                                    <Text style={styles.moduleText}>Fundamentos de la planificación y control de utilidades</Text>
                                </View>

                                <View style={styles.modulesTypes}>
                                    <Image style={styles.modulesImage} source={require('../../images/m4.png')} />
                                    <Text style={styles.moduleText}>El proceso de planificación y control de utilidades. Planificación y control de los flujos de efectivo</Text>
                                </View>

                                <View style={styles.modulesTypes}>
                                    <Image style={styles.modulesImage} source={require('../../images/m5.png')} />
                                    <Text style={styles.moduleText}>Pronóstico financiero planeación y presupuesto</Text>
                                </View>

                                <View style={styles.modulesTypes}> 
                                    <Image style={styles.modulesImage} source={require('../../images/m6.png')} />
                                    <Text style={styles.moduleText}>Evaluación de desempeño y control administrativo</Text>
                                </View>
                            </View>
                        </View>

                        <Button buttonText="Iniciar Sesión" onPress={() => this.props.navigation.navigate('User')} />
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = {
    containerAuhtorInfo: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        position: 'relative'
    },
    moocTitle: {
        color: '#004073',
        fontSize: 30,
        fontWeight: 'bold'
    },
    authorPhoto: {
        width: 35,
        height: 35,
        borderRadius: 35
    },
    authorInfo: {
        marginLeft: 5
    },
    moocInfo: {
        backgroundColor: '#fff',
        paddingHorizontal: 10
    },
    moocVideoInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: '#ddd',
        borderTopWidth: 1,
        paddingVertical: 10
    },
    modulesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap'

    },
    modulesImage: {
        width: 25,
        height: 25
    },
    modulesTypes: {
        width: width / 2 - 12,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5
    },
    moduleText: {
        marginLeft: 2
    }
};

export default withNavigation(WatchScreen);