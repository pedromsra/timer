import {volumCardChange} from './cards.js'

export function Events (control, minutes, seconds, playButton, pauseButton, sound, tracks, card, cardLayout, icoLayout, volumCard, Elements, DarkMode) {

    Elements.darkModeOnButton.addEventListener('click', function() {
        DarkMode(Elements, card)
        })
    Elements.darkModeOffButton.addEventListener('click', function() {
        DarkMode(Elements, card)
        })

    minutes.addEventListener('click', control.setMinutes)
    seconds.addEventListener('click', control.setSeconds)

    playButton.addEventListener('click', function() {
        sound.buttonPressSound()
        control.playPause()
    })
    pauseButton.addEventListener('click', function() {
        sound.buttonPressSound ()
        control.playPause()
    })
    Elements.stopButton.addEventListener('click', function(){
        sound.buttonPressSound ()
        control.resetTimer()
    })
    Elements.add5MinutesButton.addEventListener('click', function(){
        control.timeAdd5Minutes ()
        sound.buttonPressSound ()
    })
    Elements.remove5MinutesButton.addEventListener('click', function () {
        control.timeRemove5Minutes ()
        sound.buttonPressSound ()
    })
    Elements.playForestSoundCard.addEventListener('click', function(){
        sound.playBackgroundSound(tracks.forestSound, pauseButton, volumCardChange(volumCard.forest))
        card.clickCard(cardLayout.forest,icoLayout.forest, volumCard.forest)
    })
    Elements.playRainSoundCard.addEventListener('click', function(){
        sound.playBackgroundSound(tracks.rainSound, pauseButton, volumCardChange(volumCard.rain))
        card.clickCard(cardLayout.rain,icoLayout.rain, volumCard.rain)
    })
    Elements.playCoffeeShopSoundCard.addEventListener('click', function(){
        sound.playBackgroundSound(tracks.coffeeShopSound, pauseButton, volumCardChange(volumCard.coffeeshop))
        card.clickCard(cardLayout.coffeeshop,icoLayout.coffeeshop, volumCard.coffeeshop)
    })
    Elements.playFirePlaceSoundCard.addEventListener('click', function(){
        sound.playBackgroundSound(tracks.firePlaceSound, pauseButton, volumCardChange(volumCard.fireplace))
        card.clickCard(cardLayout.fireplace,icoLayout.fireplace, volumCard.fireplace)
})
    document.querySelector('#volumforest').addEventListener('change', function(){
        volumCardChange(volumCard.forest)
        sound.playBackgroundSound(tracks.forestSound, pauseButton, volumCardChange(volumCard.forest))
    })
}