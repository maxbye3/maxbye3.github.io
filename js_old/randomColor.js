var lastColor;
randomColor('#otherwise');
for(var i = 0; i < 10; i++){
  randomColor('#swipeColor'+i);
}

function randomColor(classname){
  // console.log('lastColor', lastColor);
  $(classname).removeClass();
  var colors = ['blue', 'pink', 'green', 'red', 'yellow'];
  var random = Math.floor(Math.random() * colors.length);
  var assignedColor = colors[random];
  if(assignedColor == lastColor){
    randomColor(classname);
  } else {
    lastColor = assignedColor;
    $(classname).addClass(assignedColor);
  }
}
