
$(function() {
  $("#img")
    .mouseover(function() { 
       var src = $(this).attr("src").replace("/images/20181019_231240.jpg", "/images/cat.jpg");
       $(this).attr("src", src);
    })
    .mouseout(function() {
        var src = $(this).attr("src").replace("/images/cat.jpg", "/images/20181019_231240.jpg");
       $(this).attr("src", src);

    });
 });