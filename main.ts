namespace MultiplayerState {
    export const score2 = MultiplayerState.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    timer.throttle("action", 1000, function () {
        kcp += 1
    })
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Render.moveWithController(7, 0, 0)
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    Render.moveWithController(5, 2, 0)
})
let mySprite = Render.getRenderSpriteVariable()
tiles.placeOnTile(Render.getRenderSpriteInstance(), tiles.getTileLocation(5, 15))
scene.cameraFollowSprite(mySprite)
scene.setBackgroundColor(2)
tiles.setCurrentTilemap(tilemap`level3`)
Render.setViewAngleInDegree(-90)
info.setScore(0)
let kcp = 0
let lap = 0
let myCounter = sevenseg.createCounter(SegmentStyle.Thick, SegmentScale.Half, 5)
myCounter.count = 0
Render.moveWithController(5, 2, 0)
game.onUpdateInterval(10, function () {
    info.changeScoreBy(1)
})
forever(function () {
    if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile2`)) {
        if (kcp == 1) {
            myCounter.count += 1
            lap += 1
            pause(1000)
            kcp = 0
        }
    }
    if (lap == 3) {
        game.gameOver(true)
    }
})
