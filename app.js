$(function() {


    /* HEADER */
    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPosition = $(window).scrollTop();
    let nav = $("#nav");
    let navToggle = $("#navToggle");



    checkScroll(scrollPosition,introH);


    $(window).on("scroll resize",function(){
        introH = intro.innerHeight();


        scrollPosition = $(this).scrollTop();

        checkScroll(scrollPosition,introH);

    });


    function checkScroll(scrollPosition,introH) {

        if(scrollPosition > introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }

    }


    /*smooth scrool*/

    $("[data-scroll]").on("click", function(event){
        event.preventDefault();

        let elementID = $(this).data('scroll');
        let elementOffset = $(elementID).offset().top;

        nav.removeClass("show");

        $("html,body").animate({
            scrollTop:elementOffset - 70
        }, 700);


        console.log(elementOffset);
    });

    /*BURGER */


        navToggle.on("click", function(event){
        event.preventDefault();

        nav.toggleClass("show");


    });

    /* REVIEWS */

    let slider = $("#reviewsSlider");

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
});









});
