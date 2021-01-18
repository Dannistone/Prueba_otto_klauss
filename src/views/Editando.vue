<template>
  <div>
    editando a :
    <h1>{{ id }}</h1>

    <b-form-group id="input-group-2" label="codigo:" label-for="input-2">
      <b-form-input
        id="input-2"
        v-model="codigo"
        placeholder="Ingrese codigo del producto"
        required
      ></b-form-input>
    </b-form-group>
    <b-form-group id="input-group-2" label="Nombre:" label-for="input-2">
      <b-form-input
        id="input-3"
        v-model="nombre"
        placeholder="Ingrese nombre del producto"
        required
      ></b-form-input>
    </b-form-group>
    <b-form-group id="input-group-2" label="stock:" label-for="input-2">
      <b-form-input
        id="input-4"
        v-model="stock"
        placeholder="Ingrese Stock del producto"
        required
      ></b-form-input>
    </b-form-group>
    <b-form-group id="input-group-2" label="precio:" label-for="input-2">
      <b-form-input
        id="input-5"
        v-model="precio"
        placeholder="Ingrese Precio del producto"
        required
      ></b-form-input>
    </b-form-group>
  </div>
</template>

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
//firebase
import firebase from 'firebase';
import { firebaseConfig } from "./config/firebaseConfig.js";


// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

 // Initialize Firebase
firebase.initializeApp(firebaseConfig);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
