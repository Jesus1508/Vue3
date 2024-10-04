import ChatMessages from '@/components/chat/ChatMessages.vue';
import type { ChatMessage } from '@/interfaces/chat-message.interface';
import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';

const messages: ChatMessage[] = [
    { id: 1, message: 'Hola', itsMine: true },
    { id: 2, message: 'Mundo', itsMine: false, image: 'http://hola-mundo.jpg' },
];
describe('<ChatMessages />', () => {
    const wrapper = mount(ChatMessages, {
        props: { messages },
    });
    test('renders chat messages correctly', () => {
        const chatBubbles = wrapper.findAllComponents({ name: 'ChatBubble' });
        expect(chatBubbles.length).toBe(messages.length);
    });

    test('scrolls down to the bottom after messages update', async () => {
        await wrapper.setProps({
            messages: [...messages, { id: 3, message: 'Hey', itsMine: true }],
        });

        await new Promise((r) => setTimeout(r, 120));
    });
});
