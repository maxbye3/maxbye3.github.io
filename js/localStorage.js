// check if email is assigned to user
function getEmail() {
  var propertiesToCheck = loadData();
  var email = propertiesToCheck.email;
  if (email && email.length > 0) {
    return email;
  } else {
    false;
  }
}

// save data
function saveData(key, data) {
  var savedData = loadData();
  savedData[key] = data;
  localStorage.setItem("websiteData", JSON.stringify(savedData));
}

// retrieve the object from storage
function loadData() {
  var retrievedObject = localStorage.getItem("websiteData");
  if (!retrievedObject || retrievedObject == "false") {
    return { kindness: {} };
  }
  return JSON.parse(retrievedObject);
}

function deleteData() {
  localStorage.setItem("websiteData", false);
  location.reload();
}
