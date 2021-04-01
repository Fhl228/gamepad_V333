gamePad.onEvent(GamerBitPin.P14, GamerBitEvent.Up, function () {
    radio.sendNumber(0)
})
gamePad.onEvent(GamerBitPin.P16, GamerBitEvent.Up, function () {
    radio.sendNumber(0)
})
gamePad.onEvent(GamerBitPin.P16, GamerBitEvent.Down, function () {
    radio.sendNumber(5)
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
gamePad.onEvent(GamerBitPin.P14, GamerBitEvent.Down, function () {
    radio.sendNumber(6)
})
gamePad.onEvent(GamerBitPin.P13, GamerBitEvent.Down, function () {
    radio.sendNumber(4)
})
gamePad.onEvent(GamerBitPin.P15, GamerBitEvent.Up, function () {
    radio.sendNumber(0)
})
gamePad.onEvent(GamerBitPin.P15, GamerBitEvent.Down, function () {
    radio.sendNumber(3)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
})
gamePad.onEvent(GamerBitPin.P13, GamerBitEvent.Up, function () {
    radio.sendNumber(0)
})
radio.setGroup(155)
