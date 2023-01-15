import {timeCountDown} from './timer.js'

export let minutes = document.querySelector("#minutes")
export let seconds = document.querySelector('#seconds')

export const playButton = document.querySelector('.play')
export const pauseButton = document.querySelector('.pause')

function notNumber(value) {
    return isNaN(value) || value == ""
}

export function Controls (sound, card){

    let setminutes = Number(minutes.innerText)
    let setseconds = Number(seconds.innerText)

    function playPause() {
        playButton.classList.toggle("hide")
        pauseButton.classList.toggle("hide")

        if(pauseButton.classList.contains("hide")){
            sound.clearSound()
        }
        
        timeCountDown(playButton, pauseButton, seconds, minutes, resetTimer)
    }

    function setMinutes () {
        setminutes = prompt ("Digite os minutos desejados")
        if (notNumber(setminutes) == false && setminutes !== null){
            minutes.innerText = String(setminutes).padStart(2,'0')
        } else {
            alert("Por favor, digite apenas números.")
            setMinutes()
        }
        
    }

    function setSeconds () {
        setseconds = prompt ("Digite os segundos desejados")
        if (notNumber(setseconds) == false && setseconds !== null){
            seconds.innerText = String(setseconds).padStart(2,'0')
        }else {
            alert("Por favor, digite apenas números.")
            setSeconds()
        }
    }

    function timeAdd5Minutes() {
        minutes.innerText = String(Number(minutes.innerText) + 5).padStart(2,'0')
    }

    function timeRemove5Minutes() {
        if (Number(minutes.innerText) >= 5) {
            minutes.innerText = String(Number(minutes.innerText) - 5).padStart(2,'0')
        } else {
            minutes.innerText = '00'
            seconds.innerText = '00'
        }

    }

    function resetTimer () {
        let playrunningtime = playButton.classList.contains('hide')
        if (playrunningtime) {
            playButton.classList.toggle("hide")
            pauseButton.classList.toggle("hide")
        }
        sound.alarm()
        sound.clearSound()
        card.clearCard()
        minutes.innerText = String(setminutes).padStart(2,'0')
        seconds.innerText = String(setseconds).padStart(2,'0')
    }

    return {
        playPause,
        setMinutes,
        setSeconds,
        timeAdd5Minutes,
        timeRemove5Minutes,
        resetTimer
    }

}