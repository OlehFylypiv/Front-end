/*
* 	$(selector).hide(speed,callback);
*
*	$(selector).show(speed,callback);
*/

$(document).ready(function(){
    $("#hide").click(function(){
        $(".testEvent").hide(200);
    });
    $("#show").click(function(){
        $(".testEvent").show(300);
    });
});