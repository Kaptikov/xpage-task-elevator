<template>
  <div class="floor" :key="floor.id">
    <div class="floor__container">
      <floor-button :floor="floor" />
    </div>
  </div>
</template>

<script>
import FloorButton from '@/components/FloorButton.vue';
export default {
  name: 'floor',
  components: {
    FloorButton,
  },

  props: {
    floor: {
    }
  }
}
</script>

<style lang="scss">
.floor {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 700px;
  width: 100%;
  height: 80px;
  border: 1px solid $white;

  &:not(:last-child) {
    margin-top: 10px;
  }
}
</style>