input.onButtonPressed(Button.A, function () {
    number1 = randint(0, 10)
})
input.onButtonPressed(Button.B, function () {
    number1 = randint(0, 10)
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(number1 + number2)
})
let number2 = 0
let number1 = 0
number1 = 0
number2 = 0
