// making click effects on both buttons
var buttons = document.querySelectorAll('button');

Array.prototype.forEach.call(buttons, function (b) {
  b.addEventListener('click', createRipple)
});

function createRipple(event) {
  var ripple = document.createElement('span');
  ripple.classList.add('ripple');
  
  var max = Math.max(this.offsetWidth, this.offsetHeight);
  
  ripple.style.width = ripple.style.height = max*2 + 'px';
  
  var rect = this.getBoundingClientRect();
  
  ripple.style.left = event.clientX - rect.left - max + 'px';
  ripple.style.top = event.clientY - rect.top - max + 'px';
  
  this.appendChild(ripple);
}

// increment button clicked and number change on screen
const plus = document.querySelector('.increment'),
minus = document.querySelector('.decrement'),
num = document.querySelector('.shownumber');

let a = 0;

plus.onclick = () => {
    a++;
    num.innerText = a;
    console.log(a);
};

minus.onclick = () => {
    a--;
    num.innerText = a;
    console.log(a);
};