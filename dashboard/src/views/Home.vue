<template>
  <div class="home">
      <h1 v-if="user">Connecté en tant que {{user.firstname + ' ' + user.lastname}}</h1>
      <button @click="deconnect">SE DECONNECTER</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    computed: {
      ...mapGetters(['user'])
    },
    methods: {
      deconnect: function () {
        this.$store.commit("SETJWT", null);
        this.$store.commit("SETUSER", null);
        localStorage.removeItem("jwt");
        this.$router.push({
          name: "Connexion"
        })
      }
    }
}
</script>

<style lang="scss">
.home {
  button {
    margin-left: 50px;
    padding: 10px 20px;
    font-size: 15px;
    color: white;
    background-color: #f33e5c;
    outline: none;
    border: none;
    font-weight: 800;
    cursor: pointer;
  }
}
</style>
