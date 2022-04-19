let close= $("#close");
let block = $("#block1,#block2,#block3,#block4,#block5,#block6,#block7,#block8,#block9");
let description = $("#description");


block.on("click", function(event){
    event.preventDefault();
    description.removeClass("hidden");
    description.addClass("visible");
});
close.on("click", function(event){
    event.preventDefault();
    description.removeClass("visible");
    description.toggleClass("hidden");
});
$('.img').slick({
    dots: true,
    infinite: false,
    arrows:false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1
});