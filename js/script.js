$(document).ready(function () {
    $(".panel p").text("Hello World! This is JQuery speaking. If you are reading this it means your script has worked and you have figured out how to use me!");
    
    function onHover() {
        $(".panel").mouseenter(function () {
            $(".panel").css("background-color: white", "color: black");
        });
    }
});