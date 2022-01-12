/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';
import { getPokemonData } from '../../redux-saga/InfoPokemon/PokemonData/_pokemonDataSlice';
import { RootState } from '../../redux-saga/_rootReducer';
import { setPokemonDataName } from '../../redux-saga/InfoPokemon/PokemonGeneralData/_pokemonGeneralDataSlice';

const _pokedexData = ({ route }: { route: any }) => {
    const dispatch = useDispatch();
    const { name } = route.params;

    const { sprite, isLoading, abilities, moves, stats } = useSelector((state: RootState) => state.pokemonData);
    useEffect(() => {
        dispatch(getPokemonData({ name: name }));
        dispatch(setPokemonDataName(name));
    }, [dispatch, name, sprite]);

    return isLoading === true ? (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.textTitle}>Pokémon Description</Text>
                <View style={styles.viewImage}>
                    <Image style={styles.spritePokemon} source={{ uri: sprite }} />
                    <Text style={styles.subTitle}>{name}</Text>
                </View>
                <Text style={styles.subTitle}>Abilities</Text>
                <View style={styles.abilitiesAndMoves}>
                    {
                        abilities.map((item: any, index: any) => (
                            <View style={styles.tag} key={index} testID="map-abilities">
                                <Text style={styles.textGeneral}>{item.ability.name}</Text></View>
                        ))
                    }
                </View>
                <Text style={styles.subTitle}>Moves</Text>
                <View style={styles.abilitiesAndMoves}>
                    <ScrollView horizontal={true}>
                        {
                            moves.map((item: any, index: any) => (
                                <View style={styles.tag} key={index} testID="map-moves"><Text style={
                                    styles.textGeneral}>{item.move.name}</Text></View>
                            ))
                        }
                    </ScrollView>
                </View>
                <Text style={styles.subTitle}>Stats</Text>
                <View >
                    {
                        stats.map((item: any, index: any) => (
                            <View style={styles.stats}
                                key={index} testID="map-stats">
                                <Text style={styles.textDescriptionGrey}>{item.stat.name}</Text>
                                <Text style={styles.textDescriptionBlack}>{item.base_stat}</Text>
                            </View>
                        ))
                    }
                </View>
            </ScrollView>
        </View >

    ) : (<ActivityIndicator animating={true} color="#FF5000" size="large" />);
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    viewImage: {
        height: 300,
        alignSelf: 'center',
        marginTop: 40,
    },
    spritePokemon: { height: 250, width: 250 },
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
    textTitle: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 22,
        marginTop: 10,
    },
    subTitle: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
    },
    tag: {
        width: 100,
        height: 18,
        borderRadius: 5,
        borderColor: '#FF5000',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textDescriptionGrey: {
        flex: 1,
        marginTop: 14,
        color: '#888682',
        fontSize: 14,
    },
    textDescriptionBlack: {
        flex: 2,
        marginTop: 14,
        fontSize: 14,
        color: '#888682',
        textAlign: 'right',
    },
    abilitiesAndMoves: {
        flexDirection: 'row',
        alignSelf: 'center',
    },
    textGeneral: {
        color: '#888682', fontSize: 14,
    },
    stats: {
        flexDirection: 'row',
        borderColor: '#DEDEDE',
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 5, justifyContent: 'center',
    },
});
export default _pokedexData;
