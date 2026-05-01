input.onButtonPressed(Button.A, function () {
    if (playerCar.get(LedSpriteProperty.X) > 0) {
        playerCar.change(LedSpriteProperty.X, -1)
    }
})
input.onButtonPressed(Button.B, function () {
    if (playerCar.get(LedSpriteProperty.X) < 4) {
        playerCar.change(LedSpriteProperty.X, 1)
    }
})
let car3: game.LedSprite = null
let car2: game.LedSprite = null
let car1: game.LedSprite = null
let car0: game.LedSprite = null
let score = 0
let car4: game.LedSprite = null
let gameOn = false
let playerCar: game.LedSprite = null
bluetooth.startLEDService()
bluetooth.startIOPinService()
bluetooth.startButtonService()
music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
basic.pause(100)
music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
basic.pause(100)
music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
basic.pause(100)
music.play(music.tonePlayable(523, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
basic.pause(500)
basic.forever(function () {
    basic.pause(randint(0, 5000))
    if (gameOn == true) {
        car4 = game.createSprite(4, randint(0, -5))
    }
    basic.pause(randint(0, 5000))
    while (gameOn == true) {
        if (car4.get(LedSpriteProperty.Y) == 4) {
            if (playerCar.isTouching(car4)) {
                gameOn = false
            } else {
                score = score + 1
                car4.set(LedSpriteProperty.Y, randint(0, -5))
                basic.pause(randint(0, 5000))
            }
        } else {
            car4.change(LedSpriteProperty.Y, 1)
            basic.pause(500)
        }
    }
})
basic.forever(function () {
    score = 0
    playerCar = game.createSprite(2, 4)
    gameOn = true
    while (gameOn == true) {
        basic.pause(200)
    }
    game.addScore(score)
    game.gameOver()
})
basic.forever(function () {
    basic.pause(randint(0, 5000))
    if (gameOn == true) {
        car0 = game.createSprite(0, randint(0, -5))
    }
    basic.pause(randint(0, 5000))
    while (gameOn == true) {
        if (car0.get(LedSpriteProperty.Y) == 4) {
            if (playerCar.isTouching(car0)) {
                gameOn = false
            } else {
                score = score + 1
                car0.set(LedSpriteProperty.Y, randint(0, -5))
                basic.pause(randint(0, 5000))
            }
        } else {
            car0.change(LedSpriteProperty.Y, 1)
            basic.pause(500)
        }
    }
})
basic.forever(function () {
    basic.pause(randint(0, 5000))
    if (gameOn == true) {
        car1 = game.createSprite(1, randint(0, -5))
    }
    basic.pause(randint(0, 5000))
    while (gameOn == true) {
        if (car1.get(LedSpriteProperty.Y) == 4) {
            if (playerCar.isTouching(car1)) {
                gameOn = false
            } else {
                score = score + 1
                car1.set(LedSpriteProperty.Y, randint(0, -5))
                basic.pause(randint(0, 5000))
            }
        } else {
            car1.change(LedSpriteProperty.Y, 1)
            basic.pause(500)
        }
    }
})
basic.forever(function () {
    basic.pause(randint(0, 5000))
    if (gameOn == true) {
        car2 = game.createSprite(2, randint(0, -5))
    }
    basic.pause(randint(0, 5000))
    while (gameOn == true) {
        if (car2.get(LedSpriteProperty.Y) == 4) {
            if (playerCar.isTouching(car2)) {
                gameOn = false
            } else {
                score = score + 1
                car2.set(LedSpriteProperty.Y, randint(0, -5))
                basic.pause(randint(0, 5000))
            }
        } else {
            car2.change(LedSpriteProperty.Y, 1)
            basic.pause(500)
        }
    }
})
basic.forever(function () {
    basic.pause(randint(0, 5000))
    if (gameOn == true) {
        car3 = game.createSprite(3, randint(0, -5))
    }
    basic.pause(randint(0, 5000))
    while (gameOn == true) {
        if (car3.get(LedSpriteProperty.Y) == 4) {
            if (playerCar.isTouching(car3)) {
                gameOn = false
            } else {
                score = score + 1
                car3.set(LedSpriteProperty.Y, randint(0, -5))
                basic.pause(randint(0, 5000))
            }
        } else {
            car3.change(LedSpriteProperty.Y, 1)
            basic.pause(500)
        }
    }
})
