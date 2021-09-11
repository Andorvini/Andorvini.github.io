

$(window).scroll(function(){
    $('.awaits').each(function(){
        var imagePos = $(this).offset().top;

        var TopOfWindow = $(window).scrollTop();
        if (imagePos <  TopOfWindow+650) {
            $(this).addClass("fadeInUp");
        }
    });
});

$(window).scroll(function(){
    $('.awaits__title').each(function(){
        var imagePos = $(this).offset().top;

        var TopOfWindow = $(window).scrollTop();
        if (imagePos <  TopOfWindow+650) {
            $(this).addClass("fadeInLeft");
        }
    });
});


$(window).scroll(function(){
    $('.form__title').each(function(){
        var imagePos = $(this).offset().top;

        var TopOfWindow = $(window).scrollTop();
        if (imagePos <  TopOfWindow+650) {
            $(this).addClass("fadeInRight");
        }
    });
});

$(window).scroll(function(){
    $('.form').each(function(){
        var imagePos = $(this).offset().top;

        var TopOfWindow = $(window).scrollTop();
        if (imagePos <  TopOfWindow+650) {
            $(this).addClass("fadeInUp");
        }
    });
});

$(window).scroll(function(){
    $('.rights').each(function(){
        var imagePos = $(this).offset().top;

        var TopOfWindow = $(window).scrollTop();
        if (imagePos <  TopOfWindow+650) {
            $(this).addClass("fadeInDown");
        }
    });
});



