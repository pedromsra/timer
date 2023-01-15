import {cardSelectedSaved, icoSelectedSaved} from './cards.js'

export function DarkMode(
    Elements,
    card,
    
){
    Elements.darkModeOffButton.classList.toggle('hide')
    Elements.darkModeOnButton.classList.toggle('hide')
    if(Elements.darkModeOffButton.classList.contains('hide')){
        document.documentElement.style.setProperty('--bg-color', getComputedStyle(document.documentElement).getPropertyValue('--bg-color-dark'))
        document.documentElement.style.setProperty('--fc-primary', getComputedStyle(document.documentElement).getPropertyValue('--fc-primary-dark'))
        document.documentElement.style.setProperty('--fc-primary-hover', getComputedStyle(document.documentElement).getPropertyValue('--fc-primary-dark-hover'))
        document.documentElement.style.setProperty('--icon-color', getComputedStyle(document.documentElement).getPropertyValue('--icon-color-dark'))
        document.documentElement.style.setProperty('--icon-selected-color', getComputedStyle(document.documentElement).getPropertyValue('--icon-selected-color-dark'))
        document.documentElement.style.setProperty('--card-bg-color', getComputedStyle(document.documentElement).getPropertyValue('--card-bg-color-dark'))
        document.documentElement.style.setProperty('--card-selected-bg-color', getComputedStyle(document.documentElement).getPropertyValue('--card-selected-bg-color-dark'))
        document.documentElement.style.setProperty('--card-bg-color-hover', getComputedStyle(document.documentElement).getPropertyValue('--card-bg-color-dark-hover'))

    } else {
        document.documentElement.style.setProperty('--bg-color', getComputedStyle(document.documentElement).getPropertyValue('--bg-color-light'))
        document.documentElement.style.setProperty('--fc-primary-hover', getComputedStyle(document.documentElement).getPropertyValue('--fc-primary-light-hover'))
        document.documentElement.style.setProperty('--fc-primary', getComputedStyle(document.documentElement).getPropertyValue('--fc-primary-light'))
        document.documentElement.style.setProperty('--icon-color', getComputedStyle(document.documentElement).getPropertyValue('--icon-color-light'))
        document.documentElement.style.setProperty('--icon-selected-color', getComputedStyle(document.documentElement).getPropertyValue('--icon-selected-color-light'))
        document.documentElement.style.setProperty('--card-bg-color', getComputedStyle(document.documentElement).getPropertyValue('--card-bg-color-light'))
        document.documentElement.style.setProperty('--card-selected-bg-color', getComputedStyle(document.documentElement).getPropertyValue('--card-selected-bg-color-light'))
        document.documentElement.style.setProperty('--card-bg-color-hover', getComputedStyle(document.documentElement).getPropertyValue('--card-bg-color-light-hover'))
        
    }
    if(icoSelectedSaved != '') {
        card.clearCard()
        document.getElementById(icoSelectedSaved).style.fill = getComputedStyle(document.documentElement).getPropertyValue('--icon-selected-color')
        document.getElementById(cardSelectedSaved).style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--card-selected-bg-color')
    }
}