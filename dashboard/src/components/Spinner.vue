<template>
  <div class="spinner">

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.spinner {
    width: 80px;
    height: 80px;
    border: 20px solid transparent;
    border-top: 20px solid black;
    border-radius: 50%;
    animation: .5s ease infinite spin;
}

@keyframes spin {
    to {
        transform: rotate(1turn);
    }
}
</style>