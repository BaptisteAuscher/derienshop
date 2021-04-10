<template>
    <div class="app">
        <Sidebar v-if="jwt"></Sidebar>
        <div class="container">
          <router-view />
        </div>
    </div>
</template>

<script>
import Sidebar from '@/components/Sidebar';
import { mapGetters} from "vuex";

export default {
  components: {
    Sidebar
  },
  created: function () {
      if (localStorage.user && localStorage.jwt) {
        let user = JSON.parse(localStorage.user);
        let jwt = localStorage.jwt;
        this.$store.commit("SETJWT", jwt);
        this.$store.commit("SETUSER", user);
      }

      if (!this.jwt) {
        this.$router.push({
          name: "Connexion"
        })
      }
  },
  computed: {
    ...mapGetters(['jwt'])
  }
}
</script>

<style lang="scss">
@import '@/scss/default.scss';

#app {
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  & .app {
    width: 100vw;
    height: 100vh;
    display: flex;
    overflow: hidden;

    & .container {
      flex: 1;
      overflow-y: auto;
    }
  }
}
</style>

