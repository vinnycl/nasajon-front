var tamanhoTela = $(".main-banner").width();
var alturaTela = $(".main-banner").height();

$(".main-banner #opening-banner").attr("width", tamanhoTela);
$(".main-banner #opening-banner").attr("height", alturaTela);


var player;
function onYouTubePlayerAPIReady() {
    player = new YT.Player('opening-banner');
}

$( "#play-opening" ).click(function() {
	$(".main-banner #opening-banner, .main-banner a#pause-opening").fadeIn(400);
	player.playVideo();
});

$( "#pause-opening" ).click(function() {
	$(".main-banner #opening-banner, .main-banner a#pause-opening").fadeOut(400);
	player.pauseVideo();
});

$('.bx-banner').bxSlider({
	slideWidth: 1170,
	infiniteLoop: false,
	mode: 'horizontal',
	captions: false,
	pager: false,
	infiniteLoop: false,
	slideMargin: 0,
	nextSelector: '.bt-bn-next',
	prevSelector: '.bt-bn-prev',
	nextText: '<span class="icon-arrow-right"></span>',
	prevText: '<span class="icon-arrow-left"></span>'
});

$('.bx-features').bxSlider({
	mode: 'horizontal',
	captions: false,
	pager: false,
	infiniteLoop: false,
	slideWidth: 270,
	slideMargin: 30,
	minSlides: 4,
	maxSlides: 4,
	nextSelector: '.bt-ft-next',
	prevSelector: '.bt-ft-prev',
	nextText: '<span class="icon-arrow-right"></span>',
	prevText: '<span class="icon-arrow-left"></span>'
});

$('.bx-use').bxSlider({
	mode: 'horizontal',
	captions: false,
	pager: false,
	minSlides: 2,
	maxSlides: 2,
	infiniteLoop: false,
	slideWidth: 570,
	slideMargin: 30,
	nextSelector: '.bt-use-next',
	prevSelector: '.bt-use-prev',
	nextText: '<span class="icon-arrow-right"></span>',
	prevText: '<span class="icon-arrow-left"></span>'
});

$('#go-top').click(function() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		var target = $(this.hash);target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		if (target.length) {
			$('html, body').animate({scrollTop: target.offset().top}, 400);
			return false;
		}
	}
});

$(window).scroll(function() {
	if ($(this).scrollTop() > 230) {
		$("#go-top").fadeIn(400);
	}
	else {
		$("#go-top").fadeOut(400);
	}
});