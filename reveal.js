window.addEventListener("scroll", function() {
    let containerTop = document.querySelector(".info");
    let containerBottom = document.querySelector(".info-bottom");
    let info = document.querySelectorAll(".hidden");
    let h1 = document.querySelector(".h1");
    let pos = containerTop.getBoundingClientRect();

    if (pos.top >= 0 && pos.bottom <= window.innerHeight) {
        containerTop.classList.add("hover");
        containerBottom.classList.add("hover"); 
        info.forEach(x => x.classList.add("hover"));
        h1.classList.add("hover");
    }
});
