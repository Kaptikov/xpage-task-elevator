<template>
  <main class="page main__page">
    <Building />
    <QuantityСhange />
  </main>
</template>

<script>
import Building from '@/components/Building.vue';
import QuantityСhange from '@/components/QuantityСhange.vue';

export default {
  name: 'App',
  components: {
    Building,
    QuantityСhange,
  }
}
</script>

<style scoped></style>
