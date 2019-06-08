/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  // Container on whom we listen mousemove
var container = document.getElementById('bug');
// Our cute little bee
var bee = document.getElementById('bee');
// Cute little bees body
var beeBody = document.getElementsByClassName('bee-body')[0];
// Cute little bees head
var beeHead = document.getElementsByClassName('bee-head')[0];

var lastOffsetX;

container.addEventListener('mousemove', _.throttle(function(e) {

  //Rotate bee in direction that mouse is moving
  if (e.offsetX < lastOffsetX) {
    bee.style.transform = "rotateY(180deg)";
  } else {
    bee.style.transform = "rotateY(0deg)";
  }
  lastOffsetX = e.offsetX;
  
  // Don't let our little bee go off the screen :)
  if ((e.offsetY + 25) > container.offsetHeight) {
    bee.style.top = e.offsetY - 25 + 'px';
  } else {
    bee.style.top = e.offsetY + 25 + 'px';
  }

  if ((e.offsetX + 25) > container.offsetWidth) {
    bee.style.left = e.offsetX - 65 + 'px';
  } else {
    bee.style.left = e.offsetX - 25 + 'px';
  }
  
  beeHead.classList.remove('idle-head');
  beeBody.classList.remove('idle-body');

  // Remove last timer and create new one.
  // If mouse isn't moved in the next n seconds our timer will trigger.
  clearTimeout(mouseStopTimer);
  var mouseStopTimer = setTimeout(mouseStop(e), 1000);
}, 100))

function mouseStop(e) {
  beeHead.classList.add('idle-head');
  beeBody.classList.add('idle-body');

}
  