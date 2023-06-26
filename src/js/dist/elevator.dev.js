"use strict";

var floorBtns = document.querySelectorAll('.floor__btn');
var firstFloor = document.querySelector('.floor__btn--first');
var doorLeft = document.querySelector('.elevator__door--left');
var doorRight = document.querySelector('.elevator__door--right');
var elevator = document.querySelector('#elevator');
var upQueue = [];
var downQueue = [];
var firstFloorBtn = firstFloor.getBoundingClientRect().top + window.pageYOffset;
console.log(firstFloorBtn);
var isMovingDown = false;
var lastBtnY = firstFloorBtn;
floorBtns.forEach(function (btn) {
  btn.addEventListener('click', function () {
    if (btn.classList.contains('floor__btn--active')) {
      return;
    }

    var btnY = btn.getBoundingClientRect().top + window.pageYOffset;
    floorBtns.forEach(function (btn) {
      return btn.classList.remove('floor__btn--active');
    }); // if (
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
      upQueue.push(btn);
      console.log('элемент в массиве upQueue');
      console.log(upQueue);
    } else {
      if (btnY > lastBtnY) {
        downQueue.push(btn);
        console.log('элемент в массиве downQueue');
        console.log(downQueue);
      } else if (btnY < lastBtnY) {
        upQueue.push(btn);
        console.log('элемент в массиве upQueue');
        console.log(upQueue);
      }
    }

    lastBtnY = btnY;
    btn.classList.add('floor__btn--next');
    console.log(btnY);

    if (upQueue.length === 1 && downQueue.length === 0 && isMovingDown === false) {
      elevatorMovement(upQueue);
    } else if (downQueue.length === 1 && upQueue.length === 0 && isMovingDown === false) {
      elevatorMovement(downQueue);
    }
  });
});

function openDoors() {
  doorLeft.style.width = "5%";
  doorRight.style.width = "5%";
}

function closeDoors() {
  doorLeft.style.width = "50%";
  doorRight.style.width = "50%";
}

function moveElevator(btnY) {
  elevator.style.top = "".concat(btnY, "px");
  elevator.style.transform = "translate(-50%, -19.75%)";
}

function elevatorMovement(queue) {
  if (queue.length === 0) {
    return;
  }

  var currentBtn = queue[0];
  var btnY = currentBtn.getBoundingClientRect().top + window.pageYOffset;
  currentBtn.classList.remove('floor__btn--active');
  console.log('Класс floor__btn--active удален');
  currentBtn.classList.add('floor__btn--active');
  currentBtn.classList.remove('floor__btn--next');
  moveElevator(btnY);
  elevator.addEventListener('transitionend', function () {
    openDoors();
    doorLeft.addEventListener('transitionend', function () {
      currentBtn.classList.remove('floor__btn--active');
      console.log('Класс floor__btn--active удален');
      closeDoors();
      doorLeft.addEventListener('transitionend', function () {
        queue.shift();
        console.log('удален первый элемент массива');
        console.log(queue);

        if (queue.length > 0) {
          elevatorMovement(queue);
        } else {
          if (queue === downQueue && upQueue.length > 0 || upQueue.length === 0 && downQueue.length === 0) {
            isMovingDown = true;
            moveElevator(firstFloorBtn);
            console.log('Лифт вернулся на первый этаж');
            elevator.addEventListener('transitionend', function () {
              openDoors();
              doorLeft.addEventListener('transitionend', function () {
                closeDoors();
                doorLeft.addEventListener('transitionend', function () {
                  isMovingDown = false;
                  elevatorMovement(upQueue);
                }, {
                  once: true
                });
              }, {
                once: true
              });
            }, {
              once: true
            });
          } else if (queue === upQueue && downQueue.length > 0) {
            elevatorMovement(downQueue);
          }
        }
      }, {
        once: true
      });
    }, {
      once: true
    });
  }, {
    once: true
  });
}