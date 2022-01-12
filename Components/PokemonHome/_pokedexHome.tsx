/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonName } from '../../redux-saga/InfoPokemon/PokemonName/_pokemonNameSlice';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { RootState } from '../../redux-saga/_rootReducer';

const _pokedexHome = ({ navigation }: { navigation: any }) => {
    const dispatch = useDispatch();
    const { results } = useSelector((state: RootState) => state.pokemonName);
    useEffect(() => {
        dispatch(getPokemonName());
    }, [dispatch]);

    return (
        <View >
            <ScrollView>
                <Text style={styles.title}>Pokedex List</Text>
                {
                    results.map((item: any, index: any) => {
                        return (
                            <View style={styles.card}
                                key={index}>
                                <TouchableOpacity onPress={() => navigation.navigate('PokedexData', {
                                    name: item.name,
                                    id: index + 1,
                                })}>
                                    <View style={styles.viewNames}>
                                        <Text >{index + 1}  </Text>
                                        <Text >{item.name} </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        );
                    })
                }
            </ScrollView>
        </View>
    );
};
const styles = StyleSheet.create({
    card: {
        width: '100%',
        borderRadius: 3,
        backgroundColor: '#fff',
        flexDirection: 'column',
        alignSelf: 'center',
        marginTop: 10,
        elevation: 3,
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowOffset: {
            width: 3,
            height: 3,
        },
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 24,
    },
    viewNames: {
        flexDirection: 'row',
    },
});
export default _pokedexHome;
