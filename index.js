
for (let i = 0; i < 10; i++) {
    $(".port" + i).hover(function(){
        $(this).css("background-color", "#1845be");
        $(".img" + i).addClass("hide");
        }, function(){
        $(this).css("background-color", "transparent");
        $(".img" + i).removeClass("hide");
      });

      $(".port" + i).hover(function(){
        $(".port-content" + i).removeClass("hide");
    },function(){
        $(".port-content" + i).addClass("hide");
    })
}







 
