const mainVideo = document.getElementById('mainVideo')
const mapVideo = document.getElementById('mapVideo')
let initialClick = true

setInterval(() => {
  mapVideo.currentTime = mainVideo.currentTime
}, 100)

const touchdown = () => {
  if (initialClick) {
    document.getElementById('disclaimer').style.display = 'none'
    mainVideo.play()
    mapVideo.play()
    initialClick = false
    return
  }
  mainVideo.style.opacity = 0
  // console.log('touch down')
}
const touchup = () => {
  mainVideo.style.opacity = 100
  // console.log('touch up')
}

document.addEventListener('DOMContentLoaded', function (event) {
  window.addEventListener('mousedown', touchdown, false)
  window.addEventListener('mouseup', touchup, false)
  window.addEventListener('touchstart', touchdown, false)
  window.addEventListener('touchend', touchup, false)
})
