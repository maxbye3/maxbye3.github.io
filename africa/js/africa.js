let intVideo = true
function clickForAfrica() {
  if (intVideo) {
    document.getElementById('myVideo').play()
    document.getElementById('disclaimer').style.display = 'none'
    intVideo = false
  }
  const africaText = {}
  africaText.opacityIn = [0, 1]
  africaText.scaleIn = [0.2, 1]
  africaText.scaleOut = 3
  africaText.durationIn = 800
  africaText.durationOut = 600
  africaText.delay = 500

  document.getElementById('africaContainer').innerHTML =
    '<div class="text africaText text-center fixed h-full w-full flex items-center justify-center absolute">\
  <span class="africaFont animate-charcter absolute opacity-0 letters letters-1">Africa</span>\
  </div>\
  <audio id="audio" src="assets/africa.mp3"></audio>'

  var audio = document.getElementById('audio')
  audio.play()

  anime
    .timeline({ loop: false })
    .add({
      targets: '.africaText .letters-1',
      opacity: africaText.opacityIn,
      scale: africaText.scaleIn,
      duration: africaText.durationIn,
    })
    .add({
      targets: '.africaText .letters-1',
      opacity: 0,
      scale: africaText.scaleOut,
      duration: africaText.durationOut,
      easing: 'easeInExpo',
      delay: africaText.delay,
    })
    .add({
      targets: '.africaText .letters-2',
      opacity: africaText.opacityIn,
      scale: africaText.scaleIn,
      duration: africaText.durationIn,
    })
    .add({
      targets: '.africaText .letters-2',
      opacity: 0,
      scale: africaText.scaleOut,
      duration: africaText.durationOut,
      easing: 'easeInExpo',
      delay: africaText.delay,
    })
    .add({
      targets: '.africaText .letters-3',
      opacity: africaText.opacityIn,
      scale: africaText.scaleIn,
      duration: africaText.durationIn,
    })
    .add({
      targets: '.africaText .letters-3',
      opacity: 0,
      scale: africaText.scaleOut,
      duration: africaText.durationOut,
      easing: 'easeInExpo',
      delay: africaText.delay,
    })
    .add({
      targets: '.africaText',
      opacity: 0,
      duration: 500,
      delay: 500,
    })

  setTimeout(() => {
    document.getElementById('africaContainer').innerHTML = ''
  }, 2000)
}
