<template>
  <div class="">
    <b-container class="my-5">
      <h1>Toy Shop Otto-Klaus</h1>

      <b-row>
        <b-col><img alt="juguete" src="../assets/logojuguetes.jpg" /></b-col>
        <b-col class="my-5">
          <b-form
            @submit.prevent="loginUser"
            @reset="onReset"
            v-if="showFormReg"
          >
            <b-form-group
              id="input-group-1"
              label="Correo Electronico:"
              label-for="input-1"
              description="Valida tu acceso con GMAIL"
            >
              <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                placeholder="Ingresa tu correo electronico"
                required
              ></b-form-input>
            </b-form-group>

            <b-button type="submit" variant="primary">Ingresar con tu cuenta GMAIL</b-button>
          </b-form></b-col
        >
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import firebase from "firebase";

export default {
  name: "Login",

  data() {
    return {
      form: {
        email: "",
        password: "",
      },

      showFormReg: true,
    };
  },
  methods: {
    loginUser() {
      if (this.form.email) {
        var provider = new firebase.auth.GoogleAuthProvider();
        
        firebase
          .auth()
          .signInWithPopup(provider)
          .then( (result) =>{
           
            var user = result.user;

            console.log(user);
            console.log("login realizado");
            // ...
            this.$router.push({name: 'Administracion'});
          })
          
          .catch((error) => {
            // Handle Errors here.
            console.log(error.code);
            console.log(error.message);
            console.log(error.email);
            console.log(error.credential);
          });
      } else {
        console.log("nose puede logear");
      }
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.password = "";

      // Trick to reset/clear native browser form validation state
      this.showFormReg = false;
      this.$nextTick(() => {
        this.showFormReg = true;
      });
    },
  },
  components: {},

  computed: {
  
  },
};
</script>