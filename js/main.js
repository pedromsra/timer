import {Controls, minutes, seconds, playButton, pauseButton} from './controls.js'
import {Sound, tracks} from './sound.js'
import {Card, cardLayout, icoLayout, cardSaved, volumCard} from './cards.js'
import {Elements} from './elements.js'
import {Events} from './events.js'
import {DarkMode} from './darkmode.js'

const sound = Sound()
const card = Card(sound, tracks)
const control = Controls(sound, card, cardSaved)

Events(control, minutes, seconds, playButton, pauseButton, sound, tracks, card, cardLayout, icoLayout, volumCard, Elements, DarkMode)