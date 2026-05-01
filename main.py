def on_button_pressed_a():
    if playerCar.get(LedSpriteProperty.X) > 0:
        playerCar.change(LedSpriteProperty.X, -1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    if playerCar.get(LedSpriteProperty.X) < 4:
        playerCar.change(LedSpriteProperty.X, 1)
input.on_button_pressed(Button.B, on_button_pressed_b)

car4: game.LedSprite = None
car3: game.LedSprite = None
car2: game.LedSprite = None
car1: game.LedSprite = None
car0: game.LedSprite = None
gameOn = False
score = 0
playerCar: game.LedSprite = None
WSJoyStick.joy_stick_init()
WSJoyStick.play_music(262, music.beat(BeatFraction.WHOLE))
basic.pause(200)
WSJoyStick.play_music(262, music.beat(BeatFraction.WHOLE))
basic.pause(200)
WSJoyStick.play_music(262, music.beat(BeatFraction.WHOLE))
basic.pause(200)
WSJoyStick.play_music(523, music.beat(BeatFraction.WHOLE))
basic.pause(500)

def on_forever():
    global score, playerCar, gameOn
    score = 0
    playerCar = game.create_sprite(2, 4)
    gameOn = True
    while gameOn == True:
        basic.pause(200)
    game.add_score(score)
    game.game_over()
basic.forever(on_forever)

def on_forever2():
    global car0, gameOn, score
    basic.pause(randint(0, 5000))
    if gameOn == True:
        car0 = game.create_sprite(0, randint(0, -5))
    basic.pause(randint(0, 5000))
    while gameOn == True:
        if car0.get(LedSpriteProperty.Y) == 4:
            if playerCar.is_touching(car0):
                gameOn = False
            else:
                score = score + 1
                car0.set(LedSpriteProperty.Y, randint(0, -5))
                basic.pause(randint(0, 5000))
        else:
            car0.change(LedSpriteProperty.Y, 1)
            basic.pause(500)
basic.forever(on_forever2)

def on_forever3():
    global car1, gameOn, score
    basic.pause(randint(0, 5000))
    if gameOn == True:
        car1 = game.create_sprite(1, randint(0, -5))
    basic.pause(randint(0, 5000))
    while gameOn == True:
        if car1.get(LedSpriteProperty.Y) == 4:
            if playerCar.is_touching(car1):
                gameOn = False
            else:
                score = score + 1
                car1.set(LedSpriteProperty.Y, randint(0, -5))
                basic.pause(randint(0, 5000))
        else:
            car1.change(LedSpriteProperty.Y, 1)
            basic.pause(500)
basic.forever(on_forever3)

def on_forever4():
    global car2, gameOn, score
    basic.pause(randint(0, 5000))
    if gameOn == True:
        car2 = game.create_sprite(2, randint(0, -5))
    basic.pause(randint(0, 5000))
    while gameOn == True:
        if car2.get(LedSpriteProperty.Y) == 4:
            if playerCar.is_touching(car2):
                gameOn = False
            else:
                score = score + 1
                car2.set(LedSpriteProperty.Y, randint(0, -5))
                basic.pause(randint(0, 5000))
        else:
            car2.change(LedSpriteProperty.Y, 1)
            basic.pause(500)
basic.forever(on_forever4)

def on_forever5():
    global car3, gameOn, score
    basic.pause(randint(0, 5000))
    if gameOn == True:
        car3 = game.create_sprite(3, randint(0, -5))
    basic.pause(randint(0, 5000))
    while gameOn == True:
        if car3.get(LedSpriteProperty.Y) == 4:
            if playerCar.is_touching(car3):
                gameOn = False
            else:
                score = score + 1
                car3.set(LedSpriteProperty.Y, randint(0, -5))
                basic.pause(randint(0, 5000))
        else:
            car3.change(LedSpriteProperty.Y, 1)
            basic.pause(500)
basic.forever(on_forever5)

def on_forever6():
    global car4, gameOn, score
    basic.pause(randint(0, 5000))
    if gameOn == True:
        car4 = game.create_sprite(4, randint(0, -5))
    basic.pause(randint(0, 5000))
    while gameOn == True:
        if car4.get(LedSpriteProperty.Y) == 4:
            if playerCar.is_touching(car4):
                gameOn = False
            else:
                score = score + 1
                car4.set(LedSpriteProperty.Y, randint(0, -5))
                basic.pause(randint(0, 5000))
        else:
            car4.change(LedSpriteProperty.Y, 1)
            basic.pause(500)
basic.forever(on_forever6)
