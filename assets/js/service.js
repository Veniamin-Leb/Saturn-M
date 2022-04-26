$(document).ready(function(){
	var hMess = $('.imp__left h2');
  if(hMess.length >= 1) {
		hMess.each(function(){
  		var hMessName = $(this).text();
			$('.imp__right').append('<a href="#'+hMessName+'">'+hMessName+'</a>');
		});
  }
  addEvents();
  $('.imp__right').append('<div class="eventScroll"></div><div class="eventH1"></div>');
});

function addEvents() {
  $('.imp__right a').click(function() {
    $('body, html').stop();

    let destination = $('#' + $(this).text() ).offset().top+150;
    $('body,html').animate(
      {scrollTop:destination}, 487
    );
  });
  window.addEventListener('scroll', changeMenu);
}

function changeMenu() {
  let scrollBoxsHtml = $('.imp__left h2');
  let activeNummer = scrollBoxsHtml.length - 1;
  
  for (let i = scrollBoxsHtml.length - 1; i >= 0; i--) {
    if (scrollBoxsHtml[i].getBoundingClientRect().top >= 0) {
      activeNummer = i;
    } else {
      break;
    }
  }
  $('.imp__right a').removeClass('active')
  $('.imp__right a').eq(activeNummer).addClass('active');
}

