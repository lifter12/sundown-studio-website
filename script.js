const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function go(){
  var elemc = document.querySelector("#elem-container");
  var fixed = document.querySelector("#fixed-image");
  elemc.addEventListener("mouseenter", function () {
    fixed.style.display = "block";
  });
  elemc.addEventListener("mouseleave", function () {
    fixed.style.display = "none";
  });
  var elems = document.querySelectorAll(".elem");
  elems.forEach((e) => {
    e.addEventListener("mouseenter", () => {
      var image = e.getAttribute("data-image");
      console.log(image);
      fixed.style.backgroundImage = `url(${image})`;
    });
  });
}
go()

 function swipperanimation(){
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 40,
    
  });

 }
 swipperanimation()

 function menu(){
  var menu = document.querySelector("nav h3");
  var full = document.querySelector("#full-scr");
  var nav = document.querySelector("nav img");
  var flag = 0;
  menu.addEventListener("click", () => {
    if (flag == 0) {
      full.style.top = 0;
      nav.style.opacity = 0;
      flag = 1;
    } else {
      full.style.top = "-100%";
      nav.style.opacity = 1;
      flag = 1;
    }
  });
 }

 menu()


  var loader = document.querySelector("#loader")
 setTimeout(()=>{
  loader.style.top="-100%"
 },4000)