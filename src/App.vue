<template>
  <div id="app">
    <div id="">
      <NavBar/>
     
    </div>
    <router-view/>
  </div>
</template>
<script>
import NavBar from '@/components/NavBar.vue';
import firebase from 'firebase';

export default {
  name: 'App',
  components:{
    NavBar,
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user)=>{
      if (user) {
        var uid= user.uid;

        console.log(uid);
        this.$store.dispatch('dataUser', user);
      } else {

        this.$store.dispatch('dataUser', null);
        console.log('cierre final');
        
      }
    });
    this.$store.dispatch('datosProductos');


  },
}
</script>

<style>

</style>