function clickForAfrica() {
  const ml4 = {}
  ml4.opacityIn = [0, 1]
  ml4.scaleIn = [0.2, 1]
  ml4.scaleOut = 3
  ml4.durationIn = 800
  ml4.durationOut = 600
  ml4.delay = 500

  document.getElementById('africaContainer').innerHTML =
    '<div class="ml4 text-center fixed h-full w-full flex items-center justify-center absolute">\
      <span class="africaFont animate-charcter absolute opacity-0 letters letters-1">Africa</span>\
    </div>'

  anime
    .timeline({ loop: false })
    .add({
      targets: '.ml4 .letters-1',
      opacity: ml4.opacityIn,
      scale: ml4.scaleIn,
      duration: ml4.durationIn,
    })
    .add({
      targets: '.ml4 .letters-1',
      opacity: 0,
      scale: ml4.scaleOut,
      duration: ml4.durationOut,
      easing: 'easeInExpo',
      delay: ml4.delay,
    })
    .add({
      targets: '.ml4 .letters-2',
      opacity: ml4.opacityIn,
      scale: ml4.scaleIn,
      duration: ml4.durationIn,
    })
    .add({
      targets: '.ml4 .letters-2',
      opacity: 0,
      scale: ml4.scaleOut,
      duration: ml4.durationOut,
      easing: 'easeInExpo',
      delay: ml4.delay,
    })
    .add({
      targets: '.ml4 .letters-3',
      opacity: ml4.opacityIn,
      scale: ml4.scaleIn,
      duration: ml4.durationIn,
    })
    .add({
      targets: '.ml4 .letters-3',
      opacity: 0,
      scale: ml4.scaleOut,
      duration: ml4.durationOut,
      easing: 'easeInExpo',
      delay: ml4.delay,
    })
    .add({
      targets: '.ml4',
      opacity: 0,
      duration: 500,
      delay: 500,
    })
}
