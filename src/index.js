import Vue from 'vue';
import App from './app';

import runtime from 'serviceworker-webpack-plugin/lib/runtime';

if ('serviceWorker' in navigator) {
  runtime.register();
}

new Vue({
  el: '#app',
  render: h => h(App)
});
