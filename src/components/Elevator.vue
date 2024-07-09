<template>
  <div class="elevator" :style="{ transitionDuration: speed + 'ms', top: topPosition + 'px' }">
    <span class="elevator__quantity">{{ elevatorStore.peopleInElevator }}</span>
    <div class=" elevator__door elevator__door--left" :style="{ width: widthDoor + '%' }"></div>
    <div class="elevator__door elevator__door--right" :style="{ width: widthDoor + '%' }"></div>
  </div>
</template>

<script>
import { ref, watch, onMounted } from 'vue';
import { useFloorStore } from '@/stores/FloorStore';
import { useElevatorStore } from '@/stores/ElevatorStore';
export default {
  name: 'elevator',

  setup() {
    const floorStore = useFloorStore();
    const elevatorStore = useElevatorStore();
    const topPosition = ref(elevatorStore.currentFloor);
    const currentFloor = ref(0);
    const widthDoor = ref(50);
    const isElevatorMoving = ref(false)
    const isMovingDown = ref(false)
    const speed = ref(300)

    watch([elevatorStore.upQueue, elevatorStore.downQueue], () => {
      if (!isElevatorMoving.value && !isMovingDown.value && elevatorStore.upQueue.length > 0) {
        isElevatorMoving.value = true
        elevatorMovement()
      }
      else if (elevatorStore.upQueue.length === 0 && elevatorStore.downQueue.length === 0) {
        returnToFirstFloor()
      } else if (elevatorStore.downQueue.length === 0 && elevatorStore.upQueue.length > 0 && isMovingDown.value) {
        returnToFirstFloor()

      }
    })

    async function closeDoors() {
      if (elevatorStore.downQueue.length > 0 && elevatorStore.upQueue.length === 0) {
        isMovingDown.value = true;
      }
      await sortQueue();
      widthDoor.value = 50
      const buttons = document.querySelectorAll('.floor__button');
      buttons.forEach(button => {
        button.classList.remove('button--active');
      });
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }

    async function moveElevatorToFirstFloor() {
      const currentFloorNumber = "1";
      const buttonElement = document.querySelector(`.floor__button[data-floor="${currentFloorNumber}"]`);
      if (buttonElement) {
        buttonElement.classList.add('button--next');
      }

      topPosition.value = elevatorStore.firstFloor - 17;
      await new Promise((resolve) => setTimeout(resolve, speed.value));

      if (buttonElement) {
        buttonElement.classList.remove('button--next');
        buttonElement.classList.add('button--active');
      }
    }

    async function returnToFirstFloor() {
      await closeDoors();
      speedElevatorToFirstFloor();
      await moveElevatorToFirstFloor();
      await openDoors();

      isMovingDown.value = false
      elevatorStore.peopleInElevator = 0
      elevatorStore.currentFloor = elevatorStore.firstFloor

      await new Promise((resolve) => setTimeout(resolve, 1500));
    }

    function speedElevatorUp() {
      const diff = Math.abs(elevatorStore.currentFloor - elevatorStore.upQueue[0]);
      const newSpeed = (diff * 1000 / 150);
      speed.value = newSpeed
    }

    function speedElevatorDown() {
      const diff = Math.abs(elevatorStore.currentFloor - elevatorStore.downQueue[0]);
      const newSpeed = (diff * 1000 / 150);
      speed.value = newSpeed
    }

    function speedElevatorToFirstFloor() {
      const diff = Math.abs(elevatorStore.firstFloor - elevatorStore.currentFloor);
      const newSpeed = (diff * 1000 / 150);
      speed.value = newSpeed
    }

    async function moveElevator() {
      if (elevatorStore.upQueue.length > 0 && !isMovingDown.value) {
        const nextFloor = elevatorStore.upQueue[0];
        elevatorStore.topPosition = nextFloor;
        elevatorStore.currentFloor = nextFloor;
        topPosition.value = nextFloor - 17;
        elevatorStore.peopleInElevator++;
        const currentFloorNumber = elevatorStore.floorNumbersUp[0];
        const buttonElement = document.querySelector(`.floor__button[data-floor="${currentFloorNumber}"]`);

        if (buttonElement) {
          buttonElement.classList.remove('button--active');
          buttonElement.classList.remove('button--next');
          buttonElement.classList.add('button--active');
        }

      } else if (elevatorStore.downQueue.length > 0) {
        isMovingDown.value = true;
        const nextFloor = elevatorStore.downQueue[0]
        elevatorStore.topPosition = nextFloor;
        elevatorStore.currentFloor = nextFloor;
        topPosition.value = nextFloor - 17;
        elevatorStore.peopleInElevator++;

        const currentFloorNumber = elevatorStore.floorNumbersDown[0];
        const buttonElement = document.querySelector(`.floor__button[data-floor="${currentFloorNumber}"]`);

        if (buttonElement) {
          buttonElement.classList.remove('button--active');
          buttonElement.classList.remove('button--next');
          buttonElement.classList.add('button--active');
        }
      }
      await new Promise((resolve) => setTimeout(resolve, speed.value));
    }

    async function sortQueue() {
      if (elevatorStore.upQueue.length > 0) {
        elevatorStore.sortUpQueue();
        elevatorStore.sortFloorNumbersUp();
      }
      if (elevatorStore.downQueue.length > 0 && elevatorStore.upQueue.length === 0) {
        elevatorStore.sortDownQueue();
        elevatorStore.sortFloorNumbersDown();
      }

      await new Promise(
        (resolve) => {
          setTimeout(resolve, 100);
        }
      )
    }

    async function openDoors() {
      widthDoor.value = 5
      await sortQueue();
      if (elevatorStore.downQueue.length > 0 && elevatorStore.upQueue.length === 0) {
        isMovingDown.value = true;
      }

      await new Promise(
        (resolve) => {
          setTimeout(resolve, 1500);
        }
      )
    }

    async function elevatorMovement() {
      if (elevatorStore.upQueue.length > 0 && !isMovingDown.value) {
        await openDoors();
        await closeDoors();
        speedElevatorUp();
        await moveElevator();
        await openDoors();
        elevatorStore.upQueue.shift();
        elevatorStore.floorNumbersUp.shift();
        await elevatorMovement()
      } else if (elevatorStore.downQueue.length > 0) {
        await closeDoors();
        speedElevatorDown();
        await moveElevator();
        await openDoors();
        elevatorStore.downQueue.shift();
        elevatorStore.floorNumbersDown.shift();
        await elevatorMovement()
      } else {
        isElevatorMoving.value = false
      }
    }

    onMounted(() => {
      setTimeout(() => {
        currentFloor.value = elevatorStore.currentFloor;
      }, 100);
    })

    return {
      floorStore,
      elevatorStore,
      topPosition,
      widthDoor,
      openDoors,
      closeDoors,
      moveElevator,
      elevatorMovement,
      currentFloor,
      isElevatorMoving,
      isMovingDown,
      speed,
    }
  }
}
</script>

<style lang="scss" scoped>
.elevator {
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: $white;
  max-width: 60px;
  width: 100%;
  height: 80px;
  border: 1px solid $white;
  // transition: 0.5s cubic-bezier(0.51, 0, 0.18, 1);
  // transition-property: top, transform;
  // transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.51, 0, 0.18, 1);

  // .elevator__quantity
  &__quantity {
    font-size: 21px;
    font-weight: 600;
    color: $black;
  }

  // .elevator__door
  &__door {
    // display: none;
    background: $red;
    width: 50%;
    height: 100%;
    border: 1px solid $gray;
    transition: 0.5s ease-in-out;
  }

  // .elevator__door--left
  &__door--left {
    position: absolute;
    top: 0px;
    left: 0;
  }

  // .elevator__door--right
  &__door--right {
    position: absolute;
    top: 0px;
    right: 0;
  }
}
</style>