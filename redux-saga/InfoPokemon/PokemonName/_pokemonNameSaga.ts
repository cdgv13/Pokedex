/* eslint-disable prettier/prettier */
const { all, takeLatest } = require('redux-saga/effects');
const { getPokemonName } = require('./_pokemonNameSlice');
const { handlerGetPokemonName } = require('./_pokemonNameHandler');

function* _pokemonNameSaga() {
    yield all([takeLatest(getPokemonName.type, handlerGetPokemonName)]);
}

export default _pokemonNameSaga;
