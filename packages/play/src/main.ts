import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import WElement from "Wannaer-element";
// createApp(App).mount('#app')
createApp(App).use(WElement).mount('#app')
