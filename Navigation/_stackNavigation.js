import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import _pokedexRegions from '../Components/PokemonRegions/_pokedexPokemon';
import _pokedexHome from '../Components/PokemonHome/_pokedexHome';
import {View} from 'react-native';
import {Image, StyleSheet} from 'react-native';
import _pokedexData from '../Components/PokemonHome/_pokemonData';
const Stack = createStackNavigator();
export const HomeStackScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitle: () => (
          <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              source={require('../Components/assets/pokeballcolor.png')}
            />
          </View>
        ),
      }}>
      <Stack.Screen name="PokedexHome" component={_pokedexHome} />
      <Stack.Screen name="PokedexData" component={_pokedexData} />
    </Stack.Navigator>
  );
};
export const RegionsStackScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: () => (
          <View style={styles.logoView}>
            <Image
              style={styles.logo}
              source={require('../Components/assets/pokeballcolor.png')}
            />
          </View>
        ),
      }}
      initialRouteName="PokedexRegion">
      <Stack.Screen name="PokedexRegion" component={_pokedexRegions} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 30,
    height: 32,
    justifyContent: 'center',
  },
});
