var usedKindnessInd = [];
var currentKindness = {};

function goKindness(){
  $(".bg").css("height", "90vh");
  state = 'kindness';
  $("#stage").removeClass().addClass("kindnessTop");
  if(usedKindnessInd.length == line1.length){
    usedKindnessInd = [];
  }

  // from selected back to selection
  $(".enterEmailContainer, .kindnessSelected, .selectAgain, .kindnessComplete, .whatsNextContainer").hide();
  $(".swipes, .rightSwipeHitBox, .leftSwipeHitBox, .levelBg").show();
  $(".bg").css({"opacity": ".5"});

  var uniqueInt = uniqueRandomNum();
  // console.log("uniqueInt:", uniqueInt);
  // console.log('line1: ', line1[uniqueInt]);
  // console.log('image: ', image[uniqueInt]);
    // IMAGE KUDOS
    $(".imageKudos").show().html(thanks[uniqueInt]);
    $(".tapLeft, .leftSwipeHitBox").show();
    randomColor('#swipeColor1');
    randomColor('#swipeColor2');
    // setup current Kindness
    currentKindness = {
      line1: line1[uniqueInt],
      line2: line2[uniqueInt], 
      website: website[uniqueInt],
      image: image[uniqueInt],
      score: 0,
      date: Date.now(),
    };
    kindnessView(currentKindness.line1, currentKindness.line2, currentKindness.website, currentKindness.image, type[uniqueInt]);
    
    // unique
    console.log("website:", website[uniqueInt]);
    $(".websiteDisclaimer").hide();
    if(website[uniqueInt]){      
      $(".websiteDisclaimer").show().html("[accept kindness to reveal website]");
    } 
    $(".websiteUrl").hide();
    $(".leftSwipeTxt").html("to take on the challenge");
    $(".rightSwipeTxt").html("for another suggestion");
  }

  function kindnessView(line1, line2, website, image, type){
    $(".line1").html(line1);
    $(".line2").html(line2);
    $(".websiteUrl").html("<a href=" + website +" target='_blank'>" + website + "</a>");
    $(".bg").css('background-image', 'url("./img/'+ image + '")');
    levelDetails(type);
  }

// function prevKindness(){
//   const prevKindnessNum = usedKindnessInd[usedKindnessInd.length - 2] || 0;
//   console.log(line1[prevKindnessNum]);
//   usedKindnessInd.splice();
// }

function levelDetails(level){
  $(".levelTxt").html(level);
  if(level== "simple"){
    $(".levelBg").css("background", "#67bbc4");
    $(".levelCircle").css("background", "#9dcdd3").html("100");
    currentKindness.score = 100;
  } else { // ambitious
    $(".levelBg").css("background", "#ee752f");
    $(".levelCircle").css("background", "#ee9c6d").html("200");
    currentKindness.score = 200;

  }
}


function uniqueRandomNum() {
  var randomNum = Math.floor(Math.random() * line1.length); 
  while(usedKindnessInd.indexOf(randomNum) !== -1){
    // pick again
    randomNum = Math.floor(Math.random() * line1.length);
  } 
  usedKindnessInd.push(randomNum);
  return randomNum;
}



