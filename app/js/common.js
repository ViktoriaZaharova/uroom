// слайдер главного блока
$('.home-slider').slick({
    slidesToShow: 1,
    fade: true,
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>'
});

// слайдер категорий
$(document).ready(function () {
    $('.category-slider').each(function () {
        $(this).slick({
            slidesToShow: 1,
            variableWidth: true,
            centerMode: true,
            prevArrow: '<button type="button" class="slick-prev"><img src="img/prev.svg" alt=""></button>',
            nextArrow: '<button type="button" class="slick-next"><img src="img/next.svg" alt=""></button>',
            appendArrows: $(this).parents('.tabs__content').find('.category-slider__nav'),
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        variableWidth: false,
                        centerMode: false,
                    }
                }
            ]
        });
    });
});

// переключение слайдера
$(function () {

    $('ul.tabs__caption').on('click', 'li:not(.active)', function () {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');

        $('.tabs__content.active').find('.slick-slider').slick('setPosition');
    });

});



