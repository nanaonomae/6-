input.onButtonPressed(Button.A, function () {
    led.unplot(0, 1)
    if (判定１.isTouching(音１)) {
        music.playTone(楽譜[楽譜の位置], music.beat(BeatFraction.Half))
        楽譜の位置 += 1
        if (楽譜の位置 >= 楽譜.length) {
            楽譜の位置 = 0
        }
        game.setScore(game.score() + 1)
    }
})
input.onButtonPressed(Button.B, function () {
    led.unplot(0, 3)
    if (判定２.isTouching(音２)) {
        music.playTone(楽譜[楽譜の位置], music.beat(BeatFraction.Half))
        楽譜の位置 += 1
        if (楽譜の位置 >= 楽譜.length) {
            楽譜の位置 = 0
        }
        game.setScore(game.score() + 1)
    }
})
let 楽譜の位置 = 0
let 楽譜: number[] = []
let 音２: game.LedSprite = null
let 音１: game.LedSprite = null
let 判定２: game.LedSprite = null
let 判定１: game.LedSprite = null
let BPM = input.lightLevel()
basic.pause(100)
BPM = Math.map(input.lightLevel(), 0, 255, 120, 240)
let 停止時間 = Math.idiv(60 * 1000, BPM)
game.startCountdown(30000)
game.setScore(0)
判定１ = game.createSprite(0, 1)
判定２ = game.createSprite(0, 3)
音１ = game.createSprite(0, 1)
音２ = game.createSprite(0, 3)
楽譜 = [
262,
294,
330,
349,
392,
440,
494,
523
]
楽譜の位置 = 0
basic.pause(1000)
basic.forever(function () {
    音１.change(LedSpriteProperty.X, -1)
    if (音１.get(LedSpriteProperty.X) == 0) {
        basic.pause(randint(0, 4) * 停止時間)
        音１.set(LedSpriteProperty.X, 4)
    }
    basic.pause(停止時間)
})
basic.forever(function () {
    音２.change(LedSpriteProperty.X, -1)
    if (音２.get(LedSpriteProperty.X) == 0) {
        basic.pause(randint(0, 4) * 停止時間)
        音２.set(LedSpriteProperty.X, 4)
    }
    basic.pause(停止時間)
})
