var usedKindnessInd = [];

function intKindness(currentKindness) {
  state = "kindness";
  var uniqueInt = uniqueRandomNum(currentKindness.line1);
  currentKindness = {
    line1: currentKindness.line1[uniqueInt],
    line2: currentKindness.line2[uniqueInt],
    website: currentKindness.website[uniqueInt],
    websiteName: currentKindness.websiteName[uniqueInt],
    image: currentKindness.image[uniqueInt],
    credit: currentKindness.thanks[uniqueInt],
    score: 0,
    date: Date.now(),
  };
  displayKindness(currentKindness);
  canGoBack();
}
function goBack() {
  // splice usedKindnessInd
  usedKindnessInd.splice(-1, 1);

  // last usedKindness ind
  var lastInd = usedKindnessInd[usedKindnessInd.length - 1];
  // return currentKindness
  previousKindness = {
    line1: currentKindness.line1[lastInd],
    line2: currentKindness.line2[lastInd],
    website: currentKindness.website[lastInd],
    websiteName: currentKindness.websiteName[lastInd],
    image: currentKindness.image[lastInd],
    credit: currentKindness.thanks[lastInd],
    score: 0,
    date: Date.now(),
  };

  displayKindness(previousKindness);
  $(".button2").html("Keep cycling previous");
  canGoBack();
}

function canGoBack() {
  if (usedKindnessInd.length > 1) {
    $(".button2").attr("disabled", false);
  } else {
    $(".button2").attr("disabled", true);
  }
}

function uniqueRandomNum(line1) {
  var randomNum = Math.floor(Math.random() * line1.length);
  while (usedKindnessInd.indexOf(randomNum) !== -1) {
    // pick again
    randomNum = Math.floor(Math.random() * line1.length);
  }
  usedKindnessInd.push(randomNum);
  return randomNum;
}

// take on kindness
function takeOnKindness() {
  // save to local
  saveData("kindness", saveKindness);
  // save to firebase
  saveFirebase("selected", saveKindness);
}

var firebaseCompleteId;

// kindness completed
function kindnessCompleted() {
  // save to local
  saveData("kindness", {});

  // save to firebase
  firebaseCompleteId = saveFirebase("completed", { kindness: saveKindness });
  console.log(firebaseCompleteId);
}

// email entered after complete
function emailAddedToKindness() {
  // save email
  var email = $("#contact__email").val();
  var canContact = $("#complete__letMeContact").is(":checked");
  addEmailToLocal(email);
  // save to firebase
  addToEntry(firebaseCompleteId, "completed", {
    kindness: saveKindness,
    email,
    canContact,
  });
}
