$(document).ready(function(){
    $('.menu ul li ul li').click(function(){
        var _this =$(this);
        var liurl = _this.data("url");
        $('main').load(liurl);
        return false;
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