import type { Pokemon } from '@/modules/pokemon/interfaces';
import { describe, expect, test } from 'vitest';

describe('Pokemon interface', () => {
    const pokemon: Pokemon = { id: 1, name: 'bulbasur' };

    test('should have and id property of type number', () => {
        expect(pokemon.id).toEqual(expect.any(Number));
    });

    test('should have and name property of type string', () => {
        expect(pokemon.name).toEqual(expect.any(String));
    });
});
