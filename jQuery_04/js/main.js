$(document).ready(function(){
    $("span").parent().css( {"color": "red", "border": "2px solid red"} );
    $("b").parents("li, ul").css( {"color": "red", "border": "2px solid red"} );
    $("div").children("q.first").css( {"color": "red", "border": "2px solid red"} );
    $("h2").next().css( {"color": "red", "border": "2px solid red"});
    $("p").filter("#setBgColor").css("background-color", "red");
});