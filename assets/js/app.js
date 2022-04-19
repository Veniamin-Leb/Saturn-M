let about= $("#about");
let history = $("#history");
let abouttxt = $("#abouttxt");
let historytxt = $("#historytxt");
let burger= $("#burger");
let burgerclose=$("#burgerclose");
let menu = $("#menu");
let complex = $("#complex");
let complex_men = $("#complex_men");
let complex__plus = $("#complex__plus");
let gear = $("#gear");
let gear_men = $("#gear_men");
let gear__plus = $("#gear__plus");
let service = $("#service");
let service_men = $("#service_men");
let service__plus = $("#service__plus");
let shad = $("#shad");
complex.on("click", function(event){
    event.preventDefault();
    complex_men.toggleClass("visible");
    complex__plus.toggleClass("rot");
});
gear.on("click", function(event){
    event.preventDefault();
    gear_men.toggleClass("visible");
    gear__plus.toggleClass("rot");
});
service.on("click", function(event){
    event.preventDefault();
    service_men.toggleClass("visible");
    service__plus.toggleClass("rot");
});
burger.on("click", function(event){
    event.preventDefault();
    menu.removeClass("hidden");
    menu.addClass("visible");
    shad.removeClass("hidden");
});
burgerclose.on("click", function(event){
    event.preventDefault();
    menu.removeClass("visible");
    menu.addClass("hidden");
    shad.addClass("hidden");
});
history.on("click", function(event){
    event.preventDefault();
    about.removeClass("active");
    history.addClass("active");
    abouttxt.addClass("hidden");
    historytxt.removeClass("hidden");
});
about.on("click", function(event){
    event.preventDefault();
    about.addClass("active");
    history.removeClass("active");
    abouttxt.removeClass("hidden");
    historytxt.addClass("hidden");
});


$('.reviews__slider').slick({
    dots: false,
    infinite: true,
    arrows:true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: '<button type="button" class="slick-next"><img src="assets/IMG/arright.svg"></button>',
    prevArrow: '<button type="button" class="slick-prev"><img src="assets/IMG/arleft.svg"></button>',
    responsive: [
        {
        breakpoint: 1160,
        settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
        }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        }
]
});
$('.reviews__slidermob').slick({
    dots: false,
    infinite: true,
    arrows:true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '<button type="button" class="slick-next"><img src="assets/IMG/arright.svg"></button>',
    prevArrow: '<button type="button" class="slick-prev"><img src="assets/IMG/arleft.svg"></button>',
});
$('.partner__slider').slick({
    dots: false,
    infinite: true,
    arrows:false,
    speed: 300,
    autoplay: true,
    centerMode: true,
    slidesToShow: 9,
    slidesToScroll: 1,
    responsive: [
        {
        breakpoint: 1160,
        settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
        }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 550,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
]
});
$('.partner__slider2').slick({
    dots: false,
    infinite: true,
    arrows:false,
    speed: 300,
    autoplay: true,
    centerMode: true,
    slidesToShow: 9,
    slidesToScroll: 1,
    responsive: [
        {
        breakpoint: 1160,
        settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
        }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 550,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
]
});

