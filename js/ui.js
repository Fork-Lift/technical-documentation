$(document).ready(function(){
    $(".menu li li").click(function(){
        var _this =$(this);
        var liurl = _this.data("url");
        $("main").html();
        $.ajax({
            type : 'post',
            url : liurl,
            dataType : 'html',
            success : function(data){
                $("main").html(data);
            }
        });
    });
});

$(function(){
    $(".mobile_tab").click(function(){
        $("aside").toggleClass("show");
        $("mobile_tab").toggleClass("close");
    });
});

$(function(){
    $("body").prognroll({
        height: 5,
        color: "#555"
    });
}); 