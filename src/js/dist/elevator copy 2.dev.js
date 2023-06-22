"use strict";

// const floorBtns = document.querySelectorAll('.floor__btn')
// const firstFloor = document.querySelector('.floor__btn--first')
// const doorLeft = document.querySelector('.elevator__door--left')
// const doorRight = document.querySelector('.elevator__door--right')
// const elevator = document.querySelector('#elevator')
// const clickedBtns = []
// // const currentBtn = clickedBtns[0]
// const firstFloorBtn =
//   firstFloor.getBoundingClientRect().top + window.pageYOffset
// console.log(firstFloorBtn)
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
//       elevatorMovement()
//       // animate()
//     }
//   })
// })
// let start
// let duration = 3000 // duration of the animation in milliseconds
// function animate(timestamp) {
//   if (start === undefined) start = timestamp
//   const elapsed = timestamp - start
//   const progress = Math.min(elapsed / duration, 1)
//   const currentBtn = clickedBtns[0]
//   const btnY = currentBtn.getBoundingClientRect().top + window.pageYOffset
//   currentBtn.classList.remove('floor__btn--active')
//   console.log('класс floor__btn--active удален')
//   currentBtn.classList.add('floor__btn--active')
//   elevator.style.top = `${btnY * progress}px`
//   elevator.style.transform = `translate(-50%, ${-45 * progress}%)`
//   doorLeft.style.width = `${5 * progress}%`
//   doorRight.style.width = `${5 * progress}%`
//   if (progress < 1) {
//     requestAnimationFrame(animate)
//   } else {
//     // animation has finished, do cleanup here
//     currentBtn.classList.remove('floor__btn--active')
//     console.log('класс floor__btn--active удален')
//     currentBtn.classList.remove('floor__btn--next')
//     console.log(clickedBtns)
//     if (clickedBtns.length > 0) {
//       clickedBtns.shift()
//       console.log('удален первый элемент массива')
//       if (clickedBtns.length > 0) {
//         requestAnimationFrame(animate)
//       } else {
//         // elevator.style.top = `${firstFloorBtn}px`
//         elevator.style.transform = `translate(-50%, -45%)`
//       }
//     }
//   }
// }
// function elevatorMovement() {
//   if (clickedBtns.length === 0) {
//     return
//   }
//   const currentBtn = clickedBtns[0]
//   const btnY = currentBtn.getBoundingClientRect().top + window.pageYOffset
//   currentBtn.classList.remove('floor__btn--active')
//   console.log('класс floor__btn--active удален')
//   currentBtn.classList.add('floor__btn--active')
//   requestAnimationFrame(() => {
//     elevator.style.top = `${btnY}px`
//     elevator.style.transform = `translate(-50%, -25%)`
//   })
//   requestAnimationFrame(() => {
//     doorLeft.style.width = `5%`
//     doorRight.style.width = `5%`
//   })
//   setTimeout(() => {
//       doorLeft.style.width = `5%`
//       doorRight.style.width = `5%`
//   }, 7000)
//   setTimeout(() => {
//     setTimeout(() => {
//       currentBtn.classList.remove('floor__btn--active')
//       console.log('класс floor__btn--active удален')
//       // console.log('2')
//       doorLeft.style.width = `50%`
//       doorRight.style.width = `50%`
//     }, 3000)
//     clickedBtns.shift()
//     console.log('удален первый элемент массива')
//     currentBtn.classList.remove('floor__btn--next')
//     console.log(clickedBtns)
//     // console.log('3')
//     if (clickedBtns.length > 0) {
//       elevatorMovement()
//     } else {
//       setTimeout(() => {
//         elevator.style.top = `${firstFloorBtn}px`
//         elevator.style.transform = `translate(-50%, -25%)`
//         console.log('Массив пуст')
//         firstFloor.classList.add('floor__btn--active')
//       }, 9000)
//       setTimeout(() => {
//         doorLeft.style.width = `5%`
//         doorRight.style.width = `5%`
//       }, 14000)
//       setTimeout(() => {
//         doorLeft.style.width = `50%`
//         doorRight.style.width = `50%`
//       }, 14000)
//     }
//   }, 9000)
// }
// const floorBtns = document.querySelectorAll('.floor__btn')
// const firstFloor = document.querySelector('.floor__btn--first')
// const doorLeft = document.querySelector('.elevator__door--left')
// const doorRight = document.querySelector('.elevator__door--right')
// const elevator = document.querySelector('#elevator')
// const clickedBtns = []
// const firstFloorBtn =
//   firstFloor.getBoundingClientRect().top + window.pageYOffset
// console.log(firstFloorBtn)
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
//       requestAnimationFrame(animate)
//     }
//   })
// })
// function animateElevator({ timing, draw, duration, timeStamp }) {
//   let start = performance.now()
//   console.log(timeStamp)
//   console.log('done')
//   requestAnimationFrame(function animate(time) {
//     // timeFraction изменяется от 0 до 1
//     let timeFraction = (time - start) / duration
//     if (timeFraction > 1) timeFraction = 1
//     // вычисление текущего состояния анимации
//     let progress = timing(timeFraction)
//     draw(progress) // отрисовать её
//     if (timeFraction < 1) {
//       requestAnimationFrame(animate)
//     }
//   })
// }
// let start
// let duration = 6000 // duration of the animation in milliseconds
// function animate(timestamp) {
//   // const btnY = currentBtn.getBoundingClientRect().top + window.pageYOffset
//   if (start === undefined) start = timestamp
//   const elapsed = timestamp - start
//   // calculate the progress as a percentage
//   const progress = Math.min(elapsed / duration, 1)
//   const currentBtn = clickedBtns[0]
//   // apply the animation
//   if (progress < 1) {
//     currentBtn.classList.remove('floor__btn--active')
//     console.log('класс floor__btn--active удален')
//     currentBtn.classList.add('floor__btn--active')
//     elevator.style.top = `${btnY * progress}px`
//     elevator.style.transform = `translate(-50%, ${-45 * progress}%)`
//     doorLeft.style.width = `${5 * progress}%`
//     doorRight.style.width = `${5 * progress}%`
//     requestAnimationFrame(animate)
//   } else {
//     // animation has finished, do cleanup here
//     currentBtn.classList.remove('floor__btn--active')
//     console.log('класс floor__btn--active удален')
//     doorLeft.style.width = `50%`
//     doorRight.style.width = `50%`
//     clickedBtns.shift()
//     console.log('удален первый элемент массива')
//     currentBtn.classList.remove('floor__btn--next')
//     console.log(clickedBtns)
//     if (clickedBtns.length > 0) {
//       elevatorMovement()
//     } else {
//       elevator.style.top = `${firstFloorBtn}px`
//       elevator.style.transform = `translate(-50%, -45%)`
//       console.log('Массив пуст')
//       firstFloor.classList.add('floor__btn--active')
//       doorLeft.style.width = `5%`
//       doorRight.style.width = `5%`
//       doorLeft.style.width = `50%`
//       doorRight.style.width = `50%`
//     }
//   }
// }
// requestAnimationFrame(animate)
// function elevatorMovement() {
//   if (clickedBtns.length === 0) {
//     return
//   }
//   const currentBtn = clickedBtns[0]
//   const btnY = currentBtn.getBoundingClientRect().top + window.pageYOffset
//   requestAnimationFrame(animateElevator)
//   setTimeout(() => {
//     currentBtn.classList.remove('floor__btn--active')
//     console.log('класс floor__btn--active удален')
//     currentBtn.classList.add('floor__btn--active')
//     elevator.style.top = `${btnY}px`
//     elevator.style.transform = `translate(-50%, -45%)`
//     // doorLeft.style.width = `0`
//     // doorRight.style.width = `0`
//     // console.log('1')
//   }, 6000)
//   setTimeout(() => {
//     doorLeft.style.width = `5%`
//     doorRight.style.width = `5%`
//   }, 10000)
//   setTimeout(() => {
//     setTimeout(() => {
//       currentBtn.classList.remove('floor__btn--active')
//       console.log('класс floor__btn--active удален')
//       // console.log('2')
//       doorLeft.style.width = `50%`
//       doorRight.style.width = `50%`
//     }, 4000)
//     clickedBtns.shift()
//     console.log('удален первый элемент массива')
//     currentBtn.classList.remove('floor__btn--next')
//     console.log(clickedBtns)
//     // console.log('3')
//     if (clickedBtns.length > 0) {
//       elevatorMovement()
//     } else {
//       setTimeout(() => {
//         elevator.style.top = `${firstFloorBtn}px`
//         elevator.style.transform = `translate(-50%, -45%)`
//         console.log('Массив пуст')
//         firstFloor.classList.add('floor__btn--active')
//       }, 9000)
//       setTimeout(() => {
//         doorLeft.style.width = `5%`
//         doorRight.style.width = `5%`
//       }, 14000)
//       setTimeout(() => {
//         doorLeft.style.width = `50%`
//         doorRight.style.width = `50%`
//       }, 17000)
//     }
//   }, 11000)
// }
// const floorBtns = document.querySelectorAll('.floor__btn')
// const firstFloor = document.querySelector('.floor__btn--first')
// const doorLeft = document.querySelector('.elevator__door--left')
// const doorRight = document.querySelector('.elevator__door--right')
// const elevator = document.querySelector('#elevator')
// const clickedBtns = []
// const firstFloorBtn =
//   firstFloor.getBoundingClientRect().top + window.pageYOffset
// console.log(firstFloorBtn)
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
//       animate()
//     }
//   })
// })
// let start
// let duration = 6000 // duration of the animation in milliseconds
// const currentBtn = clickedBtns[0]
// function animate(timestamp) {
//   if (start === undefined) start = timestamp
//   const elapsed = timestamp - start
//   // calculate the progress as a percentage
//   const progress = Math.min(elapsed / duration, 1)
//   // apply the animation
//   if (progress < 1) {
//     // const currentBtn = clickedBtns[0]
//     const btnY = currentBtn.getBoundingClientRect().top + window.pageYOffset
//     currentBtn.classList.remove('floor__btn--active')
//     console.log('класс floor__btn--active удален')
//     currentBtn.classList.add('floor__btn--active')
//     elevator.style.top = `${btnY * progress}px`
//     elevator.style.transform = `translate(-50%, ${-45 * progress}%)`
//     doorLeft.style.width = `${5 * progress}%`
//     doorRight.style.width = `${5 * progress}%`
//     requestAnimationFrame(animate)
//   } else {
//     // animation has finished, do cleanup here
//     // const currentBtn = clickedBtns.shift()
//     // clickedBtns.shift()
//     currentBtn.classList.remove('floor__btn--active')
//     console.log('класс floor__btn--active удален')
//     doorLeft.style.width = `50%`
//     doorRight.style.width = `50%`
//     console.log('удален первый элемент массива')
//     currentBtn.classList.remove('floor__btn--next')
//     console.log(clickedBtns)
//     if (clickedBtns.length > 0) {
//       start = undefined // reset the start time for the next animation
//       animate()
//     } else {
//       elevator.style.top = `${firstFloorBtn}px`
//       elevator.style.transform = `translate(-50%, -45%)`
//       console.log('Массив пуст')
//       firstFloor.classList.add('floor__btn--active')
//       doorLeft.style.width = `5%`
//       doorRight.style.width = `5%`
//       doorLeft.style.width = `50%`
//       doorRight.style.width = `50%`
//     }
//   }
// }
var floorBtns = document.querySelectorAll('.floor__btn');
var firstFloor = document.querySelector('.floor__btn--first');
var doorLeft = document.querySelector('.elevator__door--left');
var doorRight = document.querySelector('.elevator__door--right');
var elevator = document.querySelector('#elevator');
var clickedBtns = [];
var firstFloorBtn = firstFloor.getBoundingClientRect().top + window.pageYOffset;
console.log(firstFloorBtn);
floorBtns.forEach(function (btn) {
  btn.addEventListener('click', function () {
    if (btn.classList.contains('floor__btn--active')) {
      return;
    }

    var btnY = btn.getBoundingClientRect().top + window.pageYOffset;
    floorBtns.forEach(function (btn) {
      return btn.classList.remove('floor__btn--active');
    });
    clickedBtns.push(btn);
    console.log(clickedBtns);
    btn.classList.add('floor__btn--next');
    console.log(btnY);

    if (clickedBtns.length === 1) {
      elevatorMovement();
    }
  });
}); // function elevatorMovement() {
//   if (clickedBtns.length === 0) {
//     return
//   }
//   const currentBtn = clickedBtns[0]
//   const btnY = currentBtn.getBoundingClientRect().top + window.pageYOffset
//   let start = null
//   function step(timestamp) {
//     if (!start) start = timestamp
//     const progress = timestamp - start
//     if (progress < 6000) {
//       currentBtn.classList.remove('floor__btn--active')
//       console.log('класс floor__btn--active удален')
//       currentBtn.classList.add('floor__btn--active')
//       elevator.style.top = `${btnY}px`
//       elevator.style.transform = `translate(-50%, -20%)`
//     } else if (progress < 10000) {
//       doorLeft.style.width = `5%`
//       doorRight.style.width = `5%`
//     } else if (progress < 14000) {
//       currentBtn.classList.remove('floor__btn--active')
//       console.log('класс floor__btn--active удален')
//       doorLeft.style.width = `50%`
//       doorRight.style.width = `50%`
//       clickedBtns.shift()
//       console.log('удален первый элемент массива')
//       currentBtn.classList.remove('floor__btn--next')
//       console.log(clickedBtns)
//       if (clickedBtns.length > 0) {
//         elevatorMovement()
//       } else {
//         elevator.style.top = `${firstFloorBtn}px`
//         elevator.style.transform = `translate(-50%, -20%)`
//         console.log('Массив пуст')
//         firstFloor.classList.add('floor__btn--active')
//         doorLeft.style.width = `5%`
//         doorRight.style.width = `5%`
//         doorLeft.style.width = `50%`
//         doorRight.style.width = `50%`
//       }
//     }
//     if (progress < 17000) {
//       requestAnimationFrame(step)
//     }
//   }
//   requestAnimationFrame(step)
// }
// function elevatorMovement() {
//   if (clickedBtns.length === 0) {
//     return
//   }
//   const currentBtn = clickedBtns[0]
//   const btnY = currentBtn.getBoundingClientRect().top + window.pageYOffset
//   let start = null
//   function step(timestamp) {
//     if (!start) start = timestamp
//     const progress = timestamp - start
//     if (progress < 6000) {
//       currentBtn.classList.remove('floor__btn--active')
//       console.log('класс floor__btn--active удален')
//       currentBtn.classList.add('floor__btn--active')
//       elevator.style.top = `${btnY}px`
//       elevator.style.transform = `translate(-50%, -45%)`
//     } else if (progress < 10000) {
//       doorLeft.style.width = `5%`
//       doorRight.style.width = `5%`
//     } else if (progress < 14000) {
//       currentBtn.classList.remove('floor__btn--active')
//       console.log('класс floor__btn--active удален')
//       doorLeft.style.width = `50%`
//       doorRight.style.width = `50%`
//       clickedBtns.shift()
//       console.log('удален первый элемент массива')
//       currentBtn.classList.remove('floor__btn--next')
//       console.log(clickedBtns)
//       if (clickedBtns.length > 0) {
//         elevator.style.top = `${firstFloorBtn}px`
//         elevator.style.transform = `translate(-50%, -45%)`
//         console.log('Массив пуст')
//         firstFloor.classList.add('floor__btn--active')
//         doorLeft.style.width = `5%`
//         doorRight.style.width = `5%`
//         doorLeft.style.width = `50%`
//         doorRight.style.width = `50%`
//       }
//     }
//     if (progress < 17000) {
//       requestAnimationFrame(step)
//     } else if (clickedBtns.length > 0) {
//       elevatorMovement()
//     }
//   }
//   requestAnimationFrame(step)
// }