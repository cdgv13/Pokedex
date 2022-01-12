/* eslint-disable prettier/prettier */
import _pokemonNameRequest from './_pokemonNameRequest';
import { put, SagaReturnType, call } from 'redux-saga/effects';
import { setPokemonName } from './_pokemonNameSlice';
type PokemonNameGet = SagaReturnType<typeof _pokemonNameRequest>;

export function* handlerGetPokemonName() {
    // let message = '?offset=0&limit=1118';
    let message = '?offset=0&limit=1118';
    //  let params = '';
    try {
        const responseApi: PokemonNameGet = yield call(
            _pokemonNameRequest,
            message,
        );
        const { data } = responseApi;
        // console.log('Esto es data PokemonName', data);
        yield put(setPokemonName({ data }));
    } catch (error) {
        console.log('error sagas PokedexName, error');
    }
}
