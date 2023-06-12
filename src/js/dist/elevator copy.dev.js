// const floorBtns = document.querySelectorAll('.floor__btn')
// const elevator = document.querySelector('#elevator')
// const clickedBtns = []
// floorBtns.forEach(btn => {
//   btn.addEventListener('click', () => {
//     if (btn.classList.contains('floor__btn--active')) {
//       return
//     }
//     const btnY = btn.getBoundingClientRect().top + window.pageYOffset
//     floorBtns.forEach(btn => btn.classList.remove('floor__btn--active'))
//     clickedBtns.push(btn)
//     console.log(clickedBtns)
//     btn.classList.add('floor__btn--next')
//     console.log(btnY)
//     if (clickedBtns[0]) {
//       setTimeout(() => {
//         floorBtns.forEach(btn => btn.classList.remove('floor__btn--next'))
//         btn.classList.add('floor__btn--active')
//         elevator.style.top = `${btnY}px`
//         elevator.style.transform = `translate(-50%, -45%)`
//         clickedBtns.shift(btn)
//       }, 3000)
//     }
//   })
// })
// const floorBtns = document.querySelectorAll('.floor__btn')
// const firstFloor = document.querySelector('.floor__btn--first')
// const elevator = document.querySelector('#elevator')
// const clickedBtns = []
// const rect = firstFloor.getBoundingClientRect().top + window.pageYOffset
// console.log(rect)
// floorBtns.forEach(btn => {
//   btn.addEventListener('click', () => {
//     if (btn.classList.contains('floor__btn--active')) {
//       return
//     }
//     // const btnFirstFloor = btn.getBoundingClientRect().top + window.pageYOffset
//     const btnY = btn.getBoundingClientRect().top + window.pageYOffset
//     floorBtns.forEach(btn => btn.classList.remove('floor__btn--active'))
//     clickedBtns.push(btn)
//     console.log(clickedBtns)
//     btn.classList.add('floor__btn--next')
//     console.log(btnY)
//     // const currentBtn = clickedBtns[0]
//     // console.log(currentBtn)
//     for (let i = 0; i < clickedBtns.length; i++) {
//       const currentBtn = clickedBtns[i]
//       if (i === 0) {
//         setTimeout(() => {
//           currentBtn.classList.add('floor__btn--active')
//           elevator.style.top = `${btnY}px`
//           elevator.style.transform = `translate(-50%, -45%)`
//           console.log('1')
//         }, 2000)
//         setTimeout(() => {
//           clickedBtns.shift()
//           console.log('удален первый элемент массива')
//           currentBtn.classList.remove('floor__btn--next')
//           console.log(clickedBtns)
//           console.log('2')
//         }, 2000)
//       }
// if (clickedBtns.length === 0) {
//   elevator.style.top = `${rect}px`
//   elevator.style.transform = `translate(-50%, -45%)`
//   console.log('Массив пуст')
//   // console.log('Массив пуст')
// }
//     }
//   })
// })
// скрипт анимации выполняется для первого элемента в массиве, после выполнения элемент удаляется из массива
// const floorBtns = document.querySelectorAll('.floor__btn')
// const firstFloor = document.querySelector('.floor__btn--first')
// const elevator = document.querySelector('#elevator')
// const clickedBtns = []
// const rect = firstFloor.getBoundingClientRect().top + window.pageYOffset
// console.log(rect)
// floorBtns.forEach(btn => {
//   btn.addEventListener('click', () => {
//     if (btn.classList.contains('floor__btn--active')) {
//       return
//     }
//     const btnY = btn.getBoundingClientRect().top + window.pageYOffset
//     floorBtns.forEach(btn => btn.classList.remove('floor__btn--active'))
//     clickedBtns.push(btn)
//     console.log(clickedBtns)
//     btn.classList.add('floor__btn--next')
//     console.log(btnY)
//     if (clickedBtns.length === 1) {
//       processClickedBtns()
//     }
//   })
// })
// function processClickedBtns() {
//   if (clickedBtns.length === 0) {
//     return
//   }
//   const currentBtn = clickedBtns[0]
//   const btnY = currentBtn.getBoundingClientRect().top + window.pageYOffset
//   setTimeout(() => {
//     // floorBtns.classList.remove('floor__btn--active')
//     currentBtn.classList.add('floor__btn--active')
//     elevator.style.top = `${btnY}px`
//     elevator.style.transform = `translate(-50%, -45%)`
//     console.log('1')
//   }, 3000)
//   setTimeout(() => {
//     clickedBtns.shift()
//     console.log('удален первый элемент массива')
//     currentBtn.classList.remove('floor__btn--next')
//     console.log(clickedBtns)
//     console.log('2')
//     if (clickedBtns.length > 0) {
//       processClickedBtns()
//     }
//   }, 3000)
//   if (clickedBtns.length === 0) {
//     elevator.style.top = `${rect}px`
//     elevator.style.transform = `translate(-50%, -45%)`
//     console.log('Массив пуст')
//     // console.log('Массив пуст')
//   }
// }
// ------------------------------------------------------------------
// const floorBtns = document.querySelectorAll('.floor__btn')
// const firstFloor = document.querySelector('.floor__btn--first')
// const doorLeft = document.querySelector('.elevator__door--left')
// const doorRight = document.querySelector('.elevator__door--right')
// const elevator = document.querySelector('#elevator')
// const clickedBtns = []
// const rect = firstFloor.getBoundingClientRect().top + window.pageYOffset
// console.log(rect)
// floorBtns.forEach(btn => {
//   btn.addEventListener('click', () => {
//     if (btn.classList.contains('floor__btn--active')) {
//       return
//     }
//     const btnY = btn.getBoundingClientRect().top + window.pageYOffset
//     floorBtns.forEach(btn => btn.classList.remove('floor__btn--active'))
//     clickedBtns.push(btn)
//     console.log(clickedBtns)
//     btn.classList.add('floor__btn--next')
//     console.log(btnY)
//     if (clickedBtns.length === 1) {
//       processClickedBtns()
//     }
//   })
// })
// function processClickedBtns() {
//   if (clickedBtns.length === 0) {
//     return
//   }
//   const currentBtn = clickedBtns[0]
//   const btnY = currentBtn.getBoundingClientRect().top + window.pageYOffset
//   setTimeout(() => {
//     currentBtn.classList.remove('floor__btn--active')
//     console.log('Класс floor__btn--active удален')
//     currentBtn.classList.add('floor__btn--active')
//     elevator.style.top = `${btnY}px`
//     elevator.style.transform = `translate(-50%, -45%)`
//     // doorLeft.style.width = `0`
//     // doorRight.style.width = `0`
//     console.log('1')
//   }, 4000)
//   setTimeout(() => {
//     doorLeft.style.width = `5%`
//     doorRight.style.width = `5%`
//   }, 8000)
//   setTimeout(() => {
//     setTimeout(() => {
//       currentBtn.classList.remove('floor__btn--active')
//       console.log('Класс floor__btn--active удален')
//       console.log('2')
//       doorLeft.style.width = `50%`
//       doorRight.style.width = `50%`
//     }, 4000)
//     clickedBtns.shift()
//     console.log('удален первый элемент массива')
//     currentBtn.classList.remove('floor__btn--next')
//     console.log(clickedBtns)
//     console.log('3')
//     if (clickedBtns.length > 0) {
//       processClickedBtns()
//     } else {
//       // Возвращаем лифт на первый этаж после обработки всех элементов массива
//       setTimeout(() => {
//         elevator.style.top = `${rect}px`
//         elevator.style.transform = `translate(-50%, -45%)`
//         console.log('Массив пуст')
//       }, 9000)
//       setTimeout(() => {
//         doorLeft.style.width = `5%`
//         doorRight.style.width = `5%`
//       }, 15000)
//       setTimeout(() => {
//         doorLeft.style.width = `50%`
//         doorRight.style.width = `50%`
//       }, 18000)
//     }
//   }, 9000)
// }
// ----------------------------------------------------------------
// const floorBtns = document.querySelectorAll('.floor__btn')
// const firstFloor = document.querySelector('.floor__btn--first')
// const doorLeft = document.querySelector('.elevator__door--left')
// const doorRight = document.querySelector('.elevator__door--right')
// const elevator = document.querySelector('#elevator')
// const upQueue = []
// const downQueue = []
// const rect = firstFloor.getBoundingClientRect().top + window.pageYOffset
// console.log(rect)
// floorBtns.forEach(btn => {
//   btn.addEventListener('click', () => {
//     if (btn.classList.contains('floor__btn--active')) {
//       return
//     }
//     const btnY = btn.getBoundingClientRect().top + window.pageYOffset
//     floorBtns.forEach(btn => btn.classList.remove('floor__btn--active'))
//     if (elevator.style.top === '' || parseFloat(elevator.style.top) < btnY) {
//       downQueue.push(btn)
//     } else {
//       upQueue.push(btn)
//     }
//     btn.classList.add('floor__btn--next')
//     console.log(btnY)
//     if (upQueue.length === 1 && downQueue.length === 0) {
//       processClickedBtns(upQueue)
//     } else if (downQueue.length === 1 && upQueue.length === 0) {
//       processClickedBtns(downQueue)
//     }
//   })
// })
// function processClickedBtns(queue) {
//   if (queue.length === 0) {
//     return
//   }
//   const currentBtn = queue[0]
//   const btnY = currentBtn.getBoundingClientRect().top + window.pageYOffset
//   setTimeout(() => {
//     currentBtn.classList.remove('floor__btn--active')
//     console.log('Класс floor__btn--active удален')
//     currentBtn.classList.add('floor__btn--active')
//     elevator.style.top = `${btnY}px`
//     elevator.style.transform = `translate(-50%, -45%)`
//   }, 4000)
//   setTimeout(() => {
//     doorLeft.style.width = `5%`
//     doorRight.style.width = `5%`
//   }, 7000)
//   setTimeout(() => {
//     setTimeout(() => {
//       currentBtn.classList.remove('floor__btn--active')
//       console.log('Класс floor__btn--active удален')
//       doorLeft.style.width = `50%`
//       doorRight.style.width = `50%`
//     }, 4000)
//     queue.shift()
//     console.log('удален первый элемент массива')
//     currentBtn.classList.remove('floor__btn--next')
//     console.log(queue)
//     if (queue.length > 0) {
//       processClickedBtns(queue)
//     } else {
//       if (queue === downQueue && upQueue.length > 0) {
//         setTimeout(() => {
//           elevator.style.top = `${rect}px`
//           elevator.style.transform = `translate(-50%, -45%)`
//           console.log('Elevator returned to the first floor')
//         }, 9000)
//         setTimeout(() => {
//           doorLeft.style.width = `5%`
//           doorRight.style.width = `5%`
//         }, 15000)
//         setTimeout(() => {
//           doorLeft.style.width = `50%`
//           doorRight.style.width = `50%`
//           processClickedBtns(upQueue)
//         }, 18000)
//       } else if (queue === upQueue && downQueue.length > 0) {
//         processClickedBtns(downQueue)
//       }
//     }
//   }, 9000)
// }
// -----------------------------------------------------------------
// const floorBtns = document.querySelectorAll('.floor__btn')
// const firstFloor = document.querySelector('.floor__btn--first')
// const doorLeft = document.querySelector('.elevator__door--left')
// const doorRight = document.querySelector('.elevator__door--right')
// const elevator = document.querySelector('#elevator')
// const clickedBtns = []
// const rect = firstFloor.getBoundingClientRect().top + window.pageYOffset
// console.log(rect)
// floorBtns.forEach(btn => {
//   btn.addEventListener('click', () => {
//     if (btn.classList.contains('floor__btn--active')) {
//       return
//     }
//     // Получаем координаты активной кнопки
//     const activeBtn = document.querySelector('.floor__btn--active')
//     const activeBtnY = activeBtn
//       ? activeBtn.getBoundingClientRect().top + window.pageYOffset
//       : rect
//     const btnY = btn.getBoundingClientRect().top + window.pageYOffset
//     // Проверяем, что лифт спускается вниз и координаты кнопки меньше активной кнопки
//     if (elevator.style.top > activeBtnY && btnY < activeBtnY) {
//       return
//     }
//     floorBtns.forEach(btn => btn.classList.remove('floor__btn--active'))
//     clickedBtns.push(btn)
//     console.log(clickedBtns)
//     btn.classList.add('floor__btn--next')
//     console.log(btnY)
//     if (clickedBtns.length === 1) {
//       processClickedBtns()
//     }
//   })
// })
// function processClickedBtns() {
//   if (clickedBtns.length === 0) {
//     return
//   }
//   const currentBtn = clickedBtns[0]
//   const btnY = currentBtn.getBoundingClientRect().top + window.pageYOffset
//   setTimeout(() => {
//     currentBtn.classList.add('floor__btn--active')
//     elevator.style.top = `${btnY}px`
//     elevator.style.transform = `translate(-50%, -45%)`
//     console.log('1')
//   }, 4000)
//   setTimeout(() => {
//     doorLeft.style.width = `5%`
//     doorRight.style.width = `5%`
//   }, 7000)
//   setTimeout(() => {
//     setTimeout(() => {
//       currentBtn.classList.remove('floor__btn--active')
//       console.log('Класс floor__btn--active удален')
//       console.log('2')
//       doorLeft.style.width = `50%`
//       doorRight.style.width = `50%`
//     }, 4000)
//     clickedBtns.shift()
//     console.log('удален первый элемент массива')
//     currentBtn.classList.remove('floor__btn--next')
//     console.log(clickedBtns)
//     console.log('3')
//     if (clickedBtns.length > 0) {
//       processClickedBtns()
//     } else {
//       // Возвращаем лифт на первый этаж после обработки всех элементов массива
//       setTimeout(() => {
//         elevator.style.top = `${rect}px`
//         elevator.style.transform = `translate(-50%, -45%)`
//         console.log('Массив пуст')
//       }, 9000)
//       setTimeout(() => {
//         doorLeft.style.width = `5%`
//         doorRight.style.width = `5%`
//       }, 13000)
//     }
//   }, 9000)
// }
// function processClickedBtns() {
//   if (clickedBtns.length === 0) {
//     return
//   }
//   const currentBtn = clickedBtns[0]
//   const btnY = currentBtn.getBoundingClientRect().top + window.pageYOffset
//   setTimeout(() => {
//     currentBtn.classList.add('floor__btn--active')
//     elevator.style.top = `${btnY}px`
//     elevator.style.transform = `translate(-50%, -45%)`
//     console.log('1')
//   }, 3000)
//   setTimeout(() => {
//     clickedBtns.shift()
//     console.log('удален первый элемент массива')
//     currentBtn.classList.remove('floor__btn--next')
//     console.log(clickedBtns)
//     console.log('2')
//     if (clickedBtns.length > 0) {
//       processClickedBtns()
//     } else {
//       // Возвращаем лифт на первый этаж после обработки всех элементов массива
//       setTimeout(() => {
//         elevator.style.top = `${rect}px`
//         elevator.style.transform = `translate(-50%, -45%)`
//         console.log('Массив пуст')
//       }, 5000)
//     }
//   }, 5000)
// }
// const floorBtns = document.querySelectorAll('.floor__btn')
// const firstFloor = document.querySelector('.floor__btn--first')
// const elevator = document.querySelector('#elevator')
// const clickedBtns = []
// const rect = firstFloor.getBoundingClientRect().top + window.pageYOffset
// console.log(rect)
// let isDescending = true
// floorBtns.forEach(btn => {
//   btn.addEventListener('click', () => {
//     if (btn.classList.contains('floor__btn--active')) {
//       return
//     }
//     const btnY = btn.getBoundingClientRect().top + window.pageYOffset
//     // Проверяем условие перед добавлением кнопки в очередь
//     if (isDescending && btnY < elevator.offsetTop) {
//       console.log(
//         'Нельзя добавить кнопки на возрастание, пока не доедет до первого этажа'
//       )
//       return
//     }
//     floorBtns.forEach(btn => btn.classList.remove('floor__btn--active'))
//     clickedBtns.push(btn)
//     console.log(clickedBtns)
//     btn.classList.add('floor__btn--next')
//     console.log(btnY)
//     if (clickedBtns.length === 1) {
//       processClickedBtns()
//     }
//   })
// })
// function processClickedBtns() {
//   if (clickedBtns.length === 0) {
//     return
//   }
//   const currentBtn = clickedBtns[0]
//   const btnY = currentBtn.getBoundingClientRect().top + window.pageYOffset
//   setTimeout(() => {
//     currentBtn.classList.add('floor__btn--active')
//     elevator.style.top = `${btnY}px`
//     elevator.style.transform = `translate(-50%, -45%)`
//     console.log('1')
//   }, 3000)
//   setTimeout(() => {
//     setTimeout(() => {
//       currentBtn.classList.remove('floor__btn--active')
//       console.log('Класс floor__btn--active удален')
//     }, 3000)
//     clickedBtns.shift()
//     console.log('удален первый элемент массива')
//     currentBtn.classList.remove('floor__btn--next')
//     console.log(clickedBtns)
//     console.log('2')
//     if (clickedBtns.length > 0) {
//       processClickedBtns()
//     } else {
//       // Возвращаем лифт на первый этаж после обработки всех элементов массива
//       setTimeout(() => {
//         elevator.style.top = `${rect}px`
//         elevator.style.transform = `translate(-50%, -45%)`
//         console.log('Массив пуст')
//         isDescending = true // Сбрасываем флаг направления движения лифта
//       }, 5000)
//     }
//   }, 5000)
// }
// const floorBtns = document.querySelectorAll('.floor__btn')
// const firstFloor = document.querySelector('.floor__btn--first')
// const elevator = document.querySelector('#elevator')
// const clickedBtns = []
// const rect = firstFloor.getBoundingClientRect().top + window.pageYOffset
// console.log(rect)
// let isDescending = true
// floorBtns.forEach(btn => {
//   btn.addEventListener('click', () => {
//     if (btn.classList.contains('floor__btn--active')) {
//       return
//     }
//     const btnY = btn.getBoundingClientRect().top + window.pageYOffset
//     // Проверяем условие перед добавлением кнопки в очередь
//     if (
//       isDescending &&
//       btnY < elevator.offsetTop &&
//       elevator.offsetTop !== rect
//     ) {
//       console.log(
//         'Нельзя добавить кнопки на возрастание, п не доедет до первого этажа'
//       )
//       return
//     }
//     floorBtns.forEach(btn => btn.classList.remove('floor__btn--active'))
//     clickedBtns.push(btn)
//     console.log(clickedBtns)
//     btn.classList.add('floor__btn--next')
//     console.log(btnY)
//     if (clickedBtns.length === 1) {
//       processClickedBtns()
//     }
//   })
// })
// function processClickedBtns() {
//   if (clickedBtns.length === 0) {
//     return
//   }
//   const currentBtn = clickedBtns[0]
//   const btnY = currentBtn.getBoundingClientRect().top + window.pageYOffset
//   setTimeout(() => {
//     currentBtn.classList.add('floor__btn--active')
//     elevator.style.top = `${btnY}px`
//     elevator.style.transform = `translate(-50%, -45%)`
//     console.log('1')
//   }, 3000)
//   setTimeout(() => {
//     setTimeout(() => {
//       currentBtn.classList.remove('floor__btn--active')
//       console.log('Класс floor__btn--active удален')
//     }, 3000)
//     clickedBtns.shift()
//     console.log('удален первый элемент массива')
//     currentBtn.classList.remove('floor__btn--next')
//     console.log(clickedBtns)
//     console.log('2')
//     if (clickedBtns.length > 0) {
//       processClickedBtns()
//     } else {
//       // Возвращаем лифт на первый этаж после обработки всех элементов массива
//       setTimeout(() => {
//         elevator.style.top = `${rect}px`
//         elevator.style.transform = `translate(-50%, -45%)`
//         console.log('Массив пуст')
//         isDescending = true // Сбрасываем флаг направления движения лифта
//       }, 5000)
//     }
//   }, 5000)
// }
"use strict";