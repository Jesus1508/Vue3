import { GameStatus } from '@pokemon/interfaces';
import { describe, expect, test } from 'vitest';

describe('GameStatus enum', () => {
    test('should have a value of "playing', () => {
        expect(GameStatus.Playing).toBe('playing');
    });

    test('should have a value of "playing', () => {
        expect(GameStatus.Won).toBe('won');
    });

    test('should have a value of "playing', () => {
        expect(GameStatus.Lost).toBe('lost');
    });
});
