<template>
  <div class="">
    <h1 class="text-center mt-5">Administracion de inventario</h1>
    <b-button v-b-modal.my-modal class="btn-danger ml-5"
      >Agregar Producto</b-button
    >
    <b-modal
      id="my-modal"
      title="Agregando Nuevo Producto"
      @ok="agregandoProducto"
    >
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
      <template #modal-ok>
              <span>Guardar Producto</span>
            </template>
    </b-modal>

    <table class="table my-4 container">
      <thead>
        <tr>
        <th>#</th>
          <th scope="col">Codigo</th>
          <th scope="col">Nombre</th>
          <th scope="col">Stock</th>
          <th scope="col">Precio</th>
          <th scope="col">Eliminar</th>
          <th scope="col">Editar</th>
        </tr>
      </thead>
      <tbody v-for="(item, index) in enviandoProductos" :key="index">
        <tr>
        <td>{{index+1}}</td>
          <td>{{ item.codigo }}</td>
          <td>{{ item.nombre }}</td>
          <td>{{ item.stock }}</td>
          <td>{{ item.precio }}</td>
          <td>
            <button @click="eliminando(item.idDoc)" class="btn btn-warning">
              Eliminar
            </button>
          </td>
          <td>
            <button
          
              @click="editandoProducto(item.idDoc)"
              class="btn btn-info"
            >
              Editar
            </button>
          </td>
          <!--modal editar-->
          <b-modal id="modal-1" title="Editar Producto">
        
            <template #modal-ok>
              <span>Actualizar</span>
            </template>
          </b-modal>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import firebase from "firebase";

export default {
  name: "Administracion",
  data() {
    return {
      codigo: "",
      nombre: "",
      stock: "",
      precio: "",
    };
  },
  computed: {
    ...mapGetters(["enviandoProductos"]),
  },

  methods: {
    agregandoProducto() {
      if (this.codigo.length > 4 && this.nombre && this.stock && this.precio) {
        firebase
          .firestore()
          .collection("productos")
          .add({
            codigo: this.codigo,
            nombre: this.nombre,
            stock: this.stock,
            precio: this.precio,
          })
          .then((resp) => console.log(resp))
          .catch((error) => console.error(error));
      } else {
        console.log("no se puede agregar");
      }
    },

    eliminando(id) {
      this.$store.dispatch("borrandoProducto", id);
    },

    editandoProducto(id) {
      this.$router.push({name: 'Editando', params: {id: id}})
    },
  },
};
</script>