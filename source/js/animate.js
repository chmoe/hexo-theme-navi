$(document).ready(function() {
    // var b = 10;
    // var d = Math.floor(Math.random() * b) + 1;
    // var e = "./Noisky_files/img/background-image/bg-" + d + ".jpg";
    
    
    var a = $(".navigation-wrapper");
    function c() {
        a.on(function() {
            a.toggleClass("visible animated bounceOutUp")
        });
        a.toggleClass("animated bounceInDown animated bounceOutUp")
    }
    $(".btn-mobile-menu").click(function() {
        if (a.css("display") === "block") {
            c()
        } else {
            a.toggleClass("visible animated bounceInDown")
        }
        if ($(".footer").css("display") === "block") {
            $(".footer").css("display", "none");
            $(".navigation-wrapper").css("position", "absolute");
            $(".panel-main").css("position", "absolute")
        } else {
            $(".footer").css("display", "block");
            $(".navigation-wrapper").css("position", "fixed");
            $(".panel-main").css("position", "fixed")
        }
        $(".btn-mobile-menu_icon").toggleClass("fa fa-list fa fa-angle-up animated fadeIn")
    });
    $(".panel-main").on("click", ":not(.mobile,.btn-mobile-menu,.navigation-wrapper)",
    function() {
        if (a.hasClass("bounceInDown")) {
            c();
            $(".btn-mobile-menu_icon").toggleClass("fa fa-list fa fa-angle-up animated fadeIn")
        }
        $(".footer").css("display") === "none" ? $(".footer").css("display", "block") : "";
        $(".panel-main").css("position") === "absolute" ? $(".panel-main").css("position", "fixed") : "";
        $(".navigation-wrapper").css("position") === "absolute" ? $(".panel-main").css("position", "fixed") : ""
    });
    a.click(function(f) {
        f.stopPropagation()
    });
    // $(".year").html(new Date().getFullYear())
});