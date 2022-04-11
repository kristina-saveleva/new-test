jQuery(($) => {
    $('.select, .header__content-select').on('click', '.select__head, .header__content-select__head', function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).next().fadeOut();
        } else {
            $('.select__head, .header__content-select__head').removeClass('open');
            $('.select__list, .header__content-select__list').fadeOut();
            $(this).addClass('open');
            $(this).next().fadeIn();
        }
    });

    $('.select, .header__content-select').on('click', '.select__item, .header__content-select__item', function () {
        $('.select__head, .header__content-select__head').removeClass('open');
        $(this).parent().fadeOut();
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
    });

    $(document).click(function (e) {
        if (!$(e.target).closest('.select, .header__content-select').length) {
            $('.select__head, .header__content-select__head').removeClass('open');
            $('.select__list, .header__content-select__list').fadeOut();
        }
    });
});

(function () {

    "use strict";

    var toggles = document.querySelectorAll(".toggle-hamburger");

    for (var i = toggles.length - 1; i >= 0; i--) {
        var toggle = toggles[i];
        toggleHandler(toggle);
    };

    function toggleHandler(toggle) {
        toggle.addEventListener("click", function (e) {
            e.preventDefault();
            (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
        });
    }

})();


$(function () {
    $('.header__btn-menu').on('click', function () {
        $('.header__content-menu, .header__top-menu').fadeToggle();
    });
});

    
$(function setEqualWidth(){
        if ($(window).width() < 1260) {
            $( ".header__content-inner" ).prepend( $( ".select" ) );
            $( ".header__content-list" ).prepend( $( ".header__top form" ) );
            $( ".header__content-list" ).append( $( ".header__top-menu li" ) );
            $( ".header__content-list").prepend( $(".header__content-title") );
            $( ".header__top" ).addClass('hidden');
         }


         $(window).on('load', setEqualWidth);
         $(window).on('resize', function() {
            clearTimeout(window.resizedFinished);
            window.resizedFinished = setTimeout(function() {
              console.log('Resized finished.');
              setEqualWidth();
            }, 500);})
});
    