$(document).ready(function() {      
   $('.carousel').carousel({
    pause: true,
    interval: false
    });
});


function giveFeedback(){
    
    var messageType = $(".btn-group .active").html();
    var message = $("textarea").val();
    var name = $("#name").val();
    writeUserData(messageType,message,name);
}

function continueToSite(){
    $("body").css("padding-top","0px");
    $(".disclaimer").hide();
    $(".site").show();


                var iframe = document.getElementById('frameID');
            iframe.src = iframe.src;
            
}

function writeUserData(messageType,message,name) {
  if(name == ""){
      name = "no name left";
  }
  firebase.database().ref('message').push({
    messageType:messageType,
    message: message,
    name: name
  });

  completeFeedback();

}

function completeFeedback(){
    $(".thanks-section").fadeIn();
    $(".contact-section").fadeOut();
    $("textarea").val('');
    $("#name").val('')
}


function refresh(){
            var iframe = document.getElementById('frameID');
            iframe.src = iframe.src;
}

function phone(){
    // console.log("phone here"+);
    $(".phone").css("opacity",".5");
    $(".tablet").css("opacity","1");
    $("body").css("background","#eb6b56");
    $("#frameID").css({"height":"667px","width":"375px"});

    $(".view-type").html("Currently viewing kindness app in phone view.");

    $("body").css("background","#3fb0ac");
    $(".scrollBtn").css("background","#fae596");
    $(".scrollBtn").css("color","black");



       
        setTimeout(function(){ 
            var iframe = document.getElementById('frameID');
            iframe.src = iframe.src;
         }, 1000);

}

function tablet(){

    console.log("tablet here");
    $(".phone").css("opacity","1");
    $(".tablet").css("opacity",".5");
    $("body").css("background","#9ad3de");
    $(".scrollBtn").css("background","#3fb0ac");
    $(".scrollBtn").css("color","white");

     $(".view-type").html("Currently viewing kindness app in tablet view.");

    $("#frameID").css({"height":"1024px","width":"768px"});


       
        setTimeout(function(){ 
            var iframe = document.getElementById('frameID');
            iframe.src = iframe.src;
         }, 1000);

}

$( ".btn-default" ).click(function() {
  $(".btn-default").removeClass("active");
  $(this).addClass("active");
});

function moreFeedback(){
    $(".thanks-section").fadeOut();
    $(".contact-section").fadeIn();
}

function scrollBtn(){
    window.scrollTo(0,document.body.scrollHeight);
}