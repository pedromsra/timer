let timerTimeOut
let sec = Number(seconds.innerText)
let min = Number(minutes.innerText)
export function timeCountDown (playButton, pauseButton, seconds, minutes, resetTimer) {
    timerTimeOut = setTimeout(function(){
        let playrunningtime = playButton.classList.contains('hide')
        if(playrunningtime) {
            let pauserunningtime = pauseButton.classList.contains('hide')
            sec = Number(seconds.innerText)
            min = Number(minutes.innerText)
            if (sec <= 0 ) {
                sec = 60
                --min
                if(min < 0) {
                    resetTimer()
                    return
                }
            }
            minutes.innerText = String(min).padStart(2,'0')
            seconds.innerText = String(sec-1).padStart(2,'0')

            if(pauserunningtime){
                seconds.innerText = String(sec).padStart(2,'0')
                return
            }
            timeCountDown (playButton, pauseButton, seconds, minutes, resetTimer)
        } else {
            return
        }
    }, 1000)
}