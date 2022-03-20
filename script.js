let towerA = document.querySelector("#left");
let towerB = document.querySelector("#mid");
let towerC = document.querySelector("#right");
let two = document.querySelector(".two");
let button = document.querySelector(".rulesBtn");
let clickCount = 0;

function rulesAppear() {
  rules = document.querySelectorAll(".rules");
  if (clickCount % 2 == 0) {
    rules.forEach((rule) => (rule.style.display = "block"));
    clickCount++;
  } else {
    rules.forEach((rule) => (rule.style.display = "none"));
    clickCount++;
  }
}

button.addEventListener("click", rulesAppear);

function makeDraggable(tower) {
  if (tower.children.length >= 0) {
    let towerChildren = tower.children;

    for (let i = 0; i < towerChildren.length; i++) {
      if (i === 0) {
        towerChildren[i].setAttribute("draggable", "true");
      } else {
        towerChildren[i].setAttribute("draggable", "false");
      }
    }
  }
  
}

makeDraggable(towerA)

function onDragStart(event) {
  event.dataTransfer.setData("text/plain", event.target.id);
}

function onDragOver(event) {
  event.preventDefault();
  event.target.classList.add("drag-over");
}

function onDragLeave(event) {
  event.target.classList.remove("drag-over");
}

function reset() {
  left.append(...right.childNodes);
}

function onDrop(event) {
  event.target.classList.remove("drag-over");
  const id = event.dataTransfer.getData("text");
  const draggableElement = document.getElementById(id);
  const dropzone = event.target;
  let firstChild = dropzone.firstChild;
  function checkWinner() {
    if (towerA.children.length === 0 && towerC.children.length === 5) {
      let winner = document.querySelector(".winner");
      winner.style.display = "block";
      window.onclick = function () {
        winner.style.display = "none";
        setTimeout(reset, 2000);
      };
    }
  }

  if (dropzone.className === "place-holder") {
    if (firstChild) {
      let beingDropped = parseInt(draggableElement.id);
      let prevDropped = parseInt(firstChild.id);
      let nextInA = parseInt(firstChild?.nextElementSibling?.id) || false;

      if (beingDropped < prevDropped) {
        dropzone.insertBefore(draggableElement, firstChild);
        event.dataTransfer.clearData();
        checkWinner();
      } else if (nextInA) {
        if (!prevDropped && (beingDropped < nextInA)) {   
          dropzone.insertBefore(
            draggableElement,
            firstChild.nextElementSibling
          );
          event.dataTransfer.clearData();
        } else {
          event.dataTransfer.clearData();
        }
      } else {
        if (!prevDropped && !nextInA) {
          dropzone.insertBefore(
            draggableElement,
            firstChild.nextElementSibling
          );
          event.dataTransfer.clearData();
        } else {
          event.dataTransfer.clearData();
        }
      }
    } else {
      dropzone.insertBefore(draggableElement, firstChild);
      event.dataTransfer.clearData();
    }
  }
  makeDraggable(towerA)
  makeDraggable(towerB)
  makeDraggable(towerC)
}
