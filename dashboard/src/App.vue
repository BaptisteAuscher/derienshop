<template>
  <Sidebar></Sidebar>
  <router-view />
</template>

<script>
import Sidebar from '@/components/Sidebar';
export default {
  components: {
    Sidebar
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
}
</style>

