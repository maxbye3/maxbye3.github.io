$(".disclaimerLink").click(function() {
    $(".cookiedisclaimer").hide();
});
  
// MOBILE ONLY
$(".navbar-toggler").click(function() {
$(".somethingToSayMobile").toggle();
});

  /*
  * ABOUT
  */
 function goAbout(){
  $(".bg").css("height", "90vh");
  $("#stage").removeClass().addClass("aboutTop");
  $(".kindnessSelected, .kindnessComplete, .websiteUrl, .websiteDisclaimer, .levelBg, .imageKudos, .enterEmailContainer, .whatsNextContainer, .selectAgainGrayTxt, .enterEmailContainer").hide();
  $(".swipes, .rightSwipeHitBox, .enterEmail").show();  
  history.pushState("about", "About", "#/about");
  state = 'intro';
  $(".tapLeft, .leftSwipeHitBox").hide();
  $(".line1").html("Two years ago I made the Kindness App <span class='smallTxt'>almost 10,000 downloads on iOS and Android but whose counting</span>");
  $(".line2").html("This site, has all that content (+100 suggestions) without <span class='pink'>platitudes</span>, <span class='blue'>fluff</span> or <span class='green'>schmultz</span> to make the world a better place");
  $(".leftSwipeTxt").html("<span class='yellow'>click the <img src='img/megaphone_black.png' width='40px'> if you can think of a way to improve the site </span><span class='smallTxt red'>love to hear from ya!</span>");
  $(".rightSwipeTxt").html("to get started");
  randomColor('#swipeColor1');
  randomColor('#swipeColor2');
  $(".bg").css('background-image', 'url("./img/UO6pL1X.jpg")');
  $(".opacity").css('opacity','.2');
}
// about

  
/*
* CONTACT ME
*/
function contactMe(){
  $("#stage").removeClass().addClass("contactTop");
  kindnessSelected();
  $(".kindnessSelected, .somethingToSayMobile, .kindnessComplete, .websiteUrl, .websiteDisclaimer, .levelBg, .imageKudos, .whatsNextContainer, .enterEmailContainer").hide();
  $(".enterEmail").show();
  var line1 = "<span class='red'>I would ❤️️ to hear from you!</span> For contact, you can hit me <a target='_blank' href='https://twitter.com/mr_moonhead' class='blue'><u>on twitter</u></a>.";
  var line2 = "<span onclick='goAbout()' class='blue cursor-pointer'><u>Click here</u></span> if your hankering to know what this site is about.";
  $(".line1").html(line1 + '<br>' + line2);
  var email = '<div class="emailInput input-group mb-3"><div class="input-group-prepend"><span class="input-group-text">@</span></div><input type="text" class="form-control" placeholder="Your Email" id="contactEmail"></div>';
  $(".line2").html("Or contact me in the form below: <textarea class='w-75' rows='5' id='contactMessage'></textarea>" +email+  "<div><button class='btn btn-success m-10' onclick='contactMeClick()'>Submit message</button></div>");
  $(".bg").css("height", "100vh");
  var isEmail = checkEmail();
  $("#contactEmail").val(isEmail);
}
  
function contactMeClick(){
  console.log("SAVE CONTACT"); 
  var propertiesToSave = {};  
  propertiesToSave.message = $("#contactMessage").val();
  propertiesToSave.contact = $("#contactEmail").val();
  saveContact(propertiesToSave);
  $(".line1").html("<span class='yellow'>message sent!</span>")
  $(".line2").html("<span onclick='location.reload()' class='pink cursor-pointer'><u>Return home?</u></span>")
}
  // contact
  
  
  /*
  * KINDNESS SELECTED
  */
  function saveKindness(){
      var propertiesToSave = loadData();
      propertiesToSave.kindness = currentKindness;
      updateItem(propertiesToSave);
  }
  function kindnessSelected(){
    $("#stage").removeClass().addClass("kindnessSelectedTop");
    showReminder('in progress');
    $(".swipes, .rightSwipeHitBox, .leftSwipeHitBox, .websiteDisclaimer").hide();
    // Whats next
    $(".whatsNextContainer").show();
    $(".whatsNextContainer p").html("<span class='bigger yellow'>Good luck!</span> check back here in five!  <span class='smallTxt'>(or just refresh the page).</span>")

    $(".kindnessSelected, .websiteUrl, .otherWiseTxt").show();
    $(".leftSwipeTxt").html("if you want to select a new suggestion");
    $(".bg").css({"opacity": ".3"});
    $(".selectAgain").show().html("<u class='selectAgainGrayTxt'>or click here to select a new kindness</u>");
    $(".statusHeading").html("<span class='strongRed'>KINDNESS SELECTED:</span>");
    $(".whatsNextEmail").hide();
  }
  // kindness selected

  /*
  * KINDNESS COMPLETE
  */
  function kindnessComplete(){
    
    $("#startConfetti").click()
    setTimeout(function(){ 
        $("#stopConfetti").click(); 
    }, 3000);

    // complete tastk
    var propertiesToSave = loadData();
    var score = propertiesToSave.kindness.score;
    propertiesToSave.status = "complete";
    updateItem(propertiesToSave);
    // new user
    propertiesToSave.id = false;    
    updateItem(propertiesToSave);
    // window.history.pushState("complete", "Kindness Completed", "#/completed-kindness");
    kindnessSelected();
    $("#stage").removeClass().addClass("completeTop");
    showReminder('completed');
    $(".enterEmail").show();
    $(".otherWiseTxt, .kindnessComplete, .line2, .websiteUrl, .whatsNextContainer, .selectAgainGrayTxt").hide();
    $(".statusHeading").html("<span class='blue'>Nice job!</span>");
    $(".line1").html("Performing this kindness has scored you <span class='pink'>" + score + "</span> points.");
    $(".whatsNextEmail").show();
  } 
  // kindness complete


    
  /*
  * KINDNESS IN PROGRESS
  */
 function kindnessInProgress(){
   // show reminder
   showReminder('in progress');
   kindnessSelected();
   $("#stage").removeClass().addClass("progressTop");
    $(".whatsNextContainer").show();
    // check date
    if(areFiveOver() == 'times up'){
      $(".whatsNextContainer p").html("<span class='bigger'> kindness complete? <span class='red cursor-pointer'><u onclick='kindnessComplete()'>Click here</u></span></span>");
    } else{
      $(".whatsNextContainer p").html("Love the enthusiasm but please spend <span class='pink'>" + areFiveOver() + "</span> minutes more working on that kindness.");
    }

    $(".levelBg, .websiteUrl, .kindnessComplete").show();
    $(".kindnessSelected, .websiteDisclaimer").hide();
  }
  // kindness in progress

  
