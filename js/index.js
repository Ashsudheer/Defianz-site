$(function () {
    $(document).scroll(function () {
        var $nav = $(".fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
    $('.card').on('mouseenter', function () {
        $(this).find('.card-text').slideDown(300);
    });
    $('.card').on('mouseleave', function (event) {
        $(this).find('.card-text').css({
            'display': 'none'
        });
    });
    $('.card-type').hover(
        function () {
            $(this).animate({
                marginTop: "-=4%",
            }, 200);
        },
        function(){
            $(this).animate({
                marginTop: "+=4%",
            }, 200);
        }
    );

    AOS.init();

});