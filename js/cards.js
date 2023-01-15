export let cardSelected = "none"

export let icoSelectedSaved =''

export let cardSelectedSaved=''

export let cardSaved = ''

export const cardLayout = {
    forest: 'forest',
    rain: 'rain',
    coffeeshop: 'coffeeshop',
    fireplace: 'fireplace',
    

}

export const icoLayout = {
    forest: 'forestIco',
    rain: 'rainIco',
    coffeeshop: 'coffeeshopIco',
    fireplace: 'fireplaceIco'
}

export const volumCard = {
    forest: 'volumforest',
    rain: 'volumrain',
    coffeeshop: 'volumcoffeeshop',
    fireplace: 'volumfireplace',
}

export function Card (sound, tracks) {
    
    function clearCard () {

        document.getElementById(icoLayout.forest).style.fill = getComputedStyle(document.documentElement).getPropertyValue('--icon-color')
        document.getElementById(cardLayout.forest).style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--card-bg-color')
        document.getElementById(volumCard.forest).disabled = true;
        document.getElementById(icoLayout.rain).style.fill = getComputedStyle(document.documentElement).getPropertyValue('--icon-color')
        document.getElementById(cardLayout.rain).style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--card-bg-color')
        document.getElementById(volumCard.rain).disabled = true;
        document.getElementById(icoLayout.coffeeshop).style.fill = getComputedStyle(document.documentElement).getPropertyValue('--icon-color')
        document.getElementById(cardLayout.coffeeshop).style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--card-bg-color')
        document.getElementById(volumCard.coffeeshop).disabled = true;
        document.getElementById(icoLayout.fireplace).style.fill = getComputedStyle(document.documentElement).getPropertyValue('--icon-color')
        document.getElementById(cardLayout.fireplace).style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--card-bg-color')
        document.getElementById(volumCard.fireplace).disabled = true;
    }
    
    
    function clickCard (card, ico, volum) {
        if (cardSelected !== card || cardSelected == "none") {
            cardSelected = card
            clearCard()
            document.getElementById(ico).style.fill = getComputedStyle(document.documentElement).getPropertyValue('--icon-selected-color')
            document.getElementById(card).style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--card-selected-bg-color')
            document.getElementById(volum).disabled = false
            SaveSound(tracks)
            return
        }
        if (cardSelected == card) {
            cardSelected = "none"
            cardSaved = ''
            clearCard()
            sound.clearSound()
        }
    }
    function SaveSound (tracks){
        switch (getComputedStyle(document.documentElement).getPropertyValue('--icon-selected-color')) {
            case document.getElementById(icoLayout.forest).style.fill:
                cardSaved = tracks.forestSound
                icoSelectedSaved = icoLayout.forest
                cardSelectedSaved = cardLayout.forest
                break;
            case document.getElementById(icoLayout.rain).style.fill:
                cardSaved = tracks.rainSound
                icoSelectedSaved = icoLayout.rain
                cardSelectedSaved = cardLayout.rain
                break;
            case document.getElementById(icoLayout.coffeeshop).style.fill:
                cardSaved = tracks.coffeeShopSound
                icoSelectedSaved = icoLayout.coffeeshop
                cardSelectedSaved = cardLayout.coffeeshop
                break;
            case document.getElementById(icoLayout.fireplace).style.fill:
                cardSaved = tracks.firePlaceSound
                icoSelectedSaved = icoLayout.fireplace
                cardSelectedSaved = cardLayout.fireplace
                break;
        }
    }

    return {
        clearCard,
        clickCard,
    }
}


export function volumCardChange(volum) {
    return document.querySelector('#' + volum).value
}