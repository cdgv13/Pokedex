/* eslint-disable prettier/prettier */
import { combineReducers } from '@reduxjs/toolkit';
import _pokemonNameReducer from './InfoPokemon/PokemonName/_pokemonNameSlice';
import _pokemonDataReducer from './InfoPokemon/PokemonData/_pokemonDataSlice';
import _pokemonGeneralDataReducer from './InfoPokemon/PokemonGeneralData/_pokemonGeneralDataSlice';

const reducer = combineReducers({
    pokemonName: _pokemonNameReducer,
    pokemonData: _pokemonDataReducer,
    pokemonGeneralData: _pokemonGeneralDataReducer,
});
export type RootState = ReturnType<typeof reducer>;
export default reducer;
