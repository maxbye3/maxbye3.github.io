  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
  
  $(window).scroll(function (e) {
    
  });
  

  // if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  //   $(".interactiveTxt").html("SWIPE");
  // } else {
  //    $(".interactiveTxt").html("TAP");
  //  }
     $(".interactiveTxt").html("TAP");
