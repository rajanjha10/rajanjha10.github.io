$(function(){
	"use strict";
	var wind=$(window);
	$(".navbar-nav").singlePageNav({
		speed:1e3,
		currentClass:"active",
		offset:60});
	wind.on("scroll",function(){
		var bodyScroll=wind.scrollTop(),
		navbar=$(".navbar");
		if(bodyScroll>300){
			navbar.show()
		}
		else{
			var $nav = $(".navbar-collapse");
        	var _opened = $nav.hasClass("in");
        	if(_opened == true)
        		$nav.collapse('hide');
			navbar.hide();
		}
		$(':focus').blur();
	});
	$(".caption h4 span").typed({
		strings:["Computer Engineer","Competitive Programmer","Software Engineer"],
		loop:true,
		startDelay:1e3,
		backDelay:2e3});
	$(".button-scroll, .c-scroll").on("click",function(){
		var scrollTo=$(this).attr("data-scrollTo");
		$("body, html").animate({
			scrollTop:$("#"+scrollTo).offset().top-60},1e3)});
	$(document).click(function (event) {
        var clickover = $(event.target);
        var $navbar = $(".navbar-collapse");
        var _opened = $navbar.hasClass("in");
        if (_opened === true && !clickover.hasClass("navbar-toggle")) {
            $("button.navbar-toggle").click();
        }
    });
	wind.on("scroll",function(){
		$(".progress-main .progress-bar").each(function(){
			var bottom_of_object=$(this).offset().top+$(this).outerHeight();
			var bottom_of_window=$(window).scrollTop()+$(window).height();
			var myVal=$(this).attr("data-value");
			if(bottom_of_window>bottom_of_object){
				$(this).css({width:myVal})}})});
	$(".counter").counterUp({
		delay:10,time:1500});
	$(".blog .owl-carousel").owlCarousel({
		loop:true,
		mouseDrag:false,
		autoplay:true,
		smartSpeed:500,
		dots:false,
		margin:30,
		responsiveClass:true,
		responsive:{0:{items:1},600:{items:2},1e3:{items:3}}});
	$(".exp .owl-carousel").owlCarousel({
		items:1,loop:true,mouseDrag:false,autoplay:false,smartSpeed:500});
	wind.stellar();
	$(".owl-carousel").owlCarousel({
		items:1,loop:true,mouseDrag:false,autoplay:true,smartSpeed:500});
	wind.stellar();
	$(".view").magnificPopup({
		delegate:"a",type:"iframe"});
	$(".gallery").isotope({
		itemSelector:".item-img"});
	var $gallery=$(".gallery").isotope({});
	$(".filtering").on("click","span",function(){
		var filterValue=$(this).attr("data-filter");
		$gallery.isotope({filter:filterValue})});
	$(".filtering").on("click","span",function(){
		$(this).addClass("active").siblings().removeClass("active")})});

$(window).on("load",function(){
	$(".loading").fadeOut(500);
	$('.edu').addClass('hide');
	$('.expitem a').click(function(e){
        e.preventDefault();
        $('.expitem a').removeClass('active');
        fil = $(this).attr('ID');
        $(this).addClass('active');
        if(fil=='work'){
        	$('.edu').addClass('hide');
        	$('.work').removeClass('hide')
        }
        else{
        	$('.work').addClass('hide');
        	$('.edu').removeClass('hide');	
        }
    });
    var filterValue=$('.filtering .active').attr("data-filter");
	$(".gallery").isotope({}).isotope({filter:filterValue});
	$("#contact-form").validator();
	$("#contact-form").on("submit",function(e){
		//https://formcarry.com/s/eGBgTeUhNdc
		//https://formspree.io/xwkvawkg
		//https://www.enformed.io/98bk4z1e
		var name = $(this).serializeArray()[0].value;
		function success(){
    			var messageText= "Hey " + name + ", Your Message was delievered successfully";
				var alertBox='<div class="alert alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>'+messageText+"</div>";
				$("#contact-form").find(".messages").html(alertBox);
				$("#contact-form")[0].reset();
			}
		function error(){
				var messageText= "Hey " + name + ", Oops! There was a problem sending your message";
				var alertBox='<div class="alert alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>'+messageText+"</div>";
				$("#contact-form").find(".messages").html(alertBox);
			}
		if($(this).serializeArray()[3].value.length >= 100){
			e.preventDefault();
			var data = new FormData($(this)[0]);
			var xhr = new XMLHttpRequest();
	    	xhr.open("POST", "https://formspree.io/xwkvawkg");
	    	xhr.setRequestHeader("Accept", "application/json");
	    	xhr.onreadystatechange = function() {
      			if (xhr.readyState !== XMLHttpRequest.DONE) return;
      			if (xhr.status === 200) {
        			success(xhr.response, xhr.responseType);
      			} 
      			else {
        			error(xhr.status, xhr.response, xhr.responseType);
      			}
    		};
    		xhr.send(data);
    	}
    	else{
    		window.setTimeout(function() {
        		success();
    		}, 0);
    	}
	});
});
