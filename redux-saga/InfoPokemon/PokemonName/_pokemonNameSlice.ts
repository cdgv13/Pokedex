/* eslint-disable prettier/prettier */

import { createSlice } from '@reduxjs/toolkit';
import { _pokemonNameType } from './_pokemonNameType';

const initialState: _pokemonNameType = {
    results: [
        {
            name: '',
            url: '',
        },
    ],
};

export const _pokemonNameSlice = createSlice({
    name: 'pokemonName',
    initialState,
    reducers: {
        getPokemonName() { },
        setPokemonName(state, action) {
            const response = action.payload.data;
            state.results = response.results;
        },
    },
});

export const { getPokemonName, setPokemonName } = _pokemonNameSlice.actions;

export default _pokemonNameSlice.reducer;
