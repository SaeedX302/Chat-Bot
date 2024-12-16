import ReactChatBot from './components/ChatBot.jsx';
import VueChatBot from './components/ChatBot.vue';
import SvelteChatBot from './components/ChatBot.svelte';

// Dynamically render the framework you choose
const appDiv = document.getElementById('app');

// Example: React
ReactChatBot(appDiv);

// Uncomment one of the following lines for Vue or Svelte
// VueChatBot(appDiv);
// SvelteChatBot(appDiv);
