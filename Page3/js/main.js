// preloader starts
// makes sure the whole site is loaded

jQuery(window).load(function() {
        
// will first fade out the loading animation
	
jQuery(".status").fadeOut();
        
// will fade out the whole DIV that covers the website.
	
jQuery(".preloader").delay(1000).fadeOut("slow");
})
// preloader ends





// for animated header

$(window).on('scroll', function (){
	if ($(window) .scrollTop() > 2){
	  $("header").addClass("menu-bg");
	} else{
		$("header").removeClass("menu-bg");
	}
});







// for carousel Time Control
$('.carousel').carousel({
    interval: 5000
})






// Beat SEction owl Carousel

var beat = $("#beat-slider");
beat.owlCarousel({
    items:3,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:false
});





// Arrivals  Modern Beat nine slider

var arrival = $("#arrival-slider");
arrival.owlCarousel({
    items:4,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:false
});





// Arrivals  Modern Beat nine slider (responsive)

var arrival2 = $("#arrival-slider2");
arrival2.owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:false
});








// counter up for spceial offer section

$('.statistic-counter_two, .statistic-counter, .count-number').counterUp({
	delay: 10,
	time: 2000
});






// for clock
 $(document).ready(function() {
        $('.countdown-clock').TimeCircles({
            time:{
                Days:{color:"#e1a029"},Hours:{color:"#e1a029"},
                Minutes:{color:"#e1a029"},Seconds:{color:"#e1a029"}
            },
        })
    });



 $('.owl-carousel').owlCarousel({
        items:4,
        loop:false,
        center:true,
        margin:10,
        URLhashListener:true,
        autoplayHoverPause:true,
        startPosition: 'URLHash'
    });

	
	
	
	
	
// for section Accessories part
$(document).ready(function(){

    loadGallery(true, 'a.thumbnail');

    //This function disables buttons when needed
    function disableButtons(counter_max, counter_current){
        $('#show-previous-image, #show-next-image').show();
        if(counter_max == counter_current){
            $('#show-next-image').hide();
        } else if (counter_current == 1){
            $('#show-previous-image').hide();
        }
    }

    /**
     *
     * @param setIDs        Sets IDs when DOM is loaded. If using a PHP counter, set to false.
     * @param setClickAttr  Sets the attribute for the click handler.
     */

    function loadGallery(setIDs, setClickAttr){
        var current_image,
            selector,
            counter = 0;

        $('#show-next-image, #show-previous-image').click(function(){
            if($(this).attr('id') == 'show-previous-image'){
                current_image--;
            } else {
                current_image++;
            }

            selector = $('[data-image-id="' + current_image + '"]');
            updateGallery(selector);
        });

        function updateGallery(selector) {
            var $sel = selector;
            current_image = $sel.data('image-id');
            $('#image-gallery-caption').text($sel.data('caption'));
            $('#image-gallery-title').text($sel.data('title'));
            $('#image-gallery-image').attr('src', $sel.data('image'));
            disableButtons(counter, $sel.data('image-id'));
        }

        if(setIDs == true){
            $('[data-image-id]').each(function(){
                counter++;
                $(this).attr('data-image-id',counter);
            });
        }
        $(setClickAttr).on('click',function(){
            updateGallery($(this));
        });
    }
});







//new offer every week section
 $(function(){
        $('#specialOffer').vegas({
            delay:2000,
            slides:[
                {src:'images/subscriber-bg-1.jpg'},
                {src:'images/subscriber-bg-2.jpg'},
                {src:'images/subscriber-bg-3.jpg'}
            ]
        });
    });

	
	
	
	
	
	
	
	
	
	
	
// for Scroll Animation (wow.js)

$(function(){
    new WOW().init();
})







// Scroll to top

$(document).ready(function(){

    $(function(){

        $(document).on( 'scroll', function(){

            if ($(window).scrollTop() > 100) {
                $('.scroll-top-wrapper').addClass('show');
            } else {
                $('.scroll-top-wrapper').removeClass('show');
            }
        });

        $('.scroll-top-wrapper').on('click', scrollToTop);
    });

    function scrollToTop() {
        verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
        element = $('body');
        offset = element.offset();
        offsetTop = offset.top;
        $('html, body').animate({scrollTop: offsetTop}, 500, 'linear');
    }

});








// page 2 for Pupular Catagories
function toggleIcon(e) {
    $(e.target)
        .prev('.panel-heading')
        .find(".more-less")
        .toggleClass('glyphicon-plus glyphicon-minus');
}
$('.panel-group').on('hidden.bs.collapse', toggleIcon);
$('.panel-group').on('shown.bs.collapse', toggleIcon);





// page 3 smart Watch
$(document).ready(function () {
        $("#zoom_03").elevateZoom({ zoomType: "inner", zoomWindowFadeIn: 500, zoomWindowFadeOut: 750, cursor: "crosshair", gallery:'gallery_01', galleryActiveClass: "active", imageCrossfade: true, loadingIcon: "http://www.elevateweb.co.uk/spinner.gif"});

        $("#zoom_03").bind("click", function(e) {
            var ez =   $('#zoom_03').data('elevateZoom');
            ez.closeAll(); //NEW: This function force hides the lens, tint and window
            $.fancybox(ez.getGalleryList());
            return false;
        });

    });
	
	
	
 $(document).ready(function () {
        $("#img_01").elevateZoom({gallery:'gal1', cursor: 'pointer', galleryActiveClass: "active", imageCrossfade: true, loadingIcon: "http://www.elevateweb.co.uk/spinner.gif"});

        $("#img_01").bind("click", function(e) {
            var ez =   $('#img_01').data('elevateZoom');
            ez.closeAll(); //NEW: This function force hides the lens, tint and window
            $.fancybox(ez.getGalleryList());
            return false;
        });

    });	
	
	
	
	
//	page3 add watch	
$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});	







// for page 3 accessories part

    new Viewer(document.getElementById('gallery1'));
    new Viewer(document.getElementById('gallery2'));
	
	