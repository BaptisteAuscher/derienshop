<template>
  <NavbarDesktop v-if="windowWidth >= 1050"></NavbarDesktop>
  <NavbarPhone v-else></NavbarPhone>
  <router-view />
</template>

<script>
import NavbarDesktop from "@/components/Navbar/NavbarDesktop";
import NavbarPhone from "@/components/Navbar/NavbarPhone";

import { mapGetters } from "vuex";
export default {
  components: {
    NavbarDesktop,
    NavbarPhone
  },
  methods: {
    commitWindowWidth: function() {
      this.$store.commit("setWindowWidth");
    }
  },
  created() {
    window.addEventListener("resize", this.commitWindowWidth);
  },
  unmount() {
    window.removeEventListener("resize", this.commitWindowWidth);
  },
  computed: {
    ...mapGetters({
      windowWidth: "getWindowWidth"
    })
  }
};
</script>

<style lang="scss">
@import "@/scss/default.scss";
@import "@/scss/__variables.scss";

#app {
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  min-height: 98vh;

  //background: linear-gradient($pink -30%, $white 40%);
}
</style>
