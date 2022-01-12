/* eslint-disable prettier/prettier */
import { all, fork } from 'redux-saga/effects';
import _pokemonNameSaga from './InfoPokemon/PokemonName/_pokemonNameSaga';
import _pokemonDataSaga from './InfoPokemon/PokemonData/_pokemonDataSaga';

export function* watcherSaga() {
    yield all([
        fork(_pokemonNameSaga),
        fork(_pokemonDataSaga),
    ]);
}
