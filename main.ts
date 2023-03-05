// Her defineres variabelen utetemp etter signalvedrdien som kommer over radio
radio.onReceivedNumber(function (receivedNumber) {
    utetemp = receivedNumber
})
// Knapp a viser denne bittens temperatur
// 
input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
})
// b viser utetemperatur fra radiosignalet til den andre bitten
input.onButtonPressed(Button.B, function () {
    basic.showNumber(utetemp)
})
let utetemp = 0
// Vi setter radiogruppe som er lik ute micro:bitten
// 
radio.setGroup(23)
