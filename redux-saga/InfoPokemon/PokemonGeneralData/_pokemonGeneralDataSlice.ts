/* eslint-disable prettier/prettier */

import { createSlice } from '@reduxjs/toolkit';
import { _pokemonDataGeneralType } from './_pokemonGeneralDataType';

const initialState: _pokemonDataGeneralType = {
    name: '',
};

export const _pokemonDataGeneralSlice = createSlice({
    name: 'pokemonGeneralData',
    initialState,
    reducers: {
        getPokemonDataName() { },
        setPokemonDataName(state, action) {
            const response = action.payload;
            state.name = response;
        },
    },
});

export const { getPokemonDataName, setPokemonDataName } = _pokemonDataGeneralSlice.actions;

export default _pokemonDataGeneralSlice.reducer;
