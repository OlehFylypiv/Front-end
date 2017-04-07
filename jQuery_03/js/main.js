$(document).ready(function(){
    
    $("#btn1").click(function(){
        alert("Text: " + $("#test").text());
    });
    $("#btn2").click(function(){
        alert("HTML: " + $("#test").html());
    });
    $("#buttonForShowName").click(function(){
        alert("Value: " + $("#showName").val());
    });
    $("#btn3").click(function(){
        $("#test2").text("Hello, Mr. Black!");
    });
    $("#btn4").click(function(){
        $("#test3").html("<i>Hello, Mr. White!</i>");
    });
    $("#btn5").click(function(){
        $("#setName").val("Mr. White");
    });
    $("#btn6").click(function(){
        $("p").append(" <b>!!!</b>.");
    });

    $("#btn7").click(function(){
        $("ol").append("<li>Berlin</li>");
    });
    $("#btn8").click(function(){
        $("p").prepend("<b>!!!</b>. ");
    });
    $("#btn9").click(function(){
        $("ol").prepend("<li>Berlin</li>");
    });
    $("#btn10").click(function(){
        $("#addText").remove();
    });
     $("#btn11").click(function(){
        let txt = "";
        txt += "Width of div: " + $(".showSize").width() + "</br>";
        txt += "Height of div: " + $(".showSize").height();
        $(".showSize").html(txt);
    });
});