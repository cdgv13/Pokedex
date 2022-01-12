/* eslint-disable prettier/prettier */
import { getPokemonData } from './_pokemonDataSlice';
import { handlerGetPokemonData } from '../PokemonData/_pokemonDataHandler';
/* eslint-disable prettier/prettier */
const { all, takeLatest } = require('redux-saga/effects');

function* _pokemonDataSaga() {
    yield all([takeLatest(getPokemonData.type, handlerGetPokemonData)]);
}

export default _pokemonDataSaga;
