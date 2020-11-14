<template>
  <Navbar></Navbar>
  <router-view />
</template>

<script>
import Navbar from '@/components/Navbar/Navbar'
export default {
  components: {
    Navbar
  },
  methods : {
    commitWindowWidth: function () {
      this.$store.commit("setWindowWidth");
    }
  },
  created() {
    window.addEventListener("resize", this.commitWindowWidth);
  },
  unmount() {
    window.removeEventListener("resize", this.commitWindowWidth);
  },
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
}
</style>
