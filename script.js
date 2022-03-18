let towerA = document.querySelector("#left");
let towerB = document.querySelector("#mid");
let towerC = document.querySelector("#right");
let two = document.querySelector(".two");
let button = document.querySelector(".rulesBtn")
let clickCount = 0

function rulesAppear() {
  rules = document.querySelectorAll(".rules")
  if (clickCount % 2 == 0) {
    rules.forEach(rule => rule.style.display = "block")
    clickCount ++
  } else {
    rules.forEach(rule => rule.style.display = "none")
    clickCount ++
  }
}

button.addEventListener("click", rulesAppear)



if (towerA.children.length > 0) {
  let children = towerA.children;

  for (let i = 0; i < children.length; i++) {
    if (i === 0) {
      children[i].setAttribute("draggable", "true");
    } else {
      children[i].setAttribute("draggable", "false");
    }
  }
}

function onDragStart(event) {
  event.dataTransfer.setData("text/plain", event.target.id);
  // console.log(towerA.children[0]);
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
      let x = parseInt(draggableElement.id);
      let y = parseInt(firstChild.id);
      let z = parseInt(firstChild?.nextElementSibling?.id) || false;

      console.log(`x: ${x}`, `y: ${y}`, `z: ${z}`);
      if (x < y) {
        dropzone.insertBefore(draggableElement, firstChild);
        event.dataTransfer.clearData();
        checkWinner();
      } else if (z) {
        if (!y && x < z) {
          dropzone.insertBefore(draggableElement, firstChild.nextElementSibling
          );
          event.dataTransfer.clearData();
        } else {
          event.dataTransfer.clearData();
        }
      } else {
        if (!y && !z) {
          dropzone.insertBefore(draggableElement, firstChild.nextElementSibling
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

  if (towerA.children.length >= 0) {
    let towerAchildren = towerA.children;

    for (let i = 0; i < towerAchildren.length; i++) {
      if (i === 0) {
        towerAchildren[i].setAttribute("draggable", "true");
      } else {
        towerAchildren[i].setAttribute("draggable", "false");
      }
    }
  }

  if (towerB.children.length >= 0) {
    let towerBchildren = towerB.children;

    for (let i = 0; i < towerBchildren.length; i++) {
      if (i === 0) {
        towerBchildren[i].setAttribute("draggable", "true");
      } else {
        towerBchildren[i].setAttribute("draggable", "false");
      }
    }
  }
  if (towerC.children.length >= 0) {
    let towerCchildren = towerC.children;

    for (let i = 0; i < towerCchildren.length; i++) {
      if (i === 0) {
        towerCchildren[i].setAttribute("draggable", "true");
      } else {
        towerCchildren[i].setAttribute("draggable", "false");
      }
    }
  }
}
