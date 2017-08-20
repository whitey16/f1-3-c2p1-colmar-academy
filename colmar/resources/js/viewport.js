// plays video only when video is fully visible on screen
$(window).scroll(function() {
$('video').each(function(){
    if ($(this).visible()) {
        $(this)[0].play();
    } else {
        $(this)[0].pause();
    }
})
});
