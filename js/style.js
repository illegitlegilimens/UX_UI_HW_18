$(".hamburger").on("click", function(){
    $(".hamburger").toggleClass("active");
    if($(".hamburger").toggleClass("active")){
        $("#hamburgerMenu").css("height","auto");
    }
    else{
        $("#hamburgerMenu").css("height", "0px");
    }
});