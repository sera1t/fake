import { createApp } from 'vue'
import '@/assets/styles/canvas.css'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import mitt from 'mitt';

const emitter = mitt();
const app = createApp(App);

app.config.globalProperties.emitter = emitter;

app.mount('#app')