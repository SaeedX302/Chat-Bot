<template>
    <div class="chat-container">
        <div class="chat-header">ChatBot</div>
        <div class="chat-messages">
            <div v-for="(msg, index) in messages" :key="index" :class="msg.sender">
                {{ msg.text }}
            </div>
        </div>
        <div class="chat-input">
            <input v-model="input" placeholder="Type a message..." />
            <button @click="sendMessage">Send</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            messages: [],
            input: '',
        };
    },
    methods: {
        sendMessage() {
            this.messages.push({ text: this.input, sender: 'user' });
            this.input = '';
            setTimeout(() => {
                this.messages.push({ text: 'Bot Reply', sender: 'bot' });
            }, 1000);
        },
    },
};
</script>

<style scoped>
/* Add Vue-specific styling here */
</style>
