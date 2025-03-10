scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.gameOver(true)
})
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 8 8 8 8 . . . . . . . 
    . . . . . 8 f f 8 . . . . . . . 
    . . . . . 8 8 8 8 . . . . . . . 
    . . . . . . 8 8 . . . . . . . . 
    . . . . . 8 8 8 8 . . . . . . . 
    . . . . . . 8 8 . . . . . . . . 
    . . . . . . 8 8 . . . . . . . . 
    . . . . . 8 8 8 8 . . . . . . . 
    . . . . . 8 8 8 8 . . . . . . . 
    . . . . . 8 . . 8 . . . . . . . 
    `, SpriteKind.Player)
mySprite = Render.getRenderSpriteVariable()
tiles.placeOnTile(mySprite, tiles.getTileLocation(6, 15))
scene.cameraFollowSprite(mySprite)
scene.setBackgroundColor(8)
tiles.setCurrentTilemap(tilemap`level2`)
Render.setViewAngleInDegree(240)
let myCounter = sevenseg.createCounter(SegmentStyle.Thick, SegmentScale.Half, 5)
myCounter.count += 5
