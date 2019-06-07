import React, { Component } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Router, Stack, Scene } from 'react-native-router-flux';

import Main from './src/components/main';
import WatchScreen from './src/components/watch-screen';

const { width } = Dimensions.get("window")
 
class App extends Component {
  render() {
    return (
      <Router>
        <Stack key="root" hideNavBar>
          <Stack key="main" titleStyle={styles.mainTitle}>
            <Scene key="allCourses" component={Main} title="UTPL" rightTitle="Iniciar Sesion" rightButtonTextStyle={styles.rightButton} onRight={() => {}} initial />
            <Scene key="watchCourse" component={WatchScreen} title="UTPL"></Scene>
          </Stack>
        </Stack>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  mainTitle: {
    color: '#004073',
    fontSize: 30,
    fontWeight: '800'
  },
  rightButton: {
    backgroundColor: '#f9bf15',
    padding: 2.5,
    color: '#004073'
  }
});

export default App;
