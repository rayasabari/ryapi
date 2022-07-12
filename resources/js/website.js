import Vue from 'vue'
import axios from 'axios'
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';

// Notify Init Customization
Notify.init({
  useFontAwesome: true,
  opacity: 0.85,
  fontFamily: 'poppins',
})

Confirm.init({
  borderRadius: '8px',
  titleColor: '#2F95E8',
  okButtonBackground: '#2F95E8',
  fontFamily: 'poppins',
})

Vue.component('welcome-dashboard', require('./components/WelcomeDashboard.vue').default);

// Pages 
Vue.component('pages-index', require('./components/Pages/Index.vue').default);

Vue.prototype.$axios = axios;
Vue.prototype.Notify = Notify;
Vue.prototype.Confirm = Confirm;

// creating a vue instance
const app = new Vue({
  el: '#app'
});