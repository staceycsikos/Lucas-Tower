let towerA = document.querySelector("#left");
let towerB = document.querySelector("#mid");
let towerC = document.querySelector("#right");
let two = document.querySelector(".two");
// let towers = towerA + towerB
// console.log(towerA.children.length)

/// have to change so only top element is moveable.
/// maybe something to do with last drop? but then how
/// will it affect the first move?
if (towerA.children.length > 0) {
  // towerA.children[0].setAttribute("draggable", "true");
  // towerA.children[2].setAttribute("draggable", "false");
  // console.log(towerA.children);
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
      console.log("Part 1");
      let x = parseInt(draggableElement.id);
      let y = parseInt(firstChild.id);
      let z = parseInt(firstChild?.nextElementSibling?.id) || false;
      console.log(firstChild);
      console.log(`x: ${x}`, `y: ${y}`, `z: ${z}`);
      if (x < y) {
        console.log("Part 2");
        dropzone.insertBefore(draggableElement, firstChild);
        event.dataTransfer.clearData();
        checkWinner();
      } else if (z) {
        console.log("Part 3");
        if (!y && x < z) {
          console.log("Part 4");
          dropzone.insertBefore(
            draggableElement,
            firstChild.nextElementSibling
          );
          event.dataTransfer.clearData();
        } else {
          console.log("Part 5");
          event.dataTransfer.clearData();
        }
      } else {
        if (!y && !z) {
          dropzone.insertBefore(
            draggableElement,
            firstChild.nextElementSibling
          );
          event.dataTransfer.clearData();
        } else {
          console.log("Part 6");
          event.dataTransfer.clearData();
        }
      }
    } else {
      console.log("Part 7");
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
