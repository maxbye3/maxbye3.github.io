var firebaseConfig = {
  apiKey: "AIzaSyDcTrvSzLTiS2eG2Qa5oCKcESJHwcX8Rc8",
  authDomain: "lockdowntours-2462b.firebaseapp.com",
  databaseURL: "https://lockdowntours-2462b.firebaseio.com",
  projectId: "lockdowntours-2462b",
  storageBucket: "lockdowntours-2462b.appspot.com",
  messagingSenderId: "840910521569",
  appId: "1:840910521569:web:72328ff4fc1bd2941963a0",
  measurementId: "G-P8S69EY9NK",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

function addToEntry(id, key, propertiesToSave) {
  debugger;
  firebase
    .database()
    .ref(key + "/" + id)
    .set(propertiesToSave, function (error) {
      if (error) {
        kindnessSelected("failure");
      } else {
        finalThanks();
      }
    });
}

function saveFirebase(key, propertiesToSave) {
  return firebase
    .database()
    .ref(key + "/")
    .push(propertiesToSave, function (error) {
      if (error) {
        if (key == "contact") {
          messageSent("failure");
        } else {
          kindnessSelected("failure");
        }
        // if (key == "kindness") {
        //   kindnessSelected("failure");
        // }
        // if (key == "completed") {
        //   kindnessSelected("failure");
        // }
      } else {
        if (key == "contact") {
          messageSent("success");
        }

        if (key == "selected") {
          kindnessSelected("success");
        }

        if (key == "completed") {
          // drop confetti
          $("#startConfetti").click();
          setTimeout(function () {
            $("#stopConfetti").click();
          }, 3000);
          // kindness view
          kindnessComplete(saveKindness);
        }
      }
    })
    .getKey();
}
