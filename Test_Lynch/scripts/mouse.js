let cont = document.querySelector('html')
cont.onmousemove = applyCustomPointer;
let customPointer = document.getElementById('customPointer');

function applyCustomPointer(event) {
  customPointer.style.left = event.clientX - (customPointer.offsetWidth/2) + 'px';
  customPointer.style.top = event.clientY - (customPointer.offsetHeight/2) + 'px';
}
