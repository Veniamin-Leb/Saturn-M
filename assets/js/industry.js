
let close1= $("#close1");
let close2= $("#close2");
let close3= $("#close3");
let close4= $("#close4");
let close5= $("#close5");
let close6= $("#close6");
let close7= $("#close7");
let close8= $("#close8");
let close9= $("#close9");

let block1 = $("#block1");
let block2 = $("#block2");
let block3 = $("#block3");
let block4 = $("#block4");
let block5 = $("#block5");
let block6 = $("#block6");
let block7 = $("#block7");
let block8 = $("#block8");
let block9 = $("#block9");

let description1 = $("#description1");
let description2 = $("#description2");
let description3 = $("#description3");
let description4 = $("#description4");
let description5 = $("#description5");
let description6 = $("#description6");
let description7 = $("#description7");
let description8 = $("#description8");
let description9 = $("#description9");


block1.on("click", function(event){
    event.preventDefault();
    description1.removeClass("hidden");
    description1.addClass("visible");
});
close1.on("click", function(event){
    event.preventDefault();
    description1.removeClass("visible");
    description1.toggleClass("hidden");
});

block2.on("click", function(event){
    event.preventDefault();
    description2.removeClass("hidden");
    description2.addClass("visible");
});
close2.on("click", function(event){
    event.preventDefault();
    description2.removeClass("visible");
    description2.toggleClass("hidden");
});

block3.on("click", function(event){
    event.preventDefault();
    description3.removeClass("hidden");
    description3.addClass("visible");
});
close3.on("click", function(event){
    event.preventDefault();
    description3.removeClass("visible");
    description3.toggleClass("hidden");
});

block4.on("click", function(event){
    event.preventDefault();
    description4.removeClass("hidden");
    description4.addClass("visible");
});
close4.on("click", function(event){
    event.preventDefault();
    description4.removeClass("visible");
    description4.toggleClass("hidden");
});

block5.on("click", function(event){
    event.preventDefault();
    description5.removeClass("hidden");
    description5.addClass("visible");
});
close5.on("click", function(event){
    event.preventDefault();
    description5.removeClass("visible");
    description5.toggleClass("hidden");
});

block6.on("click", function(event){
    event.preventDefault();
    description6.removeClass("hidden");
    description6.addClass("visible");
});
close6.on("click", function(event){
    event.preventDefault();
    description6.removeClass("visible");
    description6.toggleClass("hidden");
});

block7.on("click", function(event){
    event.preventDefault();
    description7.removeClass("hidden");
    description7.addClass("visible");
});
close7.on("click", function(event){
    event.preventDefault();
    description7.removeClass("visible");
    description7.toggleClass("hidden");
});

block8.on("click", function(event){
    event.preventDefault();
    description8.removeClass("hidden");
    description8.addClass("visible");
});
close8.on("click", function(event){
    event.preventDefault();
    description8.removeClass("visible");
    description8.toggleClass("hidden");
});

block9.on("click", function(event){
    event.preventDefault();
    description9.removeClass("hidden");
    description9.addClass("visible");
});
close9.on("click", function(event){
    event.preventDefault();
    description9.removeClass("visible");
    description9.toggleClass("hidden");
});

$('.img').slick({
    dots: true,
    infinite: false,
    arrows:false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1
});