/* eslint-disable prettier/prettier */

import { createSlice } from '@reduxjs/toolkit';
import { _pokemonDataType } from './_pokemonDataType';

const initialState: _pokemonDataType = {
    abilities: [
        {
            name: '',
            url: '',
        },
    ],
    moves: [
        {
            name: '',
            url: '',
        },
    ],
    stats: [
        {
            base_stat: 0,
            effort: 0,

            stat: {
                name: '',
                url: '',
            },
        },
    ],
    sprite: '',
    isLoading: false,
};

export const _pokemonDataSlice = createSlice({
    name: 'pokemonData',
    initialState,
    reducers: {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        getPokemonData(state, action) { },
        setPokemonData(state, action) {
            const response = action.payload.data;
            //  console.log('El response de Data es..', response);
            state.abilities = response.abilities;
            //   console.log('El response de Data abilities es..', state.abilities);

            state.moves = response.moves;
            //   console.log('El response de Data moves es..', state.moves);

            state.stats = response.stats;
            //  console.log('El response de Data stats es..', state.stats);

            state.sprite = response.sprites.front_default;
            //  console.log('El response de Data sprite es..', state.stats);

            state.isLoading = true;
        },
    },
});

export const { getPokemonData, setPokemonData } = _pokemonDataSlice.actions;

export default _pokemonDataSlice.reducer;
