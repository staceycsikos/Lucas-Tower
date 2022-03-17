let towerA = document.querySelector("#left");
let towerB = document.querySelector("#mid");
let towerC = document.querySelector("#right");
let two = document.querySelector(".two");



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
  // console.log(parseInt(draggableElement.id)) // get the id in a number for comparsion

// console.log(draggableElement)

  
  if (dropzone.id === "right" && dropzone.childElementCount === 4) {
    setTimeout(reset, 5000)
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
