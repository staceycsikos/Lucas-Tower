
function onDragStart(event) {
  event.dataTransfer.setData("text/plain", event.target.id);
}

function onDragOver(event) {
  event.preventDefault();
  event.target.classList.add("drag-over")
}

function onDragLeave(event) {
  event.target.classList.remove("drag-over")
}


function onDrop(event) {
  event.target.classList.remove("drag-over")
  // if () {
  
    
  // }
  const id = event.dataTransfer.getData("text");
  const draggableElement = document.getElementById(id)
  const dropzone = event.target;
 
  // console.log(id)
  // console.log(draggableElement)
  // console.log(dropzone)
  // if (dropzone.childNodes.length > 2) {
    // dropzone.children[0].id
  
  dropzone.appendChild(draggableElement);
  event.dataTransfer.clearData();
  console.log(dropzone.lastElementChild.id)

}



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
