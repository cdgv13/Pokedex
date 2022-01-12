/* eslint-disable prettier/prettier */

//import 'react-native-gesture-handler'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import _tabNavigation from './Navigation/_tabNavigation.js';




/*const HomeStack = createStackNavigator();
const HomeStackScreen = ({ navigation }) => {
  return (
    <HomeStack.Navigator
      initialRouteName="PokedexHome">
      <HomeStack.Screen
        name="PokedexHome"
        component={_pokedexHome}
      />

    </HomeStack.Navigator>
  );
};
*/
const App = () => {
  return (
    <NavigationContainer>
      <_tabNavigation />
    </NavigationContainer>
  );
};

export default App;
