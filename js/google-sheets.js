// var line1 = [];
// var line2 = [];
// var website = [];
// var image = [];
// var thanks = [];
// var type = [];
var currentKindness = {
  line1: [],
  line2: [],
  website: [],
  websiteName: [],
  image: [],
  thanks: [],
  type: [],
};

function getData() {
  if (currentKindness.line1.length > 0) {
    intKindness(currentKindness);
    return;
  }
  $.ajax({
    type: "GET",
    url:
      "https://spreadsheets.google.com/feeds/list/1AoanqLBlXENAKeEvGOTdZhGwswT1Gen0R5n3yxcpZ0k/od6/public/values?alt=json",
    success: function (data) {
      // console.log('data', data.feed.entry);
      for (var i = 0; i < data.feed.entry.length; i++) {
        if (data.feed.entry[i].gsx$line1) {
          // console.log('1st content: ', data.feed.entry[i].gsx$line1.$t);
          currentKindness.line1.push(data.feed.entry[i].gsx$line1.$t);
        }
        if (data.feed.entry[i].gsx$line2) {
          // console.log('2nd content: ', data.feed.entry[i].gsx$line2.$t);
          currentKindness.line2.push(data.feed.entry[i].gsx$line2.$t);
        }
        if (data.feed.entry[i].gsx$websitename) {
          // console.log('3rd content: ', data.feed.entry[i].gsx$website.$t);
          currentKindness.websiteName.push(
            data.feed.entry[i].gsx$websitename.$t
          );
        }
        if (data.feed.entry[i].gsx$website) {
          // console.log('3rd content: ', data.feed.entry[i].gsx$website.$t);
          currentKindness.website.push(data.feed.entry[i].gsx$website.$t);
        }
        if (data.feed.entry[i].gsx$imagename) {
          // console.log('Image name: ', data.feed.entry[i].gsx$imagename.$t);
          currentKindness.image.push(data.feed.entry[i].gsx$imagename.$t);
        }
        if (data.feed.entry[i].gsx$imagethanks) {
          // console.log('Image thanks: ', data.feed.entry[i].gsx$imagethanks.$t);
          currentKindness.thanks.push(data.feed.entry[i].gsx$imagethanks.$t);
        }
        if (data.feed.entry[i].gsx$type) {
          currentKindness.type.push(data.feed.entry[i].gsx$type.$t);
        }
      }
      intKindness(currentKindness);
    },
    error: function () {
      console.log("oh oh! Something went wrong");
      failedLoadGoogleData();
    },
    dataType: "json",
  });
}

function tryAgain() {
  hideAll();
  getData();
}
