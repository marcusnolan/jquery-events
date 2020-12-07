$(document).ready(function(){
    $(".box").on("click", function(){
        var classnames = $(this).attr("class").split(" ");
        $("." + classnames[1]).css("background-color", "red");
    });
});