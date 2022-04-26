
let nav = $("#navbar")
let main = $("#main");
let mainH;
let scrollPos = $(window).scrollTop();

$(window).on("scroll load resize", function(){
  mainH = main.innerHeight();
  scrollPos = $(this).scrollTop();


  if (scrollPos > mainH) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});