$(document).ready(function(){
    
    $("#flip").click(function(){
        $("#panel").slideDown(3000);
    	$("#clean").show(300);
    	$("#stop").show(300);
    });

    $("#clean").click(function(){
        $("#panel").slideUp("slow");
    	$("#clean").hide(300);
    	$("#stop").hide(300);
    });

    $("#stop").click(function(){
        $("#panel").stop();
    });

    $("#changeSize").click(function(){
        let div = $(".animation");
        div.animate( {height : "300px", opacity : "0.4"}, "slow");
        div.animate( {width : "300px", opacity : "0.8"}, "slow");
        div.animate( {height : "100px", opacity : "0.4"}, "slow");
        div.animate( {width : "100px", opacity : "0.8"}, "slow");
        div.animate( {fontSize : "3em"}, "slow");
    });

    $("#hideText").click(function(){
        $("p").hide("slow", function(){
            alert("The paragraph is now hidden");
        });
    });

     $("#hideText").click(function(){
        $("#panel").css("background-color", "#ff4d4d");
    });
});