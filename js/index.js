let rated = false;
let chosen = null;

$(".rating").click(function(){
    $(".rating").removeClass("rating-clicked");
    $(event.target).addClass("rating-clicked");

    chosen = event.target.innerHTML
    rated = true;
});

$(".btn").click(function(){
  if (rated){
    $(".main").addClass("invisible");
    $(".main").css("position", "absolute");

    $(".chosen").text(chosen);
    $(".sub").removeClass("invisible");
  } else {
    alert("please choose your rating");
  }
});
