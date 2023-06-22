"use strict";

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
//       elevatorMovement()
//     }
//   })
// })
// function animateElevator(timestamp, start, duration, from, to) {
//   const progress = timestamp - start
//   const currentY = from + (to - from) * (progress / duration)
//   if (progress < duration) {
//     elevator.style.top = `${currentY}px`
//     elevator.style.transform = `translate(-50%, -45%)`
//     requestAnimationFrame(timestamp =>
//       animateElevator(timestamp, start, duration, from, to)
//     )
//   } else {
//     elevator.style.top = `${to}px`
//     elevator.style.transform = `translate(-50%, -45%)`
//   }
// }
// function animateDoors(timestamp, start, duration, from, to, isClosing) {
//   const progress = timestamp - start
//   const currentWidth = from + (to - from) * (progress / duration)
//   if (progress < duration) {
//     doorLeft.style.width = `${currentWidth}%`
//     doorRight.style.width = `${currentWidth}%`
//     requestAnimationFrame(timestamp =>
//       animateDoors(timestamp, start, duration, from, to, isClosing)
//     )
//   } else {
//     if (isClosing) {
//       doorLeft.style.width = `${to}%`
//       doorRight.style.width = `${to}%`
//     } else {
//       doorLeft.style.width = `${from}%`
//       doorRight.style.width = `${from}%`
//     }
//   }
// }
// function elevatorMovement() {
//   if (clickedBtns.length === 0) {
//     return
//   }
//   const currentBtn = clickedBtns[0]
//   const btnY = currentBtn.getBoundingClientRect().top + window.pageYOffset
//   setTimeout(() => {
//     currentBtn.classList.remove('floor__btn--active')
//     console.log('класс floor__btn--active удален')
//     currentBtn.classList.add('floor__btn--active')
//     requestAnimationFrame(timestamp =>
//       animateElevator(
//         timestamp,
//         performance.now(),
//         6000,
//         parseFloat(elevator.style.top),
//         btnY
//       )
//     )
//   }, 6000)
//   setTimeout(() => {
//     requestAnimationFrame(timestamp =>
//       animateDoors(timestamp, performance.now(), 3000, 50, 5, true)
//     )
//   }, 10000)
//   setTimeout(() => {
//     setTimeout(() => {
//       currentBtn.classList.remove('floor__btn--active')
//       console.log('класс floor__btn--active удален')
//       requestAnimationFrame(timestamp =>
//         animateDoors(timestamp, performance.now(), 3000, 5, 50, false)
//       )
//     }, 4000)
//     clickedBtns.shift()
//     console.log('удален первый элемент массива')
//     currentBtn.classList.remove('floor__btn--next')
//     console.log(clickedBtns)
//     if (clickedBtns.length > 0) {
//       elevatorMovement()
//     } else {
//       setTimeout(() => {
//         requestAnimationFrame(timestamp =>
//           animateElevator(
//             timestamp,
//             performance.now(),
//             9000,
//             parseFloat(elevator.style.top),
//             firstFloorBtn
//           )
//         )
//         console.log('Массив пуст')
//         firstFloor.classList.add('floor__btn--active')
//       }, 9000)
//       setTimeout(() => {
//         requestAnimationFrame(timestamp =>
//           animateDoors(timestamp, performance.now(), 3000, 50, 5, true)
//         )
//       }, 14000)
//       setTimeout(() => {
//         requestAnimationFrame(timestamp =>
//           animateDoors(timestamp, performance.now(), 3000, 5, 50, false)
//         )
//       }, 17000)
//     }
//   }, 11000)
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
    } // const btnY = btn.getBoundingClientRect().top + window.pageYOffset


    floorBtns.forEach(function (btn) {
      return btn.classList.remove('floor__btn--active');
    });
    clickedBtns.push(btn);
    console.log(clickedBtns);
    btn.classList.add('floor__btn--next'); // console.log(btnY)

    if (clickedBtns.length === 1) {
      elevatorMovement();
    }
  });
});
var btnY = btn.getBoundingClientRect().top + window.pageYOffset;
var start = null;
var duration = 6000; // duration of the animation in milliseconds

var initialY = 0; // initial position of the elevator

var targetY = btnY; // target position of the elevator

var initialWidth = 50; // initial width of the doors

var targetWidth = 5; // target width of the doors

function animateElevator(timestamp) {
  if (!start) start = timestamp;
  var progress = timestamp - start;
  var newY = initialY + (targetY - initialY) * (progress / duration);
  elevator.style.top = "".concat(newY, "px");
  elevator.style.transform = "translate(-50%, -45%)";

  if (progress < duration) {
    requestAnimationFrame(animateElevator);
  } else {// continue with the rest of your code
  }
}

function animateDoors(timestamp) {
  if (!start) start = timestamp;
  var progress = timestamp - start;
  var newWidth = initialWidth + (targetWidth - initialWidth) * (progress / duration);
  doorLeft.style.width = "".concat(newWidth, "%");
  doorRight.style.width = "".concat(newWidth, "%");

  if (progress < duration) {
    requestAnimationFrame(animateDoors);
  } else {// continue with the rest of your code
  }
}

requestAnimationFrame(animateElevator);
requestAnimationFrame(animateDoors);

function elevatorMovement() {
  if (clickedBtns.length === 0) {
    return;
  }

  var currentBtn = clickedBtns[0];
  var btnY = currentBtn.getBoundingClientRect().top + window.pageYOffset; // const elementY = btnY + 50

  console.log(btnY);
  requestAnimationFrame(animateElevator);
  requestAnimationFrame(animateDoors); // requestAnimationFrame(() => {
  //   currentBtn.classList.remove('floor__btn--active')
  //   console.log('класс floor__btn--active удален')
  //   currentBtn.classList.add('floor__btn--active')
  //   elevator.style.top = `${btnY}px`
  //   elevator.style.transform = `translate(-50%, -20%)`
  //   doorLeft.style.width = `5%`
  //   doorRight.style.width = `5%`
  //   // doorLeft.style.width = `0`
  //   // doorRight.style.width = `0`
  //   // console.log('1')
  // })
  // requestAnimationFrame(() => {
  //   doorLeft.style.width = `5%`
  //   doorRight.style.width = `5%`
  // })

  setTimeout(function () {
    currentBtn.classList.remove('floor__btn--active');
    console.log('класс floor__btn--active удален');
    requestAnimationFrame(function () {
      // console.log('2')
      doorLeft.style.width = "50%";
      doorRight.style.width = "50%";
    }); // clickedBtns.shift()

    console.log('удален первый элемент массива');
    currentBtn.classList.remove('floor__btn--next');
    console.log(clickedBtns); // console.log('3')

    if (clickedBtns.length > 0) {
      elevatorMovement();
    } else {
      requestAnimationFrame(function () {
        elevator.style.top = "".concat(firstFloorBtn, "px");
        elevator.style.transform = "translate(-50%, -20%)";
        console.log('Массив пуст');
        firstFloor.classList.add('floor__btn--active');
      });
      requestAnimationFrame(function () {
        doorLeft.style.width = "5%";
        doorRight.style.width = "5%";
      });
      requestAnimationFrame(function () {
        doorLeft.style.width = "50%";
        doorRight.style.width = "50%";
      });
    }
  }, 5000);
} // const floorBtns = document.querySelectorAll('.floor__btn')
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
//       elevatorMovement()
//     }
//   })
// })
// function elevatorMovement() {
//   if (clickedBtns.length === 0) {
//     return
//   }
//   const currentBtn = clickedBtns[0]
//   const btnY = currentBtn.getBoundingClientRect().top + window.pageYOffset
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