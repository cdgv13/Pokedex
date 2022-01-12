/* eslint-disable prettier/prettier */
interface ability {
    name: string,
    url: string
}
interface moves {
    name: string,
    url: string
}

interface stat {
    name: string,
    url: string
}
interface stats {
    base_stat: 0,
    effort: 0,
    stat: stat
}
export type _pokemonDataType = {
    abilities: [
        ability
    ],
    moves: [
        moves
    ],
    stats: [
        stats
    ],
    sprite: '',
    isLoading: boolean
};
