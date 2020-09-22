$(".hamburger").on("click", function(){
    $("nav ul").toggleClass("active");
});

$(document).resize(function () {
    var screen = $(window);  

    if (screen.width < 1023) {
        $('li').removeClass('button');
    } else {
        $('li').addClass('button');
    }
});