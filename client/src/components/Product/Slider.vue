<template>
  <aside>
    <section class="container" :style="`width: ${windowWidth < 1240 ? 350 : 650}px`">
      <div class="container__img" :style="`transform: translateX(${-(windowWidth < 1240 ? 350 : 650) * id}px);`">
        <img  v-for="(image, index) in images" :key="index" :src="image.link" :alt="image.alt" :style="`width: ${windowWidth < 1240 ? 350 : 650}px ; height: ${windowWidth < 1240 ? 350 : 650}px`" />
      </div>
    </section>
    <section class="icons">
      <img  v-for="(image, index) in images" :key="index" :src="image.link" :alt="image.alt" @click="getImageKey(index)" :class="index == id ? 'selectedIcon' : ''" :style="`width: ${windowWidth < 1240 ? 50 : 70}px ; height: ${windowWidth < 1240 ? 50 : 70}px`" />
    </section>
  </aside>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Slider",
  props: ["images"],
  data () {
    return {
      id: 0,
      breakpoint: 1050,
      iconSize: this.windowWidth < 1050 ? 50 : 70
    }
  },
  methods: {
    getImageKey: function (id) {
      this.id = id
    }
  },
  computed: {
    ...mapGetters({
        windowWidth: "ui/getWindowWidth"
    })
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/__variables.scss";
@import "@/scss/default.scss";

aside {
  display: flex;
  flex-direction: column;
  width: 100%;

  & section {
    display: flex;

    &.container {

      overflow: hidden;

      margin: 0 auto;
      padding: 0;

      & .container__img {
        display: flex;
        transition: transform .2s ease;
      }

      & img {
        height: auto;

      } 
    }

    &.icons {
      margin-top: 20px;
      margin-left: 5px;
      & img {
        border: 2px solid $grey;
        margin-right: 10px;
        cursor: pointer;

        &.selectedIcon {
          border: 4px solid $grey !important;
        }
      }
    }
  }
}

@media screen and (min-width: 1050px) {
  aside {
    width: 50%;
  }
}
</style>
