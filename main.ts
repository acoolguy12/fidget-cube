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
    music.ringTone(988)
    music.ringTone(131)
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
music.playMelody("C D E F G A B C5 ", 200)
basic.showLeds(`
    # . # . .
    # . # . .
    # # # . .
    # . # . .
    # . # . .
    `)
basic.showLeds(`
    . # # # .
    . # . . .
    . # # # .
    . # . . .
    . # # # .
    `)
basic.showLeds(`
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    . . # # #
    `)
basic.showLeds(`
    # . . . .
    # . . . .
    # . . . .
    # . . . .
    # # # . .
    `)
basic.showLeds(`
    . # # # .
    . # . # .
    . # . # .
    . # . # .
    . # # # .
    `)
