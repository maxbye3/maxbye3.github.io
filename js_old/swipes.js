var state = 'intro';
$(".leftSwipeHitBox").click(function() {
  if(state === 'intro'){
    goAbout();
  } else { // kindness
    kindnessSelected();
    saveKindness();
  }
});

$(".rightSwipeHitBox").click(function() {
    history.pushState("select", "Kindness Select", "#/kindness-select");
    goKindness();
});

$(window).on("popstate", function () {
  console.log(history.state);
  if(history.state == 'home'){
    location.reload();
  }
  if(history.state == 'select'){
    goKindness();
  }
  if(history.state == 'about'){
    goAbout();
  }
  // if(history.state == 'selected'){
  //   kindnessSelected();
  // }
  // if(history.state == 'completed'){
  //   $(".kindnessComplete").click();
  // }
});
