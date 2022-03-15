let three = document.querySelector(".three")
let placeHolders= document.querySelectorAll(".place-holder")

three.addEventListener("dragstart", dragStart)

function dragStart(e) {
  e.dataTransfer.setData("text/plain", e.target.id)
  // setTimerout(() => {
  //   e.target.classList.add("hide");
  // }, 0);
}
 
placeHolders.forEach(placeHolder => {
  placeHolder.addEventListener("dragenter", dragEnter);
  placeHolder.addEventListener("dragover", dragOver);
  placeHolder.addEventListener("dragleave", dragLeave);
  placeHolder.addEventListener("drop", drop);
});

function dragEnter(e) {
  e.preventDefault();
  e.target.classList.add("drag-over");
}

function dragOver(e) {
  e.target.classList.add("drag-over");
}

function dragLeave(e) {
  e.preventDefault();
  e.target.classList.remove("drag-over");
}

function drop(e) {
  e.target.classList.remove("drag-over");
}