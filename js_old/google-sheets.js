var line1 = [];
var line2 = [];
var website = [];
var image = [];
var thanks = [];
var type = [];
function getData(){
  $.ajax({
    type: "GET",
    url: "https://spreadsheets.google.com/feeds/list/1AoanqLBlXENAKeEvGOTdZhGwswT1Gen0R5n3yxcpZ0k/od6/public/values?alt=json",
    success: function(data){
        // console.log('data', data.feed.entry);
        for (var i = 0; i < data.feed.entry.length; i++) {
          if(data.feed.entry[i].gsx$line1){
            // console.log('1st content: ', data.feed.entry[i].gsx$line1.$t);
            line1.push(data.feed.entry[i].gsx$line1.$t);
          }
          if(data.feed.entry[i].gsx$line2){
            // console.log('2nd content: ', data.feed.entry[i].gsx$line2.$t);
            line2.push(data.feed.entry[i].gsx$line2.$t);
          }
          if(data.feed.entry[i].gsx$website){
            // console.log('3rd content: ', data.feed.entry[i].gsx$website.$t);
            website.push(data.feed.entry[i].gsx$website.$t);
          }
          if(data.feed.entry[i].gsx$imagename){
            // console.log('Image name: ', data.feed.entry[i].gsx$imagename.$t);
            image.push(data.feed.entry[i].gsx$imagename.$t);
          }
          if(data.feed.entry[i].gsx$imagethanks){
            // console.log('Image thanks: ', data.feed.entry[i].gsx$imagethanks.$t);
            thanks.push(data.feed.entry[i].gsx$imagethanks.$t);
          }
          if(data.feed.entry[i].gsx$type){
            type.push(data.feed.entry[i].gsx$type.$t);
          }
          
        }
      },
      error: function(){
        console.log("oh oh! Something went wrong");
        $('.swipeContainer').hide();
        $('.failureContainer').show();
      },
      dataType:"json",
  });
}

function tryAgain(){
  $('.swipeContainer').show();
  $('.failureContainer').hide();
  getData();
}