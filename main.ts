namespace SpriteKind {
    export const D = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.floorLight2)
    crystal += 1
    info.changeScoreBy(0 + 1)
})
function wall () {
	
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.chestOpen)
    game.setGameOverMessage(true, "AMOGUS WIN!")
    game.gameOver(true)
    game.setGameOverEffect(true, effects.confetti)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`ABOBA0`, function (sprite, location) {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . d d d d d . . . . . . . 
        . . . d d d d d d . . . . . . . 
        . d d d d d d d d . . . . . . . 
        d d 3 b d d d d d d . . . . . . 
        d 3 b b d d d d d f d d . . . . 
        d d a a d d b d d f d d . . . . 
        . d d d b b b d d f d d . . . . 
        . . . b b d d d d f d b . . . . 
        . . . d d d d d d f b b . . . . 
        . . . d d d b d d b . . . . . . 
        . . . d d b . d d b . . . . . . 
        . . . b b b . b b b . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    game.setGameOverMessage(false, "GAME OVER!")
    game.gameOver(false)
    controller.moveSprite(mySprite, 0, 0)
})
info.onScore(6, function () {
    for (let value of tiles.getTilesByType(assets.tile`ABOBA1`)) {
        tiles.setTileAt(value, sprites.dungeon.floorLight2)
        tiles.setWallAt(value, false)
    }
})
let crystal = 0
let mySprite: Sprite = null
info.setScore(0)
tiles.setCurrentTilemap(tilemap`level2`)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 2 2 2 2 2 . . . . . . . 
    . . . 2 2 2 2 2 2 . . . . . . . 
    . 2 2 2 2 2 2 2 2 . . . . . . . 
    2 2 1 9 2 2 2 2 2 2 . . . . . . 
    2 1 9 9 2 2 2 2 2 f 2 2 . . . . 
    2 2 6 6 2 2 2 2 2 f 2 2 . . . . 
    . 2 2 2 2 2 2 2 2 f 2 2 . . . . 
    . . . 2 2 2 2 2 2 f 2 2 . . . . 
    . . . 2 2 2 2 2 2 f 2 2 . . . . 
    . . . 2 2 2 2 2 2 2 . . . . . . 
    . . . 2 2 2 . 2 2 2 . . . . . . 
    . . . 2 2 2 . 2 2 2 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
mySprite.setPosition(127, 100)
