input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # . # .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . # . # .
        # . . . #
        . # . # .
        . . # . .
        `)
    basic.showLeds(`
        . # . # .
        # . . . #
        . . . . .
        # . . . #
        . # . # .
        `)
    basic.showLeds(`
        # . . . #
        . . . . .
        . . . . .
        . . . . .
        # . . . #
        `)
})
input.onGesture(Gesture.TiltLeft, function () {
    music.stopAllSounds()
    basic.clearScreen()
})
input.onGesture(Gesture.ScreenDown, function () {
    music.playMelody("E A B F D C5 G E ", 120)
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 3; index++) {
        music.playTone(262, music.beat(BeatFraction.Double))
        music.playTone(294, music.beat(BeatFraction.Double))
        music.playTone(330, music.beat(BeatFraction.Double))
    }
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Double))
    music.playTone(294, music.beat(BeatFraction.Double))
    for (let index = 0; index < 2; index++) {
        for (let index = 0; index < 2; index++) {
            music.playTone(262, music.beat(BeatFraction.Double))
        }
        music.playTone(392, music.beat(BeatFraction.Double))
        music.playTone(440, music.beat(BeatFraction.Double))
        music.playTone(330, music.beat(BeatFraction.Double))
        music.playTone(294, music.beat(BeatFraction.Double))
    }
    for (let index = 0; index < 2; index++) {
        music.playTone(262, music.beat(BeatFraction.Double))
    }
    for (let index = 0; index < 2; index++) {
        music.playTone(392, music.beat(BeatFraction.Double))
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Happy)
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        # . # . #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . # . #
        . # . # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
})
input.onGesture(Gesture.TiltRight, function () {
    rps = randint(1, 3)
    if (rps == 1) {
        basic.showString("R")
    } else if (rps == 2) {
        basic.showString("P")
    } else {
        basic.showString("S")
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
let rps = 0
music.playMelody("C D E F G A B C5 ", 200)
basic.showString("Hello!")
