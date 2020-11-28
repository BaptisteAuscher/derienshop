<template>
    <div class="app">
        <Sidebar></Sidebar>
        <div class="container">
          <router-view />
        </div>
    </div>
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

