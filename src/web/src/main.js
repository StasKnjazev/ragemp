"use trict";

// INPORTS

import Vue from 'vue';
import App from './App.vue';

// CODE

Vue.config.productionTip = false;

let app2 = new Vue({
  render: h => h(App),
}).$mount('#app');

global.app = app2.$children[0];
export default app2;