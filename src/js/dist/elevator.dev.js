"use strict";

var floorBtns = document.querySelectorAll('.floor__btn');
var firstFloor = document.querySelector('.floor__btn--first');
var doorLeft = document.querySelector('.elevator__door--left');
var doorRight = document.querySelector('.elevator__door--right');
var elevator = document.querySelector('#elevator');
var clickedBtns = [];
var firstFloorBtn = firstFloor.getBoundingClientRect().top + window.pageYOffset;
console.log(firstFloorBtn);
var isMovingToFirstFloor = false;
floorBtns.forEach(function (btn) {
  btn.addEventListener('click', function () {
    if (btn.classList.contains('floor__btn--active') || isMovingToFirstFloor) {
      return;
    }

    floorBtns.forEach(function (btn) {
      return btn.classList.remove('floor__btn--active');
    });
    clickedBtns.push(btn);
    btn.classList.add('floor__btn--next');
    console.log(clickedBtns);

    if (clickedBtns.length === 1) {
      elevatorMovement();
    }
  });
});

function elevatorMovement() {
  if (clickedBtns.length === 0) {
    return;
  }

  var currentBtn = clickedBtns[0];
  var btnY = currentBtn.getBoundingClientRect().top + window.pageYOffset;
  console.log(btnY);
  currentBtn.classList.remove('floor__btn--active');
  currentBtn.classList.add('floor__btn--active');
  currentBtn.classList.remove('floor__btn--next');
  console.log('удален class next');
  elevator.style.top = "".concat(btnY, "px");
  elevator.style.transform = "translate(-50%, -19.75%)";
  elevator.addEventListener('transitionend', function () {
    doorLeft.style.width = "5%";
    doorRight.style.width = "5%";
    doorLeft.addEventListener('transitionend', function () {
      currentBtn.classList.remove('floor__btn--active');
      console.log('удален class active');
      doorLeft.style.width = "50%";
      doorRight.style.width = "50%";
      doorLeft.addEventListener('transitionend', function () {
        clickedBtns.shift();
        console.log('удален первый элемент массива');
        console.log(clickedBtns);

        if (clickedBtns.length > 0) {
          elevatorMovement();
        } else {
          isMovingToFirstFloor = true;
          console.log(isMovingToFirstFloor);
          elevator.style.top = "".concat(firstFloorBtn, "px");
          elevator.style.transform = "translate(-50%, -19.75%)";
          firstFloor.classList.add('floor__btn--active');
          doorLeft.style.width = "5%";
          doorRight.style.width = "5%";
          doorLeft.addEventListener('transitionend', function () {
            doorLeft.style.width = "50%";
            doorRight.style.width = "50%";
            doorLeft.addEventListener('transitionend', function () {
              isMovingToFirstFloor = false;
              console.log(isMovingToFirstFloor);
            }, {
              once: true
            });
          }, {
            once: true
          });
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