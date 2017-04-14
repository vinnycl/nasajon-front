var tamanhoTela = $(".main-banner").width();
var alturaTela = $(".main-banner").height();

$(".main-banner #opening-banner").attr("width", tamanhoTela);
$(".main-banner #opening-banner").attr("height", alturaTela);


var player;
function onYouTubePlayerAPIReady() {
    player = new YT.Player("opening-banner");
}

$( "#play-opening" ).click(function() {
	$(".main-banner #opening-banner, .main-banner a#pause-opening").fadeIn(400);
	player.playVideo();
});

$( "#pause-opening" ).click(function() {
	$(".main-banner #opening-banner, .main-banner a#pause-opening").fadeOut(400);
	player.pauseVideo();
});

$(".bx-banner").bxSlider({
	slideWidth: 1170,
	infiniteLoop: false,
	mode: 'horizontal',
	captions: false,
	pager: true,
	infiniteLoop: false,
	slideMargin: 0,
	nextSelector: '.bt-bn-next',
	prevSelector: '.bt-bn-prev'
});

$(".bx-features").bxSlider({
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

$(".bx-use").bxSlider({
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

$( ".atendimento" ).mouseenter(function() {
	$(".open-atendimento").show();
	$(this).addClass("ativo");
});

$( ".suporte" ).mouseenter(function() {
	$(".open-suporte").show();
	$(this).addClass("ativo");
});

$( ".atendimento" ).mouseleave(function() {
	$(".open-atendimento").hide();
	$(this).removeClass("ativo");
});

$( ".open-suporte" ).mouseleave(function() {
	$(".open-suporte").hide();
	$(this).removeClass("ativo");
});

$(".outter").mouseenter(function() {
	$(".open-suporte").hide();
	$( ".suporte" ).removeClass("ativo");
});




$(".map #svg-map path").click(function() {
	$(".map #svg-map path").removeClass("ativo");
	$(".map .enderecos ul").hide();
	$(this).addClass("ativo");
});

$(".map #svg-map path#norte").click(function() {
	$(".map .enderecos ul.enderecos-norte").fadeIn();
});

$(".map #svg-map path#nordeste").click(function() {
	$(".map .enderecos ul.enderecos-nordeste").fadeIn();
});

$(".map #svg-map path#sul").click(function() {
	$(".map .enderecos ul.enderecos-sul").fadeIn();
});

$(".map #svg-map path#sudeste").click(function() {
	$(".map .enderecos ul.enderecos-sudeste").fadeIn();
});

$(".map #svg-map path#centro").click(function() {
	$(".map .enderecos ul.enderecos-centro").fadeIn();
});

$("#go-top").click(function() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		var target = $(this.hash);target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		if (target.length) {
			$('html, body').animate({scrollTop: target.offset().top}, 400);
			return false;
		}
	}
});

$(window).scroll(function() {
	if ($(this).scrollTop() > 64) {
		$("#go-top").fadeIn(400);
		$("body").addClass("scrolled");
	}
	else {
		$("#go-top").fadeOut(400);
		$("body").removeClass("scrolled");
	}
});


// interna 

$(".conteudo-interativo").hide();

$( ".link-interativo" ).click(function(e) {
	e.preventDefault();
	$( ".link-interativo" ).removeClass("ativo" )
	$(".conteudo-interativo").hide("200");
	$( this ).toggleClass("ativo");
	$( this ).next().toggle("200");
});

