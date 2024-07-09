import { defineStore } from 'pinia'

export const useFloorStore = defineStore('floorStore', {
  state: () => ({
    floors: [
      { id: 1, name: '1' },
      { id: 2, name: '2' },
      { id: 3, name: '3' },
      { id: 4, name: '4' },
      { id: 5, name: '5' },
    ],
  }),

  actions: {},
})
