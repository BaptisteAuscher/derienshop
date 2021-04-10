<template>
  <div class="spinner">
      <div>

      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "@/scss/__variables.scss";

.spinner {
    width: 60px;
    height: 60px;
    border: 10px solid transparent;
    border-top: 10px solid $pink;
    border-radius: 50%;
    box-sizing: content-box;

    animation: .6s ease-out infinite;
    animation-name: spin;
}

@keyframes spin {
    to {
        transform: rotate(1turn);
    }
}
</style>