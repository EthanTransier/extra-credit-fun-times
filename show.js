
// widths for each of the containers
let compLength = 0;
let lapLength = 0;
let virLength = 0;
let max = 100;

// Set each container to a variable
var computer = document.querySelector(".computer-repair");
var laptop = document.querySelector(".laptop-repair");
var virus = document.querySelector(".virus-removal");
let cCheck, lCheck, vCheck = false;
let cScroll, lScroll, vScroll = 0;


// methods that recursivly call themselves if they are less than the max
function compAnimate() {
    console.log(compLength);
    if(compLength <= max) {
        computer.style.width = `${compLength}vw`;
        compLength+=.5;
        setTimeout(compAnimate, 5);
    }
}

function lapAnimate() {
    if(lapLength <= max) {
        laptop.style.width = `${lapLength}vw`;
        lapLength+=.5;
        setTimeout(lapAnimate, 5);
    }
}

function virAnimate() {

    if(virLength <= max) {
        virus.style.width = `${virLength}vw`;
        virLength+=.5;
        setTimeout(virAnimate, 5);
    }
}


// OnScrollListener that initally calls the methods once they appear on the screen
window.addEventListener("scroll", function() {
    var computerPos = computer.getBoundingClientRect();
    var laptopPos = laptop.getBoundingClientRect();
    var virusPos = virus.getBoundingClientRect();

    if (computerPos.top >= 0 && computerPos.bottom <= window.innerHeight) {
        computer.classList.add("hover");
        cCheck = true;
        if(cCheck === true) {
            compAnimate();
        }
        
    }
    if (laptopPos.top >= 0 && laptopPos.bottom <= window.innerHeight) {
        laptop.classList.add("hover");
        lCheck = true;
        if(lCheck === true) {
            lapAnimate();
        }

    }
    if (virusPos.top >= 0 && virusPos.bottom <= window.innerHeight) {
        virus.classList.add("hover");
        vCheck = true;
        if(vCheck === true) {
            virAnimate();
        }
    }
});

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
     document.querySelector(".dropbtn").addEventListener("click", function () {
        document.querySelector(".dropdown-content").classList.toggle("show");
    });
  }
}
