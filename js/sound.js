export const tracks = {
    forestSound: new Audio("sound/floresta.mp3"),
    rainSound: new Audio("./sound/chuva.mp3"),
    coffeeShopSound: new Audio("./sound/cafeteria.mp3"),
    firePlaceSound: new Audio("./sound/lareira.mp3"),
}

let soundCard

export function Sound () {
    const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
    const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

    function playBackgroundSound (sound, pauseButton, volumCardChange) {
        sound.loop = true
        clearSound()
        soundCard = sound
        if(pauseButton.classList.contains('hide')){
            sound.pause()
        } else {
            sound.volume = Number(volumCardChange) / 10
            sound.play()
        }
    }

    function alarm () {
        clearSound()
        kitchenTimer.play()
    }

    function clearSound () {
        tracks.forestSound.pause()
        tracks.rainSound.pause()
        tracks.coffeeShopSound.pause()
        tracks.firePlaceSound.pause()
    }


    function buttonPressSound () {
        buttonPressAudio.play()
    }
    return {
        playBackgroundSound,
        alarm,
        clearSound,
        buttonPressSound
    }
}
