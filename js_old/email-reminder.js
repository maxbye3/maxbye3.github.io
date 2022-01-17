function noEmail(permission){
    var propertiesToSave = loadData();
    propertiesToSave.dontRemind = permission;
    updateItem(propertiesToSave);
    if(permission){
      $(".emailHeader").html("<span class='darkPink'>You got it</span>");
      $(".emailContainerTxt").html("No reminders...");
      $(".enterEmail").hide();
    } else {
      $(".emailHeader").html("<span class='darkGreen'>Alright!</span>");
      $(".emailContainerTxt").html("We'll send reminders to");
      $(".enterEmail").show();
    }
  }

  function showReminder(type){
    $(".enterEmailContainer").show();

    var isEmail = checkEmail();
    // general
    if(type == "completed"){
      $(".reminderInProgress").hide();
      $(".reminderComplete").show();
      $(".bg").css("height", "90vh");
    } else if ('in progress'){  
      $(".reminderInProgress").show();
      $(".reminderComplete").hide();
      $(".bg").css("height", "75vh");
    }

    // console.log('isEmail:', isEmail);
    if(isEmail){ // email found  
      $(".userEmailComplete").val(isEmail);  
      $(".userEmailProgress").val(isEmail);  
      if(type == "completed"){
        $(".emailHeader").html("<span class='darkGreen'>Hey you</span>");
        $(".emailContainerTxt").html("We got your email and your points have been saved. Change it if it's wrong.");

      } else if ('in progress'){  
        var propertiesToCheck = loadData();
        var button = "<div style='margin-top:8px'><button class='mt-10 btn btn-danger' onclick='noEmail(true)'>No, don't do that.</button></div>";
        $(".emailHeader").html("<span class='darkGreen'>Reminder?</span>");
        $(".emailContainerTxt").html("Cool if we send a reminder for the kindness in progress?" +  button);
        $(".enterEmail").hide();
        if(propertiesToCheck.dontRemind == true){
          button = "<div style='margin-top:8px'><button class='btn btn-success' onclick='noEmail(false)'>Actually, that would be useful.</button></div>";
          $(".emailContainerTxt").html("You said no to reminders, but let us know if you change your mind... " +  button);
        }
      }
    } else{ // no email
      if(type == "completed"){
        $(".emailHeader").html("<span class='darkGreen'>Sign up to save!</span>");
        $(".emailContainerTxt").html("We don't have you in our files...<br> Enter an email to save those points!");
        $(".privateDisclaimer").html("We ain't sharing your deets with no one. <span class='red'>Even if they ask nice.</span>");
      } else if ('in progress'){
        $(".emailHeader").html("<span class='darkPink'>Want a reminder?</span>");
        $(".emailContainerTxt").html("Enter your email below to receive a gentle nagging later");
        $(".privateDisclaimer").html("As Frodon once yelled from Mount Sire. Your details <span class='red'>\"shall not be shared!\"</span>");
      }
    }
  }


  function emailSaved(){
    var email;
    if($(".userEmailProgress").val().length == 0){
      email = $(".userEmailComplete").val();
    } else {
      email = $(".userEmailProgress").val();
    }
    var propertiesToSave = loadData();
    propertiesToSave.email = email;
    updateItem(propertiesToSave);
    $(".emailHeader").html("<span class='darkBlue'>Nice one!</span>");
    $(".emailContainerTxt").html("The email below has been saved!  Change if wrong:");
  }


  $(".userEmailComplete").on('keyup', function(e) {
    var field = $(this);
    if(validateEmail(field.val())){
      $(".emailSavedComplete").attr("disabled",false);
    } else {
      $(".emailSavedComplete").attr("disabled",true);
    }
  });

  $(".userEmailProgress").on('keyup', function(e) {
    var field = $(this);
    if(validateEmail(field.val())){
      $(".emailSavedProgress").attr("disabled",false);
    } else {
      $(".emailSavedProgress").attr("disabled",true);
    }
  });

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }