<template>
  <transition name="fade">
    <Message v-if="message.message != ''"></Message>
  </transition>
  <NavbarDesktop v-if="windowWidth >= 1050"></NavbarDesktop>
  <NavbarPhone v-else></NavbarPhone>
  <router-view />
</template>

<script>
import NavbarDesktop from "@/components/Navbar/NavbarDesktop";
import NavbarPhone from "@/components/Navbar/NavbarPhone";
import Message from "@/components/Message";

import { mapGetters } from "vuex";
export default {
  components: {
    NavbarDesktop,
    NavbarPhone,
    Message
  },
  methods: {
    commitWindowWidth: function() {
      this.$store.commit("ui/setWindowWidth");
    }
  },
  created() {
    window.addEventListener("resize", this.commitWindowWidth);
    this.$store.dispatch("fetchCart");
  },
  unmount() {
    window.removeEventListener("resize", this.commitWindowWidth);
  },
  computed: {
    ...mapGetters({
      windowWidth: "ui/getWindowWidth",
      message: "ui/getMessage"
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

  position: relative;

  min-height: 98vh;

  //background: linear-gradient($pink -30%, $white 40%);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
  opacity: 1;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}


</style>
