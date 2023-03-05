radio.onReceivedNumber(function (receivedNumber) {
    utetemp = receivedNumber
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(utetemp)
})
let utetemp = 0
radio.setGroup(23)
