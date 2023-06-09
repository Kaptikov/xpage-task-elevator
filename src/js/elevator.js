const floorBtns = document.querySelectorAll('.floor__btn')
const firstFloor = document.querySelector('.floor__btn--first')

const doorLeft = document.querySelector('.elevator__door--left')
const doorRight = document.querySelector('.elevator__door--right')

const elevator = document.querySelector('#elevator')
const upQueue = []
const downQueue = []

const firstFloorBtn =
  firstFloor.getBoundingClientRect().top + window.pageYOffset
console.log(firstFloorBtn)
const btnFloorArr = []

let isMovingDown = false

let lastBtnY = firstFloorBtn
let transitionElem = 1
let preBtnFloor = 1
let btnFloor = 1

floorBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    if (
      btn.classList.contains('floor__btn--active') ||
      btn.classList.contains('floor__btn--next')
    ) {
      return
    }

    const btnY = btn.getBoundingClientRect().top + window.pageYOffset
    btnFloor = parseInt(btn.dataset.floor)
    btnFloorArr.push(btnFloor)

    console.log(btnFloorArr)

    floorBtns.forEach(btn => btn.classList.remove('floor__btn--active'))

    // if (
    //   elevator.style.top === '' ||
    //   parseFloat(elevator.style.top) < btnY ||
    //   isMovingDown === false
    // ) {
    //   upQueue.push(btn)
    //   console.log('элемент в массиве {$upQueue}')
    //   console.log(upQueue)
    // } else {
    //   downQueue.push(btn)
    //   console.log('элемент в массиве {$downQueue}')
    //   console.log(downQueue)
    // }

    if (isMovingDown) {
      upQueue.push(btn)
      console.log('элемент в массиве upQueue')
      console.log(upQueue)
    } else {
      if (btnY > lastBtnY) {
        downQueue.push(btn)
        console.log('элемент в массиве downQueue')
        console.log(downQueue)
      } else if (btnY < lastBtnY) {
        upQueue.push(btn)
        console.log('элемент в массиве upQueue')
        console.log(upQueue)
      } else if (btnY === lastBtnY) {
        upQueue.push(btn)
        console.log('элемент в массиве upQueue')
        console.log(upQueue)
      }
    }

    lastBtnY = btnY

    btn.classList.add('floor__btn--next')

    console.log(btnY)

    if (
      upQueue.length === 1 &&
      downQueue.length === 0 &&
      isMovingDown === false
    ) {
      elevatorMovement(upQueue)
    } else if (
      downQueue.length === 1 &&
      upQueue.length === 0 &&
      isMovingDown === false
    ) {
      elevatorMovement(downQueue)
    }
  })
})

function transitionElevator() {
  btnFloor = btnFloorArr[0]
  if (
    Math.abs(btnFloorArr[1] - preBtnFloor) < Math.abs(btnFloor - preBtnFloor)
  ) {
    const swap = btnFloorArr[0]
    btnFloorArr[0] = btnFloorArr[1]
    btnFloorArr[1] = swap
  }
  if (btnFloor > preBtnFloor) {
    const transitionDuration = (btnFloor - preBtnFloor) * 500
    console.log(transitionDuration)
    elevator.style.transitionDuration = `${transitionDuration}ms`
    console.log('up')
    preBtnFloor = btnFloor
  } else if (btnFloor < preBtnFloor) {
    const transitionDuration = (btnFloor - preBtnFloor) * -500
    console.log(transitionDuration)
    elevator.style.transitionDuration = `${transitionDuration}ms`
    console.log('down')
    preBtnFloor = btnFloor
  } else if (isMovingDown === true) {
    const transitionDuration = (1 - preBtnFloor) * -500
    console.log(transitionDuration)
    elevator.style.transitionDuration = `${transitionDuration}ms`
    preBtnFloor = 1
  }
  btnFloorArr.shift()
}

function openDoors() {
  doorLeft.style.width = `5%`
  doorRight.style.width = `5%`
}

function closeDoors() {
  doorLeft.style.width = `50%`
  doorRight.style.width = `50%`
}

function moveElevator(btnY) {
  transitionElevator()
  elevator.style.top = `${btnY}px`
  elevator.style.transform = `translate(-50%, -19.75%)`
}

function elevatorMovement(queue) {
  if (queue.length === 0) {
    return
  }

  const currentBtn = queue[0]
  const btnY = currentBtn.getBoundingClientRect().top + window.pageYOffset

  currentBtn.classList.remove('floor__btn--active')
  console.log('Класс floor__btn--active удален')
  currentBtn.classList.add('floor__btn--active')
  currentBtn.classList.remove('floor__btn--next')
  moveElevator(btnY)

  elevator.addEventListener(
    'transitionend',
    () => {
      openDoors()

      doorLeft.addEventListener(
        'transitionend',
        () => {
          currentBtn.classList.remove('floor__btn--active')
          console.log('Класс floor__btn--active удален')
          closeDoors()

          doorLeft.addEventListener(
            'transitionend',
            () => {
              queue.shift()
              console.log('удален первый элемент массива')

              console.log(queue)

              if (queue.length > 0) {
                elevatorMovement(queue)
              } else {
                if (
                  (queue === downQueue && upQueue.length > 0) ||
                  (upQueue.length === 0 && downQueue.length === 0)
                ) {
                  isMovingDown = true
                  moveElevator(firstFloorBtn)
                  console.log('Лифт вернулся на первый этаж')

                  elevator.addEventListener(
                    'transitionend',
                    () => {
                      openDoors()

                      doorLeft.addEventListener(
                        'transitionend',
                        () => {
                          closeDoors()
                          doorLeft.addEventListener(
                            'transitionend',
                            () => {
                              isMovingDown = false
                              elevatorMovement(upQueue)
                            },
                            { once: true }
                          )
                        },
                        { once: true }
                      )
                    },
                    { once: true }
                  )
                } else if (queue === upQueue && downQueue.length > 0) {
                  elevatorMovement(downQueue)
                }
              }
            },
            { once: true }
          )
        },
        { once: true }
      )
    },
    { once: true }
  )
}
