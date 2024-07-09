<template>
  <div class="quantity-change">
    <div class="quantity-change__container _container">
      <h2 class="quantity-change__title">Количество этажей</h2>
      <div class="quantity-change__quantity">
        <button class="quantity-change__quantity-button quantity-change__quantity-button--minus"
          @click="decrementQuantity"></button>
        <input class="quantity-change__quantity-input" type="text" value="1" v-model="quantity" readonly="readonly" />
        <button class="quantity-change__quantity-button quantity-change__quantity-button--plus"
          @click="incrementQuantity"></button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useFloorStore } from '@/stores/FloorStore';
import { useElevatorStore } from '@/stores/ElevatorStore';
export default {
  name: 'quantity-change',


  setup() {
    const floorStore = useFloorStore();
    const elevatorStore = useElevatorStore();
    const quantity = ref(floorStore.floors.length);

    const incrementQuantity = () => {
      floorStore.floors.push({ id: floorStore.floors.length + 1, name: (floorStore.floors.length + 1).toString() });
      quantity.value++;
    }

    const decrementQuantity = () => {
      if (quantity.value > 3) {
        floorStore.floors.pop();
        quantity.value--;
      }
    }

    return {
      floorStore,
      elevatorStore,
      quantity,
      incrementQuantity,
      decrementQuantity,
    }
  }
}
</script>

<style lang="scss">
.quantity-change {
  margin-bottom: 20px;

  // .quantity-change__container
  &__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  }

  // .quantity-change__title
  &__title {
    font-size: 24px;
    margin-bottom: 20px;
  }

  // .quantity-change__quantity
  &__quantity {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  // .quantity-change__quantity-button
  &__quantity-button {
    position: relative;
    border: 1px solid $white;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    transition: border 0.1s ease-in-out;

    // padding: 5px;
    &:hover {
      // background: #EDF1FB;
      border: 1px solid $red;
    }
  }

  // .quantity-change__quantity-button--minus
  &__quantity-button--minus {

    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 12px;
      height: 2px;
      background: $white;
      transition: background 0.1s ease-in-out;
    }

    &:hover::before {
      background: $red;
    }
  }

  // .quantity-change__quantity-input
  &__quantity-input {
    max-width: 50px;
    width: 100%;
    text-align: center;
    margin: 0 10px;
    color: $white;
    background: none;
    border: 1px solid $white;
  }

  // .quantity-change__quantity-button--plus
  &__quantity-button--plus {
    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 12px;
      height: 2px;
      background: $white;
      transition: background 0.1s ease-in-out;
    }

    &:hover::before {
      background: $red;
    }

    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(90deg);
      width: 12px;
      height: 2px;
      background: $white;
      transition: background 0.1s ease-in-out;
    }

    &:hover::after {
      background: $red;
    }
  }
}
</style>