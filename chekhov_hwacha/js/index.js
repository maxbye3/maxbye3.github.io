const mainVideo = document.getElementById('mainVideo')
const mapVideo = document.getElementById('mapVideo')
let initialClick = true

setInterval(() => {
  mapVideo.currentTime = mainVideo.currentTime
}, 100)

// on mobile
if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  // some code..
  document.getElementById('interactionType').remove()
}

const touchdown = () => {
  mainVideo.play()
  mapVideo.play()
  if (initialClick) {
    document.getElementById('disclaimer').style.display = 'none'
    initialClick = false
    return
  }
  mainVideo.style.opacity = 0
  // console.log('touch down')
}

const removeDisclaimer = () => {
  document.getElementById('mapMode').remove()
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
