function SetOutputPowerOnPin0 () {
    powerValue = minPinOutputPower + powerStep * brightness
    pins.analogWritePin(AnalogPin.P0, powerValue)
}
input.onButtonPressed(Button.A, function () {
    brightness += -1
    if (brightness < 0) {
        brightness = 0
    }
    basic.showNumber(brightness)
    SetOutputPowerOnPin0()
})
input.onButtonPressed(Button.B, function () {
    brightness += 1
    if (brightness > nrOfSteps) {
        brightness = nrOfSteps
    }
    basic.showNumber(brightness)
    SetOutputPowerOnPin0()
})
let powerValue = 0
let powerStep = 0
let nrOfSteps = 0
let minPinOutputPower = 0
let brightness = 0
brightness = 0
let maxPinOutputPower = 1023
minPinOutputPower = 0
nrOfSteps = 6
powerStep = Math.idiv(maxPinOutputPower - minPinOutputPower, nrOfSteps)
basic.showNumber(brightness)
basic.forever(function () {
	
})
