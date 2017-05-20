
var loadGit = false; // make sure git isn't int more than once

// launch video at the right spot
$(function() {

// loop video
$('video').on('ended', function () {
  this.load();
  this.play();
});

// if chrome
if (window.chrome){
    $("[type=video\\\/mp4]").each(function()
    {
        $(this).attr('src', $(this).attr('src').replace(".m4v", ".mkv"));
        $(this).attr('type', $(this).attr('type').replace("mp4", "mkv"));
    });
 }

 // if mobile disable video
 var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  if(iOS){
    $("#moonvideo").hide();
    $(".mobileImg").fadeIn("slow");
  }
  else{
    $("#moonvideo").fadeIn('slow');
    document.getElementById('moonvideo').currentTime = 20;
    document.getElementById('moonvideo').play();
  }

  // hide buttons if screen is less than 992px
  if($(window).width() < 992){
    $('.more-btn').hide();
  }

 });


/*
* HIDE LOL COMMIT PROJ
*/
function hideLol(){
    $(".lol-section").hide();
    $(".showLol").show();
}

/*
* SHOW LOL COMMIT PROJ
*/
function showLol(){
  $(".showLol").hide();
  $(".lol-section").show();
  $('html, body').animate({scrollTop: $(".lol-commit-feed").offset().top}, 1000); 
}

setInterval(function(){ 
    if(document.getElementById('moonvideo').currentTime >= 67){
    document.getElementById('moonvideo').currentTime = 20;
    document.getElementById('moonvideo').play();  
    }
 }, 1000);


// append image into the modal
function appendImage(imgSrc,description){
  $(".appendImg").html('<center><img src="'+imgSrc+'" width="70%"></center>'); 
  $(".modal-title").html(description);  
}

// append video into modal
function appendVideo(videoSrc,description){
  $(".appendImg").html('<center><iframe width="420" height="315" src="'+videoSrc+'" allowfullscreen></iframe></center>');
  $(".modal-title").html(description);  
}

//when modal closed
$('#myModal').on('hidden.bs.modal', function () {
  $(".appendImg").html('');
})

// Click the home button to scroll up top of page
function homeClick(){
  $('body').animate({"scrollTop": "0px"}, 1000);
}

function VFClick(){
  $(".virtuallyfree").show();
  $('html, body').animate({scrollTop: $(".virtuallyfree").offset().top}, 1000);  
}

function RMClick(){
  $('html, body').animate({scrollTop: $(".rebelminds").offset().top}, 1000);  
}

function KindnessClick(){
  $(".kindnessSection").show();
  $('html, body').animate({scrollTop: $(".kindnessSection").offset().top}, 1000);  
}

function BlogClick(){
  $(".blogSection").show();
  $('html, body').animate({scrollTop: $(".blogSection").offset().top}, 1000);
}

function contactClick(){
  $("html, body").animate({ scrollTop: $(document).height() }, 1000);
}

//scroll to bottom of page launch git image
$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() == $(document).height()) {
       if(!loadGit){
           // launch github carousel
           $(".lol-commit-feed").show();
           $('.twitter-feed-wrapper').hide();
           loadGit = true;
       }
   }
});



// Append Git Selfie to git-carousel
function addSelfie(imgSrc){
    $("#git-carousel").prepend('\
    	<div class="item" data-animation="bounceIn" data-animation-delay="200">\
								<a data-toggle="modal" data-target="#myModal" onclick="appendImage(\'img/lol-commits/'+imgSrc+'\',\'Stress Free Beach and Lake View\')" class="img-responsive thumbnail img-square">\
									<img src="img/lol-commits/'+imgSrc+'">\
									<span class="thumbnail-caption">\
										<span class="thumbnail-caption-inner">Click To Enlarge Image<i class="fa fa-arrow-right"></i></span>\
                                    </span>\
                                </a>\
                            </div>\
    ')
}


// Load all the selfies in the selfie directory
addSelfie('1.jpg');
addSelfie('2.jpg');
addSelfie('3.jpg');
addSelfie('4.jpg');
addSelfie('5.jpg');
addSelfie('14.jpg');
addSelfie('6.gif');
addSelfie('7.gif');
addSelfie('8.jpg');
addSelfie('9.jpg');
addSelfie('10.jpg');
addSelfie('11.jpg');
addSelfie('12.gif');
addSelfie('13.gif');
addSelfie('15.gif');
addSelfie('17.gif');
addSelfie('16.gif');
addSelfie('18.gif');
addSelfie('19.jpg');
addSelfie('20.jpg');
addSelfie('21.gif');
addSelfie('22.gif');

