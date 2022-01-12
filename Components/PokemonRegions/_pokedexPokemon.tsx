/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React, { useEffect } from "react";
import { View, Text, Image, Dimensions, TouchableOpacity, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { RootState } from "../../redux-saga/_rootReducer";
import { getPokemonDataName } from '../../redux-saga/InfoPokemon/PokemonGeneralData/_pokemonGeneralDataSlice';
import { useSelector } from "react-redux";
import { getPokemonData } from "../../redux-saga/InfoPokemon/PokemonData/_pokemonDataSlice";
const windowWidth = (Dimensions.get('window').width);
const windowHeight = (Dimensions.get('window').height);

const _pokedexRegions = () => {
    const dispatch = useDispatch();

    const { name } = useSelector((state: RootState) => state.pokemonGeneralData);
    const { sprite } = useSelector((state: RootState) => state.pokemonData);
    useEffect(() => {
        dispatch(getPokemonDataName());
        dispatch(getPokemonData({ name: name }));
    }, [dispatch, name]);

    return name !== "" ? (
        <View>
            <View style={styles.viewPokemon}>
                <Image style={styles.image} source={{ uri: sprite }} />
                <Text style={styles.text}>El Pokémon que revisaste fue {name} </Text>
            </View>
            <View style={styles.viewPokedex}>
                <TouchableOpacity style={styles.buttonStart} />
                <TouchableOpacity style={styles.button} />
            </View>
        </View>
    ) : (<View>
        <View style={styles.viewPokemon}>
            <Image style={styles.image} source={{ uri: sprite }} />
            <Text style={styles.text}>No has revisado algun Pokémon </Text>
        </View>
        <View style={styles.viewPokedex}>
            <TouchableOpacity style={styles.buttonStart} />
            <TouchableOpacity style={styles.button} />
        </View>
    </View>);
};
const styles = StyleSheet.create({
    viewPokemon: {
        borderWidth: 10,
        width: windowWidth,
        height: windowHeight * 2 / 6
    },
    image: {
        height: 150,
        width: 150,
        alignSelf: "center"
    },
    text: {
        textAlign: "center",
        fontWeight: "bold"
    },
    viewPokedex: {
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: '#D10000',
        height: windowHeight * 4 / 6
    },
    button: {
        marginTop: 20,
        borderRadius: 50,
        height: 60,
        width: 60,
        backgroundColor: '#888682',
        alignSelf: "flex-end",
        marginRight: 20
    },
    buttonStart: {
        marginTop: 40,
        borderRadius: 5,
        height: 10,
        width: 20,
        backgroundColor: '#888682',
        marginLeft: 20
    }
});
export default _pokedexRegions;
