<template>
  <div>
    <b-navbar toggleable="xl" type="dark" variant="success">
      <b-navbar-brand href="#">OTTO KLAUS</b-navbar-brand>
      <div></div>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item :to="{ name: 'Login' }">Inicio</b-nav-item>

        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit"
              >Search</b-button
            >
          </b-nav-form>

        

          <b-nav-item-dropdown right v-if="enviandoUser">
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item
              :to="{ name: 'Administracion' }"
              @click="singOut"
              :disabled="existeUser"
              >Sing Out</b-dropdown-item
            >
            <b-dropdown-item :disabled="existeUser" :to="{ name: 'Administracion' }">Administracion</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import firebase from 'firebase';
import { mapGetters } from "vuex";
export default {
  name: "NavBar",
  computed: {
    ...mapGetters(["enviandoUser"]),

    existeUser() {
      return !this.enviandoUser.uid.length > 0;
    },
  },
  methods: {

    singOut() {
      firebase
        .auth()
        .signOut()
        .then( () => {
          console.log("cerro la sesion");
          this.$router.push({name: 'Login'});
        })
        .catch( (error) => {
          console.error(error);
        });
    },
  }, // An error happened.
};
</script>

<style lang="scss" scoped>
</style>