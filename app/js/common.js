// слайдер главного блока
$('.home-slider').slick({
    slidesToShow: 1,
    fade: true,
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>'
});

// слайдер категорий
$('.category-slider').slick({
    slidesToShow: 1,
    variableWidth: true,
    centerMode: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/prev.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/next.svg" alt=""></button>',
    appendArrows: '.category-slider__nav',
    responsive: [
        {
            breakpoint: 1099224,
            settings: {
                variableWidth: false,
                centerMode: false,
            }
        }
    ]
});



