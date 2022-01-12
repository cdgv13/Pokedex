/* eslint-disable prettier/prettier */
import axios from 'axios';

const _pokemonNameRequest = async (message: any) =>
    axios.get<any>(
        'https://pokeapi.co/api/v2/pokemon/' + message,
    );

export default _pokemonNameRequest;
