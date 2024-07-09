<template>
  <button class="floor__button button" :data-floor="floor.id" @click="getButtonCoordinates($event, floor)">
    {{ floor.name }}
  </button>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';
import { useElevatorStore } from '@/stores/ElevatorStore';
export default {
  name: 'floor-button',

  props: {
    floor: {}
  },

  setup() {
    const elevatorStore = useElevatorStore();
    // const elevator = ref(null);
    const floorNumber = ref('');

    const getButtonCoordinates = (event, floor) => {
      const button = event.target;
      const buttonY = button.offsetTop;
      if (buttonY === elevatorStore.firstFloor) {
        return;
      }
      floorNumber.value = floor.name;
      elevatorStore.addToUpQueue(buttonY);
      elevatorStore.addToFloorNumbers(floor.name, buttonY);
      elevatorStore.nextFloor = buttonY;
      button.classList.add('button--next');
    }

    function setFirstFloor() {
      const firstFloorButton = document.querySelector('.floor__button:first-child');
      const elevator = document.querySelector('.elevator');
      elevatorStore.currentFloor = firstFloorButton.offsetTop;
      elevatorStore.topPosition = elevatorStore.currentFloor;
      elevatorStore.firstFloor = elevatorStore.currentFloor;
      elevator.style.top = `${elevatorStore.currentFloor - 17}px`;
    }

    onMounted(() => {
      setFirstFloor()
    });

    onUnmounted(() => {
      setTimeout(() => {
        setFirstFloor()
      }, 400);
    })

    return {
      elevatorStore,
      getButtonCoordinates,
      setFirstFloor,
    }
  }

}
</script>

<style lang="scss">
.button {
  width: 50px;
  height: 50px;
  font-weight: 700;
  border-radius: 50%;
  border: 3px solid $white;
  transition: color 0.2s ease-in-out, box-shadow 0.2s ease-in-out, text-shadow 0.2s ease-in-out;

  &:hover {
    color: $white;
    text-shadow: 0 0 7px rgb(255, 255, 255);
    box-shadow: 0 0 7px 2px rgba(255, 255, 255, 0.5), inset 0 0 7px 2px rgba(255, 255, 255, 0.5);
  }
}

.button--active {
  color: $red;
  border: 3px solid $red;
  text-shadow: 0 0 7px $red;
  box-shadow: 0 0 7px 2px $red, inset 0 0 7px 2px $red;
  pointer-events: none;
}

.button--next {
  color: $white;
  border: 3px solid $white;
  text-shadow: 0 0 7px $white;
  box-shadow: 0 0 7px 2px $white, inset 0 0 7px 2px $white;
  pointer-events: none;
}
</style>