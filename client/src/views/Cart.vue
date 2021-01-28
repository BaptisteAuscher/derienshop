<template>
  <div>
    {{cart}}
    <button @click="emptyCart">empty cart</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters({
      cart: "getCart"
    })
  },
  methods: {
    ...mapActions(['emptyCart'])
  }
}
</script>
