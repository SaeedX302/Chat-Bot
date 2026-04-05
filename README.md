##  `It’s actually hilarious looking back at how I used to code in 2024. This repository is completely obsolete now, but I’m keeping it alive as a personal memory of where I started.`


## 🤖 TSun Multi-Framework ChatBot

Creating a chatbot website with support for various frameworks and languages can be achieved by integrating them effectively. Here's how you can build a chatbot using **HTML, CSS, JavaScript, React (JSX/TSX), Vue, Svelte, and CoffeeScript**.

The architecture allows the frontend to dynamically adapt while the logic remains centralized in JavaScript.

---

### 📂 Folder Structure

```plaintext
chatbot-project/
├── public/
│   └── index.html         # Entry HTML file
├── src/
│   ├── components/
│   │   ├── ChatBot.jsx    # React Component
│   │   ├── ChatBot.tsx    # TypeScript Component
│   │   ├── ChatBot.vue    # Vue Component
│   │   ├── ChatBot.svelte # Svelte Component
│   │   └── ChatBot.coffee # CoffeeScript Component
│   └── App.js             # Main JavaScript Logic
├── styles/
│   └── styles.css         # Shared CSS
├── package.json           # Dependencies
└── README.md
```

---

### 🚀 Implementation Steps

#### Step 1: HTML Entry Point (`index.html`)
This file loads the chatbot and adapts the frontend framework based on selection.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TSun ChatBot</title>
    <link rel="stylesheet" href="./styles/styles.css">
</head>
<body>
    <div id="app"></div>
    <script src="./src/App.js" type="module"></script>
</body>
</html>
```

#### Step 2: Shared CSS (`styles.css`)
```css
body {
    font-family: Arial, sans-serif;
    margin: 0;
    background-color: #121212;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.chat-container {
    width: 100%;
    max-width: 400px;
    background: #1e1e1e;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.chat-header {
    padding: 10px;
    background: #333;
    color: white;
    text-align: center;
    font-weight: bold;
}

.chat-messages {
    padding: 10px;
    height: 300px;
    overflow-y: auto;
    background: #222;
}

.chat-input {
    display: flex;
    border-top: 1px solid #444;
}

.chat-input input {
    flex: 1;
    padding: 10px;
    border: none;
    background: #222;
    color: white;
}

.chat-input button {
    padding: 10px;
    background: #444;
    color: white;
    border: none;
    cursor: pointer;
}
```

#### Step 3: Main Logic (`App.js`)
```javascript
import ReactChatBot from './components/ChatBot.jsx';
import VueChatBot from './components/ChatBot.vue';
import SvelteChatBot from './components/ChatBot.svelte';

const appDiv = document.getElementById('app');

// Switch between frameworks here
ReactChatBot(appDiv);
// VueChatBot(appDiv);
// SvelteChatBot(appDiv);
```

#### Step 4: React Component (`ChatBot.jsx`)
```jsx
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const ChatBot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const sendMessage = () => {
        setMessages([...messages, { text: input, sender: 'user' }]);
        setInput('');
        setTimeout(() => {
            setMessages(prev => [...prev, { text: 'Bot Reply', sender: 'bot' }]);
        }, 1000);
    };

    return (
        <div className="chat-container">
            <div className="chat-header">TSun ChatBot</div>
            <div className="chat-messages">
                {messages.map((msg, index) => (
                    <div key={index} className={msg.sender}>{msg.text}</div>
                ))}
            </div>
            <div className="chat-input">
                <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type..." />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
};

const ReactChatBot = (container) => ReactDOM.render(<ChatBot />, container);
export default ReactChatBot;
```

#### Step 5: Vue Component (`ChatBot.vue`)
```vue
<template>
    <div class="chat-container">
        <div class="chat-header">TSun ChatBot</div>
        <div class="chat-messages">
            <div v-for="(msg, index) in messages" :key="index" :class="msg.sender">
                {{ msg.text }}
            </div>
        </div>
        <div class="chat-input">
            <input v-model="input" @keyup.enter="sendMessage" />
            <button @click="sendMessage">Send</button>
        </div>
    </div>
</template>

<script>
export default {
    data() { return { messages: [], input: '' }; },
    methods: {
        sendMessage() {
            this.messages.push({ text: this.input, sender: 'user' });
            this.input = '';
            setTimeout(() => this.messages.push({ text: 'Bot Reply', sender: 'bot' }), 1000);
        }
    }
};
</script>
```

#### Step 6: Svelte Component (`ChatBot.svelte`)
```svelte
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
    <div class="chat-header">TSun ChatBot</div>
    <div class="chat-messages">
        {#each messages as msg}
            <div class={msg.sender}>{msg.text}</div>
        {/each}
    </div>
    <div class="chat-input">
        <input bind:value={input} />
        <button on:click={sendMessage}>Send</button>
    </div>
</div>
```

#### Step 7: CoffeeScript Logic (`ChatBot.coffee`)
```coffeescript
messages = []
input = ''

sendMessage = ->
    messages.push({ text: input, sender: 'user' })
    input = ''
    setTimeout ->
        messages.push({ text: 'Bot Reply', sender: 'bot' })
    , 1000
```

---

### 🛠 Next Steps
1. **Bundling:** Use **Vite** or Webpack for multi-framework support.
2. **AI Integration:** Connect with OpenAI or custom APIs.
3. **Deployment:** Deploy on **Vercel** or Render.

---

### 📝 Changelog
| Date | Version | Changes | Author |
| :--- | :--- | :--- | :--- |
| 2026-04-05 | v1.0.0 | Initial modular structure for multi-framework support. | 𝙎ค૯𝙀𝘿✘🫀 |

---

### 🔗 My Portfolio
[Linktree Portfolio](https://linktr.ee/saeedxdie) | [Gravatar Profile](https://gravatar.com/cheerfuld27b01881a)

**Connect with me:**
[GitHub](https://github.com/SaeedX302) | [TikTok](https://www.tiktok.com/@saeedxdie)
