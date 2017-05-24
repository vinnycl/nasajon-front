var tamanhoTela = $(".main-banner").width();
var alturaTela = $(".main-banner").height();

function closeModal () {
	$(".backdrop").remove();
}

function openModal (texto) {
	$("body").append("<div onclick='closeModal();' class='backdrop'><div class='modal'><div class='modal-body'><a onclick='closeModal();'>×</a><p><iframe id='opening-banner' src='http://www.youtube.com/embed/"+texto+"?rel=0&amp;enablejsapi=1&amp;modestbranding=1&amp;autohide=1&amp;showinfo=0&amp;controls=0'></iframe></p></div></div></div>");
}


var player;
function onYouTubePlayerAPIReady() {
	player = new YT.Player("opening-banner");
}

$( "#play-opening" ).click(function() {	
	openModal ("WNZoIM9fM2o");
});


if (tamanhoTela < 960) {
	$(".abrindo a").click(function(e) {
		e.preventDefault();
		$(this).next().toggle(200);
	});
	$(".main-menu-mb .close-mb-menu").click(function(e){
		e.preventDefault();
		$(".menu-down").hide(200);
	});
	$(".main-header .menu-mid li.menu-mobile a").click(function(e){
		e.preventDefault();
		$(".menu-down").toggle(200);
	});

	$(".main-header .menu-mid .search button").click(function(e){
		e.preventDefault();
		$(".main-header .menu-mid .search input").toggle(200);
	});
	$(".bx-banner").bxSlider({
		slideWidth: 280,
		infiniteLoop: false,
		mode: 'horizontal',
		captions: false,
		pager: false,
		infiniteLoop: false,
		slideMargin: 0,
		controls: false
	});
	$(".bx-features").bxSlider({
		mode: 'horizontal',
		captions: false,
		pager: true,
		infiniteLoop: false,
		slideWidth: 280,
		slideMargin: 30,
		minSlides: 1,
		maxSlides: 1,
		nextSelector: '.bt-ft-next',
		prevSelector: '.bt-ft-prev',
		nextText: '<span class="icon-arrow-right"></span>',
		prevText: '<span class="icon-arrow-left"></span>'
	});
	$(".bx-use").bxSlider({
		mode: 'horizontal',
		captions: false,
		pager: false,
		minSlides: 1,
		maxSlides: 1,
		infiniteLoop: false,
		slideWidth: 280,
		slideMargin: 30,
		nextSelector: '.bt-use-next',
		prevSelector: '.bt-use-prev',
		nextText: '<span class="icon-arrow-right"></span>',
		prevText: '<span class="icon-arrow-left"></span>'
	});
	$(".bx-award").bxSlider({
		mode: 'horizontal',
		captions: false,
		pager: false,
		minSlides: 1,
		maxSlides: 1,
		infiniteLoop: false,
		slideWidth: 280,
		slideMargin: 30,
		nextSelector: '.bt-award-next',
		prevSelector: '.bt-award-prev',
		nextText: '<span class="icon-arrow-right"></span>',
		prevText: '<span class="icon-arrow-left"></span>'
	});
	$(".bx-clientes").bxSlider({
		mode: 'horizontal',
		captions: false,
		pager: false,
		minSlides: 1,
		maxSlides: 1,
		infiniteLoop: false,
		slideWidth: 280,
		slideMargin: 30,
		nextSelector: '.bt-clientes-next',
		prevSelector: '.bt-clientes-prev',
		nextText: '<span class="icon-arrow-right"></span>',
		prevText: '<span class="icon-arrow-left"></span>'
	});
	$(".bx-solucoes").bxSlider({
		mode: 'horizontal',
		captions: false,
		pager: true,
		minSlides: 1,
		maxSlides: 1,
		infiniteLoop: false,
		slideWidth: 280,
		slideMargin: 30,
		nextSelector: '.bt-solucoes-next',
		prevSelector: '.bt-solucoes-prev',
		nextText: '<span class="icon-arrow-right"></span>',
		prevText: '<span class="icon-arrow-left"></span>'
	});
}
else {
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




}



// interna 


$( ".link-interativo" ).click(function(e) {
	e.preventDefault();

	$( this ).toggleClass("ativo");
	$( this ).next().toggle("200");
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



