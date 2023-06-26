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

let isMovingDown = false

floorBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.classList.contains('floor__btn--active')) {
      return
    }

    const btnY = btn.getBoundingClientRect().top + window.pageYOffset

    floorBtns.forEach(btn => btn.classList.remove('floor__btn--active'))

    if (elevator.style.top === '' || parseFloat(elevator.style.top) < btnY) {
      downQueue.push(btn)
    } else {
      upQueue.push(btn)
    }

    btn.classList.add('floor__btn--next')

    console.log(btnY)

    if (
      upQueue.length === 1 &&
      downQueue.length === 0 &&
      isMovingDown === false
    ) {
      elevatorMovement(upQueue)
    } else if (downQueue.length === 1 && upQueue.length === 0) {
      elevatorMovement(downQueue)
    }
  })
})

function openDoors() {
  doorLeft.style.width = `5%`
  doorRight.style.width = `5%`
}

function closeDoors() {
  doorLeft.style.width = `50%`
  doorRight.style.width = `50%`
}

function moveElevator(btnY) {
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
