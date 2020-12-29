import Vue from "vue";
import App from "./App.vue";
import {
  ValidationProvider,
  ValidationObserver,
} from "vee-validate/dist/vee-validate.full";

Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
