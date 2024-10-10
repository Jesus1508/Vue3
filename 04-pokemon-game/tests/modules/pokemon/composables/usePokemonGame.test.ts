import { GameStatus } from '@pokemon/interfaces';
import { usePokemonGame } from '@/modules/pokemon/composables/usePokemonGame';
import { withSetup } from '../../../utils/with-setup';
import { describe, expect, test, vi } from 'vitest';
import { flushPromises } from '@vue/test-utils';
import MocAdapter from 'axios-mock-adapter';
import { pokemonApi } from '@/modules/pokemon/api/pokemonApi';
import { pokemonListFake } from '../../../modules/data/fake.pokemons';
import confetti from 'canvas-confetti';

const mockPokemonApi = new MocAdapter(pokemonApi);

mockPokemonApi.onGet('/?limit=151').reply(200, {
    results: pokemonListFake,
});

vi.mock('canvas-confetti', () => ({
    default: vi.fn(),
}));

describe('usePokemonGame', () => {
    test('should initialize with the correct default values', async () => {
        const [results, app] = withSetup(usePokemonGame);

        expect(results.gameStatus.value).toBe(GameStatus.Playing);
        expect(results.isLoading.value).toBe(true);
        expect(results.pokemonOptions.value).toEqual([]);
        expect(results.randomPokemon.value).toBe(undefined);

        await flushPromises();

        expect(results.isLoading.value).toBe(false);
        expect(results.pokemonOptions.value.length).toBe(4);
        expect(results.randomPokemon.value).toEqual({
            id: expect.any(Number),
            name: expect.any(String),
        });
        // expect()
    });

    test('should correctly handli getNextRound', async () => {
        const [results] = withSetup(usePokemonGame);
        await flushPromises();

        results.gameStatus.value = GameStatus.Won;
        //Estimulo
        results.getNextRound(5);

        expect(results.gameStatus.value).toBe(GameStatus.Playing);
        expect(results.pokemonOptions.value).toHaveLength(5);
    });

    test('should correctly handli getNextRound and return different pokemons', async () => {
        const [results] = withSetup(usePokemonGame);

        await flushPromises();

        const firstOptions = [...results.pokemonOptions.value].map((p) => p.name);

        //Estimulo
        results.getNextRound(4);

        const secondOptions = [...results.pokemonOptions.value];

        secondOptions.forEach((pokemon) => {
            expect(firstOptions).not.toContain(pokemon.name);
        });
    });

    test('should correctly handle a incorrect answer', async () => {
        const [results] = withSetup(usePokemonGame);
        await flushPromises();

        const { checkAnswer, gameStatus } = results;

        expect(gameStatus.value).toBe(GameStatus.Playing);
        checkAnswer(10000000);
        expect(gameStatus.value).toBe(GameStatus.Lost);
    });

    test('should correctly handle a correcty answer', async () => {
        const [results] = withSetup(usePokemonGame);
        await flushPromises();

        const { checkAnswer, gameStatus, randomPokemon } = results;

        expect(gameStatus.value).toBe(GameStatus.Playing);

        checkAnswer(randomPokemon.value.id);

        expect(confetti).toHaveBeenCalled();
        expect(confetti).toHaveBeenCalledWith({
            particleCount: 300,
            spread: 150,
            origin: { y: 0.6 },
        });

        expect(gameStatus.value).toBe(GameStatus.Won);
    });
});
