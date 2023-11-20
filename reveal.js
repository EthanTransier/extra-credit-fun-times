window.addEventListener("click", function() {
    let containerTop = document.querySelector(".info");
    let containerBottom = document.querySelector(".info-bottom");
    let info = document.querySelectorAll(".hidden");
    let h1 = document.querySelector(".h1");
    let pos = containerTop.getBoundingClientRect();
    let start = document.getElementById('start')
    let size = window.innerWidth
    if(size >= 760){
        if (pos.top >= 0 && pos.bottom <= window.innerHeight) {
            containerTop.classList.add("hover");
            containerBottom.classList.add("hover"); 
            info.forEach(x => x.classList.add("hover"));
            h1.classList.add("hover");
            document.getElementById("bottom").classList.add("hover");
            document.getElementById("rightOne").classList.add("hover");
            document.getElementById("rightTwo").classList.add("hover");
            start.classList.add('hover')
        }
    }else{
        info = document.querySelectorAll('.hide')
        console.log(info)
        info.forEach(x => x.classList.add('reveal'))
    }
    
});
