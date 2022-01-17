function init(){
  $("#stage").addClass("aboutTop");
  history.pushState('home', "Home", "#/home");
  // history.pushState('home', "Home", "#/dropkindnessnotbombs");
  $('.reminderComplete, .reminderInProgress, .whatsNextEmail, .whatsNextContainer, .failureContainer, .imageKudos, .somethingToSayMobile, .kindnessSelected, .levelBg, .kindnessComplete, .selectAgain, .enterEmailContainer').hide();
  
  
  
  // Check if in progress
  var propertiesToCheck = loadData();
  var kindness = propertiesToCheck.kindness;
  if(kindness){
    kindnessInProgress();
    kindnessView(kindness.line1, kindness.line2, kindness.website, kindness.image, kindness.type);
    $(".websiteUrl").show();
  }
}