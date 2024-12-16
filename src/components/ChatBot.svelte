<script>
    let messages = [];
    let input = '';

    function sendMessage() {
        messages = [...messages, { text: input, sender: 'user' }];
        input = '';
        setTimeout(() => {
            messages = [...messages, { text: 'Bot Reply', sender: 'bot' }];
        }, 1000);
    }
</script>

<div class="chat-container">
    <div class="chat-header">ChatBot</div>
    <div class="chat-messages">
        {#each messages as msg, i}
            <div class={msg.sender === 'user' ? 'user-message' : 'bot-message'}>{msg.text}</div>
        {/each}
    </div>
    <div class="chat-input">
        <input bind:value={input} placeholder="Type a message..." />
        <button on:click={sendMessage}>Send</button>
    </div>
</div>

<style>
/* Add Svelte-specific styling */
</style>
