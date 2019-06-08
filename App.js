import React from 'react';
import { createAppContainer, createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Main from './src/components/home/main';
import WatchScreen from './src/components/home/watch-screen';
import UserScreen from './src/components/user/user-screen';
import SearchScreen from './src/components/search/search-screen';

const HomeStack = createStackNavigator(
  {
    Home: Main,
    Courses: WatchScreen
  },
  {
    initialRouteName: 'Home',

    defaultNavigationOptions: {
      headerTintColor: '#004073',
      headerTitleStyle: {
        fontWeight: '800',
        fontSize: 30,
        flex: 1,
        textAlign: 'center'
      },
    }
  }
)

const UserStack = createStackNavigator(
  {
  User: UserScreen
  },
  {
    defaultNavigationOptions: {
      headerTintColor: '#004073',
      headerTitleStyle: {
        fontWeight: '800',
        fontSize: 22,
        flex: 1,
        textAlign: 'center'
      },
    }
  }
)

const SearchStack = createStackNavigator(
  {
  Search: SearchScreen
  },
  {
    defaultNavigationOptions: {
      headerTintColor: '#004073',
      headerTitleStyle: {
        fontWeight: '800',
        fontSize: 22,
        flex: 1,
        textAlign: 'center'
      },
    }
  }
)

const AppNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Search: SearchStack,
    User: UserStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = "ios-home";

        } else if (routeName === 'User') {
          iconName = "ios-person";
        } else if (routeName === 'Search') {
          iconName = "ios-search"
        }

        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#004073',
      inactiveTintColor: 'gray',
    },
  }
)

// const styles = StyleSheet.create({
//   mainTitle: {
//     color: '#004073',
//     fontSize: 30,
//     fontWeight: '800'
//   },
//   rightButton: {
//     backgroundColor: '#f9bf15',
//     padding: 2.5,
//     color: '#004073'
//   }
// });

export default createAppContainer(AppNavigator);
