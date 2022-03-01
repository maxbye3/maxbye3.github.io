const mainVideo = document.getElementById('mainVideo')
const mapVideo = document.getElementById('mapVideo')
function startVideo() {
  console.log('hit!')
  document.getElementById('disclaimer').style.display = 'none'
  mainVideo.play()
}
setInterval(() => {
  mapVideo.currentTime = mainVideo.currentTime
}, 100)
