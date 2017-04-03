$(document).ready(function () {
     $('.bx-slider').bxSlider({
         auto: false,
         controls: false,
         pause: 4000
     });
    $('#toggle-sub-menu').on('click', function () {
        $('#sub-menu').toggleClass('hidden');
        $(this).parent().toggleClass('active');
    });
    $('.btn-play').click(function () {
        $(this).closest('.embed-responsive').children('img').css("display", "none");
        var video = '<iframe class="embed-responsive-item" src="' + $(this).attr('data-video') + '?autoplay=1&rel=0"></iframe>';
        $(this).replaceWith(video);
    });
});