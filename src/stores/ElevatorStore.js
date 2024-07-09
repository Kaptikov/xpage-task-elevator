import { defineStore } from 'pinia'
import { useFloorStore } from '@/stores/FloorStore'

export const useElevatorStore = defineStore('elevatorStore', {
  state: () => ({
    upQueue: [],
    downQueue: [],
    floorNumbersUp: [],
    floorNumbersDown: [],
    currentFloor: null,
    nextFloor: null,
    firstFloor: null,
    topPosition: null,
    peopleInElevator: 0,
  }),

  actions: {
    setFirstFloor() {
      this.topPosition = this.currentFloor
    },

    addToUpQueue(buttonY) {
      const index = this.upQueue.indexOf(buttonY)
      if (index !== -1) {
        this.upQueue.splice(index, 1)
      }
      if (
        (buttonY >= this.currentFloor && this.upQueue.length > 0) ||
        buttonY > this.currentFloor
      ) {
        this.downQueue.push(buttonY)
      } else if (buttonY <= this.currentFloor) {
        this.upQueue.push(buttonY)
      }
    },

    sortUpQueue() {
      this.upQueue.sort((a, b) => b - a)
    },

    sortDownQueue() {
      this.downQueue.sort((a, b) => a - b)
    },

    addToFloorNumbers(button, buttonY) {
      const index = this.upQueue.indexOf(buttonY)
      if (index !== -1) {
        this.floorNumbersUp.splice(index, 1)
      }

      if (
        (buttonY >= this.currentFloor && this.floorNumbersUp.length > 0) ||
        buttonY > this.currentFloor
      ) {
        this.floorNumbersDown.push(button)
      } else if (buttonY <= this.currentFloor) {
        this.floorNumbersUp.push(button)
      }
    },

    sortFloorNumbersUp() {
      this.floorNumbersUp.sort((a, b) => a - b)
    },

    sortFloorNumbersDown() {
      this.floorNumbersDown.sort((a, b) => b - a)
    },
  },
})
