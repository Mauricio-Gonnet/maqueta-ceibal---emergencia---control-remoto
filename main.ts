radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 3) {
        basic.showIcon(IconNames.No)
        basic.clearScreen()
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    } else {
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
    basic.showIcon(IconNames.Happy)
    basic.pause(2000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
    basic.showIcon(IconNames.Sad)
    basic.pause(2000)
    basic.clearScreen()
})
radio.setGroup(1)
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(1000)
})
