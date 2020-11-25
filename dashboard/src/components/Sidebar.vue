<template>
  <div class="nav">
      <div class="nav__logo">
          <router-link to="/">LOGO</router-link>
      </div>
      <div class="nav__products">
          <router-link to="/">PRODUCTS</router-link> 
      </div>
      <div class="nav__orders">
          <router-link to="/">ORDERS</router-link> 
      </div>
      <div class="nav__customers">
          <router-link to="/">CUSTOMER</router-link> 
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.nav {
    position: fixed;
    background: #303030;
    display: flex;
    flex-direction: column;
    width: 100px;
    height: 100vh;
    
    & div {
        height: 100px;

        & a {
            color: white;
        }
    }


}
</style>