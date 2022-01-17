// hide all
function hideAll() {
  $(
    ".cookieDisclaimer, .selectedKindnessImg, .artistDisclaimer, .naughty-text, .kindnessLogo, .kindnessSuggestions, .homeBtnNav, .button1, .button2, .button3, .titleNav"
  ).hide();
  $(".button1, .button2, .button3").attr("disabled", false);
}

// homepage
function homepage() {
  hideAll();
  $(".kindnessBg").css("background-image", "url('img/UO6pL1X.jpg')");
  setTimeout(function () {
    $(".kindnessLogo, .titleNav, .cookieDisclaimer").show();
  }, 200);
  console.log("home");

  $(".kindnessSuggestions")
    .show()
    .html(
      "<span class='red'>Sick of lockdown?</span> <br> Try one of 100+ actions to make the world a better place"
    );
  $(".button1")
    .show()
    .html("Click here to get started ❤️")
    .attr("onclick", "getData()");
  $(".button2")
    .show()
    .html("Click to find out more about this website 🧐")
    .attr("onclick", "about()");

  var savedData = loadData() || {};
  if (Object.keys(savedData.kindness).length !== 0) {
    // you got shit saved
    $(".button3")
      .show()
      .html("Return to saved kindness 💾")
      .attr("onclick", "kindnessSelected('success')");
  } else {
    // contact
    $(".button3")
      .show()
      .html("Click here to contact me 📬")
      .attr("onclick", "contact()");
  }
}

// display kindness
function displayKindness(kindness) {
  hideAll();
  $(".kindnessBg").css("background-image", "url('img/" + kindness.image + "')");
  setTimeout(function () {
    $(".artistDisclaimer, .homeBtnNav").show();
  }, 200);
  $(".artistDisclaimer").html("<p>" + kindness.credit + "</p>");
  saveKindness = kindness;
  var website =
    " <u><a class='darkBlue' target='blank' href='" +
    kindness.website +
    "'>" +
    kindness.websiteName +
    "</a></u>";
  $(".kindnessSuggestions")
    .show()
    .html(kindness.line1 + "<br>");
  if (kindness.line2) {
    $(".kindnessSuggestions").append(kindness.line2);
  }
  if (website) {
    $(".kindnessSuggestions").append(website);
  }
  $(".button1")
    .show()
    .html("Go to the next suggestion")
    .attr("onclick", "getData()");

  $(".button2")
    .show()
    .html("See the previous suggestion")
    .attr("onclick", "goBack()");

  $(".button3")
    .show()
    .html("Accept the challenge")
    .attr("onclick", "takeOnKindness()");
}

// kindness complete
function kindnessComplete() {
  hideAll();
  $(".homeBtnNav, .cookieDisclaimer").show();
  var line1 = "<p class='blue'>Congrats!</p>";
  var line2 = "<p>Please enter your email to save progress</p>";
  var isEmailDisabled = true;
  var emailValue = "";
  // if email on file
  if (getEmail()) {
    isEmailDisabled = false;
    line2 = "<p>Please check your email is correct below and click save</p>";
    emailValue = getEmail();
  }

  var line3 =
    '<div class="my-3 flex rounded-md shadow-sm"><span class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 bg-gradient-to-br from-yellow-400 p-1 bg-pink-500 text-sm">✉️</span><input type="text" id="contact__email" onkeyup="canSumbit()" class="border p-2 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="enter email address" value="' +
    emailValue +
    '"/></div>';
  var line4 =
    '<input type="checkbox" id="complete__letMeContact" name="letMeContact" checked><label value="true" class="font-normal" for="letMeContact"> I would love to thank you for using the app</label><a>';
  var line5 =
    "<div class='mt-4 bg-pink-200 border-l-4 border-pink-500 text-pink-700 p-4' role='alert'><p class='font-bold smallMobile'>As Gerbert the Gray yelled on the bridge of Eldon <span class='italic'>'Your details shall not be passed!'</span></p><p class='font-normal'>Your email will never be shared (even if someone asks nicely)</p></div>";

  $(".kindnessSuggestions")
    .show()
    .html(line1 + line2 + line3 + line4 + line5);
  $(".button1")
    .show()
    .html("Save my data 💾")
    .attr("disabled", isEmailDisabled)
    .attr("onclick", "emailAddedToKindness()");
  $(".button2")
    .show()
    .html("Perform another kindness ❤️")
    .attr("onclick", "getData()");
}

// about
function about() {
  hideAll();
  $(".kindnessBg").css("background-image", "url('img/kindnessLogo.png')");
  $(".homeBtnNav").show();
  var line1 =
    "<p>Two years ago I made the Kindness App</p><p><small>(almost 10,000 downloads on iOS and Android but whose counting)</small></p>";
  var line2 =
    "<p>This site, has +100 suggestions without any <span class='pink'>platitudes</span>, <span class='blue'>fluff</span> or <span class='green'>schmultz</span>.</p>";
  var line3 =
    "<p>If you have any feedback 📝  &nbsp; please get in touch 👋</p>";
  $(".kindnessSuggestions")
    .show()
    .html(line1 + line2 + line3);
  $(".button1")
    .show()
    .html("Click here to get started ❤️")
    .attr("onclick", "getData()");
  $(".button3")
    .show()
    .html("Click here to contact me 📬")
    .attr("onclick", "contact()");
}

// kindness selected
function kindnessSelected(state) {
  if (state == "success") {
    displayKindness(saveKindness);

    $(".naughty-text")
      .show()
      .html("Click here to choose a new suggestion")
      .attr("onclick", "getData()");
    $(".button1").hide();
    $(".button2")
      .attr("disabled", false)
      .html("What now?")
      .attr("onclick", "whatNow()");
    $(".button3")
      .html("Kindness complete!")
      .attr("onclick", "kindnessCompleted()");

    // need to work out if content is bigger than screen
    setTimeout(function () {
      var screenRealEstate =
        $(window).height() -
        $("#kindness__navbar").height() -
        $("#kindness__bottom-bar").height();
      // console.log(screenRealEstate);
      // console.log($("#kindness__navbar").height());
      // console.log($("#kindness__content").height());
      if (screenRealEstate < $("#kindness__content").height()) {
        console.log("screen height too small to show image");
      } else {
        $(".selectedKindnessImg")
          .show()
          .attr("src", "img/" + saveKindness.image);
      }
    }, 200);
  } else {
    line1 =
      "Oh no! Something went wrong 😢 <br><u class='darkBlue' onclick='contact()'>Please click here to tell me what you were trying to do</u>? ";
    $(".kindnessSuggestions").show().html(line1);
    $(".button2").show().html("Go Home 🏠").attr("onclick", "homepage()");
  }
}

// what now
function whatNow() {
  hideAll();
  $(".homeBtnNav").show();
  var line1 = "<p>Go out and perform the kindness 👣 </p>";
  var line2 = "<p>and come back here when it's done 👏 </p>";
  $(".kindnessSuggestions")
    .show()
    .html(line1 + line2);
  $(".button1")
    .show()
    .html("Okay got it 👍")
    .attr("onclick", "kindnessSelected('success')");
  $(".button2")
    .show()
    .attr("disabled", false)
    .html("I'm still confused 😕")
    .attr("onclick", "stillConfused()");
}

// still confused
function stillConfused() {
  contact(
    "<p>Sorry your stuck! Sling us a message and I'll help you out ✋</p>"
  );
}

// contact
function contact(msg) {
  hideAll();
  $(".homeBtnNav").show();
  $(".kindnessBg").css("background-image", "url('img/kindnessLogo.png')");
  var line1 = msg || "<p class='red'>I would ❤️️&nbsp; to hear from you!</p>";
  var line2 = "";
  var line3 = "";
  if (!msg) {
    line2 =
      "<p>Please <a class='blue' href='https://twitter.com/mr_moonhead'><u>follow or hit me on twitter</u></a></p>";
    line3 = "<p>Otherwise, please write to me below 📝</p>";
  }
  var line4 =
    "<textarea class='p-2 mt-5 border w-full' rows='3' id='contact__message' placeholder='Please enter your message here'></textarea>";
  var line5 =
    '<div class="my-3 flex rounded-md shadow-sm"><span class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 bg-gradient-to-br from-yellow-400 p-1 bg-pink-500 text-sm">✉️</span><input type="text" id="contact__email" onkeyup="canSumbit()" class="border p-2 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="enter email address"/></div>';
  var line6 =
    "<div class='mt-4 bg-pink-200 border-l-4 border-pink-500 text-pink-700 p-4' role='alert'><p class='font-bold smallMobile'>As Gerbert the Gray yelled on the bridge of Eldon <span class='italic'>'Your details shall not be passed!'</span></p><p class='font-normal'>Your email will never be shared (even if someone asks nicely)</p></div>";

  $(".kindnessSuggestions")
    .show()
    .html(line1 + line2 + line3 + line4 + line5 + line6);
  $(".button1")
    .show()
    .html("Submit")
    .attr("disabled", "true")
    .attr("onclick", "submitMessage()");
  $(".naughty-text").show().html("Cancel").attr("onclick", "homepage()");
  // load email
  if (getEmail()) {
    $(".button1").attr("disabled", false);
    $("#contact__email").val(getEmail());
  }
}

// message sent
function messageSent(state) {
  $(".homeBtnNav").show();
  hideAll();
  if (state == "success") {
    line1 = "Message sent 💌 <br>Thanks so much! 😘 ";
  } else if (state == "failure") {
    line1 =
      "Oh no! Something went wrong 😢 <br><a class='blue' href='https://twitter.com/mr_moonhead'><u>Mind DMing me on twitter</u></a>? ";
  }
  $(".kindnessSuggestions").show().html(line1);
  $(".button2").show().html("Go Home 🏠").attr("onclick", "homepage()");
}

// failed to load
function failedLoadGoogleData() {
  hideAll();
  var line1 = "<p>Unable to pull suggestions 😕</p>";
  $(".kindnessSuggestions").show().html(line1);

  $(".button1")
    .show()
    .html("Click here to try again")
    .attr("onclick", "tryAgain()");
}

// final thanks
function finalThanks() {
  hideAll();
  var line1 = "<p>Your data has been saved!</p>";
  var line2 = "<p>Thanks a million for trying out the app! 😊</p>";

  $(".kindnessSuggestions")
    .show()
    .html(line1 + line2);

  $(".button1").show().html("Return home 🏠").attr("onclick", "homepage()");
  $(".button2")
    .show()
    .html("Perform another kindness ❤️")
    .attr("onclick", "getData()");
}
