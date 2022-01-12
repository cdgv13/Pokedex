/* eslint-disable prettier/prettier */
import { put, SagaReturnType, call } from 'redux-saga/effects';
import _pokemonDataRequest from './_pokemonDataRequest';
import { setPokemonData } from './_pokemonDataSlice';
type PokemonDataGet = SagaReturnType<typeof _pokemonDataRequest>;

export function* handlerGetPokemonData(action: any) {
    const name = action.payload.name;
    let message = name;
    //  let params = '';
    try {
        const responseApi: PokemonDataGet = yield call(
            _pokemonDataRequest,
            message,
        );
        const { data } = responseApi;
        //console.log("Esto es data PokemonData", data);
        yield put(setPokemonData({ data }));
    } catch (error) {
        console.log('error sagas PokemonData, error');
    }
}
