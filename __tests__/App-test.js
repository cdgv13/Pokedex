/* eslint-disable prettier/prettier */
import React from 'react';
import { render } from '@testing-library/react-native';
import _pokedexData from '../Components/PokemonHome/_pokemonData';
import { Provider } from 'react-redux';

let component;

describe('<_pokemonData />', () => {
  component = render(<Provider><_pokedexData /></Provider>);
  it('Rederiza', () => {
    expect(component.getByTestId('map-abilities')).toBeDefined();

  }
  );
});
