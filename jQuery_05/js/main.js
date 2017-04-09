let jq = $.noConflict();
jq(document).ready(function() {
    
    jq("#forTestTextDiv").click(function() {
        jq("#testTextDiv").load("test.txt");
    });
    jq("#noConflict").click(function() {
        jq("p").text("jQuery is still working!");
    });
});