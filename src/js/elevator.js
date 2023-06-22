const floorBtns = document.querySelectorAll('.floor__btn')
const firstFloor = document.querySelector('.floor__btn--first')

const doorLeft = document.querySelector('.elevator__door--left')
const doorRight = document.querySelector('.elevator__door--right')

const elevator = document.querySelector('#elevator')
const clickedBtns = []

const firstFloorBtn =
  firstFloor.getBoundingClientRect().top + window.pageYOffset
console.log(firstFloorBtn)

let isMovingToFirstFloor = false

floorBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.classList.contains('floor__btn--active') || isMovingToFirstFloor) {
      return
    }

    floorBtns.forEach(btn => btn.classList.remove('floor__btn--active'))

    clickedBtns.push(btn)
    btn.classList.add('floor__btn--next')
    console.log(clickedBtns)

    if (clickedBtns.length === 1) {
      elevatorMovement()
    }
  })
})

function elevatorMovement() {
  if (clickedBtns.length === 0) {
    return
  }

  const currentBtn = clickedBtns[0]
  const btnY = currentBtn.getBoundingClientRect().top + window.pageYOffset
  console.log(btnY)

  currentBtn.classList.remove('floor__btn--active')
  currentBtn.classList.add('floor__btn--active')
  currentBtn.classList.remove('floor__btn--next')
  console.log('удален class next')
  elevator.style.top = `${btnY}px`
  elevator.style.transform = `translate(-50%, -19.75%)`
  elevator.addEventListener(
    'transitionend',
    () => {
      doorLeft.style.width = `5%`
      doorRight.style.width = `5%`

      doorLeft.addEventListener(
        'transitionend',
        () => {
          currentBtn.classList.remove('floor__btn--active')
          console.log('удален class active')
          doorLeft.style.width = `50%`
          doorRight.style.width = `50%`

          doorLeft.addEventListener(
            'transitionend',
            () => {
              clickedBtns.shift()
              console.log('удален первый элемент массива')
              console.log(clickedBtns)

              if (clickedBtns.length > 0) {
                elevatorMovement()
              } else {
                isMovingToFirstFloor = true
                console.log(isMovingToFirstFloor)
                elevator.style.top = `${firstFloorBtn}px`
                elevator.style.transform = `translate(-50%, -19.75%)`
                firstFloor.classList.add('floor__btn--active')
                doorLeft.style.width = `5%`
                doorRight.style.width = `5%`
                doorLeft.addEventListener(
                  'transitionend',
                  () => {
                    doorLeft.style.width = `50%`
                    doorRight.style.width = `50%`
                    doorLeft.addEventListener(
                      'transitionend',
                      () => {
                        isMovingToFirstFloor = false
                        console.log(isMovingToFirstFloor)
                      },
                      { once: true }
                    )
                  },
                  { once: true }
                )
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
