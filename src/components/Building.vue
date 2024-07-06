<template>
  <div class="building">
    <h1 class="building__title">Xpage Task Elevator</h1>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.building {
  display: flex;
  flex-direction: column;
  height: 100vh;

  // building__title
  &__title {
    margin: auto;
    font-size: clamp(1.5rem, 0.955rem + 2.73vw, 3rem);
  }
}
</style>