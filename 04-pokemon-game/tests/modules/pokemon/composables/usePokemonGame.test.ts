import { usePokemonGame } from '@/modules/pokemon/composables/usePokemonGame';
import { withSetup } from '../../../utils/with-setup';
import { describe, expect, test } from 'vitest';

describe('usePokemonGame', () => {
    test('should initialize with the correct default values', () => {
        // const { checkAnswer, gameStatus, getNextRound, isLoading, pokemonOptions, randomPokemon } =
        //     usePokemonGame();

        const [results, app] = withSetup(usePokemonGame);
    });
});
