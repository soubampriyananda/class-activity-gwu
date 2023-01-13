$('.tab').on("click", function(){

  if ($(this).hasClass("tab1")) {
    $(".tab1").addClass("active");
    $(".tab2").removeClass("active");
    $("#tabcontent1").css("display","block");
    $("#tabcontent2").css("display","none");
  }
  
   else if ($(this).hasClass("tab2")) {
      $(".tab1").addClass("active");
      $(".tab2").removeClass("active");
      $("#tabcontent1").css("display","none");
    $("#tabcontent2").css("display","block");
}
});
