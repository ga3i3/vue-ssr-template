import { createApp } from './app';
const { app, router } = createApp({ state: window.__INITIAL_STATE__ });

// import './assets/style.scss';
import 'vuetify/dist/vuetify.css'

router.onReady(() => {
  app.$mount('#app');
});