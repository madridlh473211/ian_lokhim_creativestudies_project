input.onPinPressed(TouchPin.P0, function () {
    for (let index = 0; index < 10000000000000000000; index++) {
        if (stopped == 0) {
            time += 1
            basic.pause(190)
            basic.showNumber(time)
            basic.pause(190)
            basic.clearScreen()
            if (time == 9) {
                time += -10
            }
        }
    }
})
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 10000000000000000000; index++) {
        if (stopped == 0) {
            time += 1
            basic.pause(190)
            basic.showNumber(time)
            basic.pause(190)
            basic.clearScreen()
            if (time == 9) {
                time += -10
            }
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    stopped = 1
    time = 0
})
input.onButtonPressed(Button.B, function () {
    stopped = 1
    basic.showNumber(time)
})
let time = 0
let stopped = 0
stopped = 0
basic.forever(function () {
	
})
