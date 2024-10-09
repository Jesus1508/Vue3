import PokemonOptions from '@/modules/pokemon/components/PokemonOptions.vue';
import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';

const options = [
    { id: 1, name: 'Bulbasur' },
    { id: 2, name: 'Ivysur' },
    { id: 3, name: 'Venusur' },
];

describe('<PokemonOptions />', () => {
    test('should render buttons with correct text', () => {
        const wrapper = mount(PokemonOptions, {
            props: { options, blockSelection: false, correctAnswer: 1 },
        });

        const buttons = wrapper.findAll('button');
        expect(buttons.length).toBe(options.length);

        buttons.forEach((button, index) => {
            // expect(true).toBeFalsy();
            expect(button.attributes('class')).toBe(
                'capitalize disabled:shados-none disabled:bg-gray-100',
            );
            expect(button.text()).toBe(options[index].name);
        });
    });

    test('should emit selectedOption wvent when a button is clicked', async () => {
        const wrapper = mount(PokemonOptions, {
            props: { options, blockSelection: false, correctAnswer: 1 },
        });

        const [b1, b2, b3] = wrapper.findAll('button');

        await b1.trigger('click');
        await b2.trigger('click');
        await b3.trigger('click');

        // expect(wrapper.emitted('selectedOption'));
        expect(wrapper.emitted().selectedOption).toBeTruthy();
        expect(wrapper.emitted().selectedOption[0]).toEqual([1]);
        expect(wrapper.emitted().selectedOption[1]).toEqual([2]);
        expect(wrapper.emitted().selectedOption[2]).toEqual([3]);
    });

    test('should desabled buttons when blockSelection prop is true', () => {
        const wrapper = mount(PokemonOptions, {
            props: { options, blockSelection: true, correctAnswer: 1 },
        });

        const buttons = wrapper.findAll('button');
        buttons.forEach((button) => {
            // console.log(button.attributes());
            // expect(button.attributes('disabled')).toBeTruthy();
            const attributes = Object.keys(button.attributes());
            expect(attributes).toContain('disabled');
        });
    });

    test('should apply correct styling to buttons based on correct/incorrect answer', () => {
        const correctAnswer = 2;
        const wrapper = mount(PokemonOptions, {
            props: { options, blockSelection: true, correctAnswer },
        });

        const buttons = wrapper.findAll('button');

        buttons.forEach((button, index) => {
            if (options[index].id === correctAnswer) {
                expect(button.classes()).toContain('correct');
            } else {
                expect(button.classes()).toContain('incorrect');
            }
        });
    });
});
