
let leftbtn = document.getElementById("slider-left")
let rightbtn = document.getElementById("slider-right")
let imageslider = document.querySelector(".slider__img")
let slidermargin = 0

rightbtn.addEventListener("click", function(){
    slidermargin = slidermargin + 100

    if(slidermargin > 200)
    {
        slidermargin = 0
        imageslider.style.marginleft= 0;
    }
    else{
        imageslider.style.marginLeft = "-" + slidermargin + "vw";
    }
})

leftbtn.addEventListener("click", function(){
    if(slidermargin == 0)
    {
        slidermargin = 200;
    }
    else{
        slidermargin = slidermargin -100;
    }
     
    imageslider.style.marginLeft = "-" + slidermargin + "vw";
})