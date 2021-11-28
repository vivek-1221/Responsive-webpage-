const viv = document.querySelector("#mobile_nav");
viv.addEventListener("click", viv);

function vivek() {
    viv.classList.toggle("active");
    var kap = document.getElementById("mobile_nav");
    kap.classList.toggle("open");
    if(kap.classList.contains("open")){
        kap.style.backgroundColor ="red";
        kap.style.left = "0px"
    }
    else {
        kap.removeAttribute("style");
    }
}