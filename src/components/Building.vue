<template>
  <div class="building">
    <h1 class="building__title">Xpage Task Elevator</h1>
    <div class="building__container _container">
      <div class="elevator__container">
        <elevator />
      </div>
      <div class="floors__container">
        <transition-group name="fade">
          <floor v-for="floor in floorStore.floors " :key="floor.id" :floor="floor" />
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
import Elevator from '@/components/Elevator.vue';
import Floor from '@/components/Floor.vue';

import { useFloorStore } from '@/stores/FloorStore';
export default {
  name: 'building',
  components: {
    Elevator,
    Floor,
  },

  setup() {
    const floorStore = useFloorStore();

    return {
      floorStore
    }
  }
}
</script>

<style lang="scss">
.fade-enter-active {
  transition: all 0.3s ease-out;
}

.fade-enter-active {
  transition-delay: 0.1s;
}

.fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-enter-from {
  transform: translateX(50px);
  opacity: 0;
}

.fade-leave-to {
  transform: scale(0.3);
  opacity: 0;
}

.fade-enter-active .floor,
.fade-leave-active .floor {
  transition: all 0.3s ease-in-out;
}

.fade-enter-active .floor {
  transition-delay: 0.1s;
}

.fade-enter-from .floor,
.fade-leave-to .floor {
  transform: scale(0.8);
  opacity: 0;
}

.fade-enter-active .floor__middle,
.fade-leave-active .floor__middle {
  transition: all 0.3s ease-in-out;
}

.fade-enter-active .floor__middle {
  transition-delay: 0.2s;
}

.fade-enter-from .floor__middle,
.fade-leave-to .floor__middle {
  transform: translateX(-50px);
  opacity: 0;
}

.building {
  margin-bottom: 30px;

  // building__title
  &__title {
    margin-top: 50px;
    margin-bottom: 50px;
    text-align: center;
    font-size: clamp(1.5rem, 0.955rem + 2.73vw, 3rem);
  }

  // building__container
  &__container {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    overflow: hidden;
  }
}

.elevator {

  // .elevator__container
  &__container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: end;
    justify-self: end;
    border: 2px solid gray;
    max-width: 100px;
    width: 100%;
  }
}

.floors {

  // .floors__container
  &__container {
    position: relative;
    display: flex;
    flex-direction: column-reverse;
  }
}
</style>