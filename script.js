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
  towerA.children[0].setAttribute("draggable", "true")
  towerA.children[2].setAttribute("draggable", "false")
};

function onDragStart(event) {
  event.dataTransfer.setData("text/plain", event.target.id);
  console.log(towerA.children[0])
}

function onDragOver(event) {
  event.preventDefault();
  event.target.classList.add("drag-over");
}

function onDragLeave(event) {
  event.target.classList.remove("drag-over");
}

function reset(){
  left.append(...right.childNodes)
}

function onDrop(event) {
  event.target.classList.remove("drag-over");
  const id = event.dataTransfer.getData("text");
  const draggableElement = document.getElementById(id);
  const dropzone = event.target;
  let firstChild = dropzone.firstChild;
  // lastdrop = dropzone.children[dropzone.children.length - 1]; // gets last item dropped
  if (towerA && towerC.childElementCount === 4) {
    let winner = document.querySelector(".winner")
    winner.style.display = "block";
    window.onclick = function () {
      winner.style.display = "none"
      setTimeout(reset, 2000)   // why didn't function work inside of here. 
    }
  }

  if (dropzone.className === "place-holder") {  
    if (firstChild.firstChild) {
      let x = parseInt(draggableElement.id)
      let y = parseInt(firstChild.id)
      if (x < y) {
      dropzone.insertBefore(draggableElement, firstChild); 
        event.dataTransfer.clearData();
      } else {
        event.dataTransfer.clearData();
      }
    } else {
        dropzone.insertBefore(draggableElement, firstChild); 
        event.dataTransfer.clearData();
    }
    // towerA.children[0].setAttribute("draggable", "true")

    if (towerA.children.length >= 0) {
      towerA.children[0].setAttribute("draggable", "true")
      towerA.children[1].setAttribute("draggable", "false")
    }

    if (towerB.children.length >= 0) {
      towerB.children[0].setAttribute("draggable", "true")
      towerB.children[1].setAttribute("draggable", "false")
    };
    if (towerC.children.length >= 0) {
      towerC.children[0].setAttribute("draggable", "true")
      towerC.children[1].setAttribute("draggable", "false")
    }
  }

  

  

}


//need to make it so the dropable is only the divs. 


// console.log(id)
// dropzone.insertBefore (draggableElement, dropzone.lastElementChild)
// console.log(draggableElement) dropzone.children[0].id
// console.log(dropzone.children)

// dropzone.appendChild(draggableElement);
// dropzone.insertBefore(draggableElement, dropzone.firstChild)

// if (dropzone.childNodes.length > 0) {
//   x = parseInt(dropzone.lastElementChild.id)
//   y = parseInt(dropzone.children[1].id)
//   console.log (x, y, x+y)
// }

// let three = document.querySelector(".three");
// let placeHolders = document.querySelectorAll(".place-holder");

// three.addEventListener("dragstart", dragStart);

// function dragStart(event) {
//   event.dataTransfer.setData("text", e.target.id);

// }

// // placeHolders.forEach((placeHolder) => {
// //   placeHolder.addEventListener("dragenter", dragEnter);
// //   placeHolder.addEventListener("dragover", dragOver);
// //   placeHolder.addEventListener("dragleave", dragLeave);
// //   placeHolder.addEventListener("drop", drop);
// // });

// function dragEnter(event) {
//   event.preventDefault();
//   event.target.classList.add("drag-over");
// }

// function dragOver(event) {
//   event.preventDefault();
//   event.target.classList.add("drag-over");
// }

// function dragLeave(event) {
//   event.target.classList.remove("drag-over");
// }

// function drop(event) {
//   console.log(event)
//   event.preventDefault()
//   event.target.classList.remove("drag-over");
//   const id = event.dataTransfer.getData("text")
//   const draggableElement = document.getElementById(id)
//   const dropZone = event.target
//   console.log(dropZone)
//   dropZone.appendChild(draggableElement)
//   event.dataTransfer.clearData()

//   // const id = e.dataTransfer.getData("text/plain");
//   // console.log(id)
//   // const draggable = document.getElementById(id);
//   // console.log(draggable)
//   // e.target.appendChild(draggable);
//   // draggable.classList.remove("hide");
// }
