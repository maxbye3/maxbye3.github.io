// var testObject = { 'one': 1, 'two': 2, 'three': 3 };

// // Put the object into storage
// localStorage.setItem('testObject', JSON.stringify(testObject));

// // Retrieve the object from storage
// var retrievedObject = localStorage.getItem('testObject');

// console.log('retrievedObject: ', JSON.parse(retrievedObject));

// -----

// assign a kindness to existing id or new one
// with status 'in progress'
// five minute counter
function updateItem(websiteData) {
  var id = websiteData.id;
  // console.log('Existing ID:', id);
  if (!id) {
    newUser(websiteData);
  } else if (id) {
    // save in DB
    updateIdInDb(websiteData);
  }
}

function newUser(user) {
  if (user.status == "complete") {
    user.kindness = false;
  }
  // get email
  var propertiesToCheck = loadData();
  var email = propertiesToCheck.email;
  var newUser = {
    status: "in progress",
    kindness: user.kindness || false,
    id: "",
    email: user.email || "",
  };
  // save in DB
  newUser.id = newSave(newUser);
  console.log("saved ID:", newUser.id);
}

// retrieve the object from storage
function loadData() {
  var retrievedObject = localStorage.getItem("websiteData");
  if (!retrievedObject) {
    return {};
  }
  return JSON.parse(retrievedObject);
}

// function saveDate(){
//   var propertiesToSave = loadData();
//   propertiesToSave.date = Date.now();
//   localStorage.setItem('websiteData', JSON.stringify(propertiesToSave));
// }

function areFiveOver() {
  var propertiesToCheck = loadData();
  var dateThen = propertiesToCheck.kindness.date;
  var dateNow = Date.now();
  // var today = new Date();
  // var Christmas = new Date("2012-12-25");
  var diffMs = dateNow - dateThen; // milliseconds between now & Christmas
  // var diffDays = Math.floor(diffMs / 86400000); // days
  // var diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
  var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
  // console.log('diffMins: ', diffMins);
  if (diffMins >= 0) {
    return "times up";
  } else {
    return 0 - diffMins;
  }
}

function checkEmail() {
  // check if email is assigned to existing id
  var propertiesToCheck = loadData();
  var email = propertiesToCheck.email;
  if (email && email.length > 0) {
    return email;
  } else {
    false;
  }
}

function deleteAll() {
  localStorage.setItem("websiteData", JSON.stringify({}));
  location.reload();
}

// // assign an email to existing id
// function assignEmail(id, email){

// }
// function assignMessage(id, message){
//   // assign an message + email to a new or existing id
// }
// function completeKindness(id, line1){
//   // change kindness status 'complete' to existing id
// }

// assign new unique ID
// steal the email
// function completedKindness(){
// }
