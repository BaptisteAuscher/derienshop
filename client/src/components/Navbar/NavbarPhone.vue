<template>
  <div>
    <div class="navbar">
      <div class="navbar__logo">
        <router-link to="/">
          <img src="@/assets/logo-grey.png" alt="derien logo" />
        </router-link>
      </div>

      <div class="navbar__icons">
        <router-link to="/cart" style="position: relative"> 
          <img src="@/assets/cart.svg" alt="cart icon" />
          <div class="notif" v-if="cart.items.length > 0">

          </div>
        </router-link>
        <img
          src="@/assets/burger.svg"
          alt="burger icon"
          @click="show = !show" class="burger"
        />
      </div>
    </div>
    <transition name="dropdown">
      <div class="menu" v-show="show">
        <div class="menu__left">
          <router-link to="/">SHOP</router-link>
          <router-link to="/contact">CONTACT</router-link>
        </div>

        <div class="menu__right">
          <router-link to="/">CONNEXION</router-link>
          <router-link to="/">INSCRIPTION</router-link>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      show: false
    };
  },
  computed: {
    ...mapGetters({
      cart: "getCart"
    })
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/__variables.scss";
@import "@/scss/default.scss";

.navbar {
  display: flex;
  padding: 30px 0;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  &__logo {
    & img {
      height: 40px;
    }
  }

  &__icons {
    display: flex;
    & a {
      display: block;
    }
    img.burger {
      margin-left: 15px;
      width: 30px;
      height: 30px;
    }

    .notif {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: $pink;
      position: absolute;
      top: -10px;
      right: -10px;  
    }
  }
}

.menu {
  background-color: $grey;
  font-family: "Work Sans";
  font-weight: 800;
  font-size: 18px;
  overflow: hidden;

  display: flex;
  justify-content: space-around;
  padding: 20px;
  line-height: 40px;

  &__left,
  &__right {
    display: flex;
    flex-direction: column;
  }

  &__right {
    align-items: end;
  }

  & a {
    color: $white;
  }
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition: opacity 0.2s, transform 0.2s;
  transform-origin: 0 0;
}

.dropdown-enter-active {
  opacity: 0;
  transform: scaleY(0);
}

.dropdown-enter-to {
  opacity: 1;
  transform: scaleY(1);
}

.dropdown-leave {
  transform: scaleY(1);
  opacity: 1;
}

.dropdown-leave-to {
  opacity: 0;
  transform: scaleY(0);
}
</style>
