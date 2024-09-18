<template>
    <div ref="chatRef" class="flex-1 overflow-y-auto p-4">
        <div class="flex flex-col space-y-2">
            <!-- Messages go here -->
            <ChatBubble v-for="message in messages" :key="message.id" v-bind="message" />
            <!-- :its-mine="message.itsMine"
                :message="message.message"
                :image="message.image" -->
        </div>
    </div>
</template>

<script setup lang="ts">
import type { ChatMessage } from '@/interfaces/chat-message.interface';

import ChatBubble from './ChatBubble.vue';
import { ref, nextTick, watchEffect } from 'vue';

interface Props {
    messages: ChatMessage[];
}

interface Props {
    messages: ChatMessage[];
}

const { messages } = defineProps<Props>();

const chatRef = ref<HTMLDivElement | null>(null);

// Estar pendiente de los cambios en los props.
watchEffect(async () => {
    console.log('Mensajes: ' + messages.length);
    await nextTick();
    chatRef.value?.scrollTo({
        top: chatRef.value.scrollHeight,
        behavior: 'smooth',
    });
});
</script>