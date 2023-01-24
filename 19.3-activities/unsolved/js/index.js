
$(".searchButton").on("click", function () {

    $(".searchButton").toggleClass("active");

    if ($(".searchButton").hasClass("active")) {

    $(".searchBar").css("height", "100vh");
    $("#searchForm").css("opacity","1");
    $("#searchIcon").removeClass("fa-search");addClass("fa-times");
    $(".searchIcon")
}
       
else {
$ (".searchButton").css("height","0vh");

$("#searchForm").css("opacity","0");
$(".searchIcon").remoceClass("fa-times").addClass("fa-search"); 

}

    });

    let searchButton = addEventListener ( "click",function () {

    });
