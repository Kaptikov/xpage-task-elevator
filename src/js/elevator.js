const floorBtns = document.querySelectorAll('.floor__btn')
const firstFloor = document.querySelector('.floor__btn--first')

const doorLeft = document.querySelector('.elevator__door--left')
const doorRight = document.querySelector('.elevator__door--right')

const elevator = document.querySelector('#elevator')
const clickedBtns = []

const firstFloorBtn =
  firstFloor.getBoundingClientRect().top + window.pageYOffset
console.log(firstFloorBtn)

floorBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.classList.contains('floor__btn--active')) {
      return
    }

    const btnY = btn.getBoundingClientRect().top + window.pageYOffset

    floorBtns.forEach(btn => btn.classList.remove('floor__btn--active'))

    clickedBtns.push(btn)
    console.log(clickedBtns)
    btn.classList.add('floor__btn--next')

    console.log(btnY)

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

  setTimeout(() => {
    currentBtn.classList.remove('floor__btn--active')
    console.log('класс floor__btn--active удален')
    currentBtn.classList.add('floor__btn--active')
    elevator.style.top = `${btnY}px`
    elevator.style.transform = `translate(-50%, -45%)`
    // doorLeft.style.width = `0`
    // doorRight.style.width = `0`
    // console.log('1')
  }, 6000)

  setTimeout(() => {
    doorLeft.style.width = `5%`
    doorRight.style.width = `5%`
  }, 10000)

  setTimeout(() => {
    setTimeout(() => {
      currentBtn.classList.remove('floor__btn--active')
      console.log('класс floor__btn--active удален')
      // console.log('2')
      doorLeft.style.width = `50%`
      doorRight.style.width = `50%`
    }, 4000)

    clickedBtns.shift()
    console.log('удален первый элемент массива')

    currentBtn.classList.remove('floor__btn--next')
    console.log(clickedBtns)

    // console.log('3')

    if (clickedBtns.length > 0) {
      elevatorMovement()
    } else {
      setTimeout(() => {
        elevator.style.top = `${firstFloorBtn}px`
        elevator.style.transform = `translate(-50%, -45%)`
        console.log('Массив пуст')
        firstFloor.classList.add('floor__btn--active')
      }, 9000)
      setTimeout(() => {
        doorLeft.style.width = `5%`
        doorRight.style.width = `5%`
      }, 14000)
      setTimeout(() => {
        doorLeft.style.width = `50%`
        doorRight.style.width = `50%`
      }, 17000)
    }
  }, 11000)
}
