namespace SpriteKind {
    export const npc = SpriteKind.create()
    export const enemyprojectile = SpriteKind.create()
}
function gohome () {
    if (game.ask("Go Home")) {
        game.splash("You went home...")
        game.splash("Now why would you do that!?!?")
        game.splash("Well whatever")
        game.splash("You never find your bucket:(")
        game.setGameOverMessage(true, "Ending: The Lazy One")
        game.gameOver(true)
    }
}
function bananana_idle () {
    characterAnimations.loopFrames(
    banana,
    assets.animation`bananana idle`,
    150,
    characterAnimations.rule(Predicate.NotMoving)
    )
}
function Blueberry_animation () {
    characterAnimations.loopFrames(
    blueberry,
    assets.animation`Blueberry dance`,
    100,
    characterAnimations.rule(Predicate.NotMoving)
    )
}
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
	
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Onionhome`, function (sprite, location) {
    if (controller.B.isPressed()) {
        gohome()
    }
})
function cherry_animation () {
    if (dancing == true) {
        characterAnimations.loopFrames(
        cherry,
        assets.animation`cherrydancing`,
        100,
        characterAnimations.rule(Predicate.NotMoving)
        )
    } else if (dancing == false) {
        characterAnimations.loopFrames(
        cherry,
        assets.animation`cherryidle`,
        150,
        characterAnimations.rule(Predicate.NotMoving)
        )
    }
}
function creating_animatons () {
    let attackingright = false
    let attackingleft = false
    let attackingdown = false
    let attackingup = false
    if (attackingup == false || (attackingdown == false || (attackingleft == false || attackingright == false))) {
        characterAnimations.loopFrames(
        mySprite,
        assets.animation`idle`,
        125,
        characterAnimations.rule(Predicate.NotMoving)
        )
        characterAnimations.loopFrames(
        mySprite,
        assets.animation`myAnim0`,
        250,
        characterAnimations.rule(Predicate.MovingUp)
        )
        characterAnimations.loopFrames(
        mySprite,
        assets.animation`myAnim`,
        250,
        characterAnimations.rule(Predicate.MovingDown)
        )
        characterAnimations.loopFrames(
        mySprite,
        assets.animation`myAnim1`,
        175,
        characterAnimations.rule(Predicate.MovingLeft)
        )
        characterAnimations.loopFrames(
        mySprite,
        assets.animation`myAnim2`,
        175,
        characterAnimations.rule(Predicate.MovingRight)
        )
    }
}
let badonion: Sprite = null
let cutscene6 = false
let getmap = false
let cabdoneyap = false
let tomato_done_yapping = false
let talktocherrydance = false
let cutscene5 = false
let cutscene4 = false
let cabbage: Sprite = null
let tomato: Sprite = null
let makecodeforums3cutscene = false
let makecodeforums3 = false
let bandoneyapping = false
let cutscene3 = false
let berrydoneyapping = false
let cutscene_2 = false
let cherrydoneyapping = false
let cutscene1 = false
let cherry: Sprite = null
let blueberry: Sprite = null
let banana: Sprite = null
let dancing = false
let mySprite: Sprite = null
game.splash("In a world full of vegetable and fruit people...")
game.splash("An Onion lost his watering bucket...")
game.splash("Now I must follow him on his dumb adventure...")
game.splash("Where he can do many dumb things...")
game.splash("Presenting:")
game.splash("THE QUEST FOR THE LOST WATERING BUCKET!")
game.splash("game jam edition...")
music.setVolume(40)
music.play(music.createSong(assets.song`Theme`), music.PlaybackMode.LoopingInBackground)
scene.setBackgroundImage(img`
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    `)
tiles.setCurrentTilemap(tilemap`homeish`)
mySprite = sprites.create(assets.image`myImage`, SpriteKind.Player)
let havegun = false
dancing = false
tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 4))
mySprite.setStayInScreen(true)
controller.moveSprite(mySprite, 50, 50)
let cameraon = false
let plantscutscene = true
let startingcutscene = true
let standing_overhome = false
creating_animatons()
story.startCutscene(function () {
    controller.moveSprite(mySprite, 0, 0)
    story.spriteSayText(mySprite, "hmm...")
    story.spriteSayText(mySprite, "wheres my watering bucket?")
    story.spriteSayText(mySprite, "Aw man")
    story.spriteSayText(mySprite, "Now I can't water my plants!")
    story.spriteSayText(mySprite, "I'll have to look around.")
    timer.after(100, function () {
        controller.moveSprite(mySprite, 50, 50)
        startingcutscene = false
        story.cancelCurrentCutscene()
    })
})
game.onUpdate(function () {
    if (controller.B.isPressed() && (plantscutscene == true && mySprite.tileKindAt(TileDirection.Top, assets.tile`Deadplants`))) {
        story.startCutscene(function () {
            plantscutscene = false
            controller.moveSprite(mySprite, 0, 0)
            story.printCharacterText("My plants:)")
            story.printCharacterText("All my friends say their dying, but they look fine")
            story.cancelCurrentCutscene()
            controller.moveSprite(mySprite, 50, 50)
        })
        timer.after(5000, function () {
            plantscutscene = true
        })
    }
    if (mySprite.tileKindAt(TileDirection.Right, assets.tile`myTile2`)) {
        tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 4))
        tiles.setCurrentTilemap(tilemap`path1`)
        cherry = sprites.create(assets.image`myImage3`, SpriteKind.npc)
        tiles.placeOnTile(cherry, tiles.getTileLocation(4, 2))
        cutscene1 = true
        cherry_animation()
    }
    if (controller.B.isPressed() && (cutscene1 == true && mySprite.tileKindAt(TileDirection.Top, assets.tile`cherrygrass`))) {
        story.startCutscene(function () {
            cutscene1 = false
            cherrydoneyapping = false
            controller.moveSprite(mySprite, 0, 0)
            story.spriteSayText(mySprite, "Hey Cherry!")
            story.spriteSayText(mySprite, "Have you seen my Water Bucket?")
            story.spriteSayText(cherry, "Hm... wat color it is?")
            story.spriteSayText(mySprite, "Its Blue")
            story.spriteSayText(cherry, "Me saw dude with bucket pass by!")
            story.spriteSayText(cherry, "Me no no remember who guy is:(")
            story.spriteSayText(mySprite, "which way did he go?")
            story.spriteSayText(cherry, "Dude go right.")
            story.spriteSayText(mySprite, "thx")
            cutscene1 = false
            controller.moveSprite(mySprite, 50, 50)
            cherrydoneyapping = true
            story.cancelCurrentCutscene()
        })
    }
    if (cherrydoneyapping == true && mySprite.tileKindAt(TileDirection.Right, assets.tile`myTile3`)) {
        sprites.destroy(cherry)
        cutscene_2 = true
        tiles.setCurrentTilemap(tilemap`path2`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(5, 0))
        blueberry = sprites.create(assets.image`Blueberry`, SpriteKind.npc)
        tiles.placeOnTile(blueberry, tiles.getTileLocation(3, 4))
        Blueberry_animation()
    }
    if (controller.B.isPressed() && (cutscene_2 == true && mySprite.tileKindAt(TileDirection.Left, assets.tile`dancingnpctile`))) {
        story.startCutscene(function () {
            cutscene_2 = false
            berrydoneyapping = false
            controller.moveSprite(mySprite, 0, 0)
            story.spriteSayText(blueberry, "Hey DUDEEEEEEEEEEEEEEEEE")
            story.spriteSayText(blueberry, "What do you want")
            story.showPlayerChoices("Did you see guy with bucket walk by", "Scratch is better than Makecode")
            if (story.getLastAnswer() == "Did you see guy with bucket walk by") {
                story.spriteSayText(mySprite, "Did you see guy with bucket walk by")
                story.spriteSayText(blueberry, "Yeah DUDEEEEEEEEEEEEEEEEEEE")
                story.spriteSayText(mySprite, "What did he look like?")
                story.spriteSayText(blueberry, "He was a banana")
                story.spriteSayText(mySprite, "thanks")
                berrydoneyapping = true
                controller.moveSprite(mySprite, 50, 50)
                story.cancelCurrentCutscene()
            } else if (story.getLastAnswer() == "Scratch is better than Makecode") {
                story.spriteSayText(blueberry, "What you monster")
                story.spriteSayText(blueberry, "Now I sentence you to punishment.")
                story.spriteSayText(blueberry, "And thy Punishment is death!")
                game.splash("Why would you say that?")
                game.setGameOverMessage(true, "Ending:Bad Opinion")
                game.setGameOverEffect(true, effects.slash)
                game.gameOver(true)
            }
        })
    }
    if (berrydoneyapping == true && mySprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile4`)) {
        sprites.destroy(blueberry)
        cutscene3 = true
        bandoneyapping = false
        makecodeforums3 = true
        makecodeforums3cutscene = true
        tiles.setCurrentTilemap(tilemap`path0`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 4))
        banana = sprites.create(assets.image`banana`, SpriteKind.npc)
        tiles.placeOnTile(banana, tiles.getTileLocation(5, 6))
        tomato = sprites.create(assets.image`tomato`, SpriteKind.npc)
        tiles.placeOnTile(tomato, tiles.getTileLocation(4, 2))
        cabbage = sprites.create(assets.image`cabbage`, SpriteKind.npc)
        tiles.placeOnTile(cabbage, tiles.getTileLocation(6, 2))
        bananana_idle()
    }
    if (controller.B.isPressed() && (makecodeforums3cutscene == true && (makecodeforums3 == true && mySprite.tileKindAt(TileDirection.Top, assets.tile`yaptile`)))) {
        story.startCutscene(function () {
            makecodeforums3cutscene = false
            makecodeforums3 = false
            controller.moveSprite(mySprite, 0, 0)
            story.spriteSayText(cabbage, "Have you played Makcode Forums 3?")
            story.spriteSayText(tomato, "Yeah, The game is so innovative!")
            story.spriteSayText(cabbage, "The idea of using links to get to other games is so genius.")
            story.spriteSayText(tomato, "Its sooooo cool")
            controller.moveSprite(mySprite, 50, 50)
            story.cancelCurrentCutscene()
        })
    }
    if (controller.B.isPressed() && (cutscene3 == true && mySprite.tileKindAt(TileDirection.Bottom, assets.tile`banangrass`))) {
        story.startCutscene(function () {
            cutscene3 = false
            bandoneyapping = false
            controller.moveSprite(mySprite, 0, 0)
            story.spriteSayText(mySprite, "HEY BANANA THATS MY WATERING BUCKET!")
            story.spriteSayText(banana, "Hey Onion, I'm pretty sure your bucket is Blue")
            story.spriteSayText(banana, "My bucket is Gray")
            story.spriteSayText(mySprite, "oh, oops sorry for yelling :(")
            story.spriteSayText(mySprite, "We still friends:(")
            story.spriteSayText(banana, "Yeah its fine, Were still friends.")
            story.spriteSayText(banana, "I heard there is a thief stealing buckets.")
            story.spriteSayText(banana, "He may have stolen yours.")
            controller.moveSprite(mySprite, 50, 50)
            bandoneyapping = true
            story.cancelCurrentCutscene()
        })
    }
    if (bandoneyapping == true && mySprite.tileKindAt(TileDirection.Right, assets.tile`myTile6`)) {
        sprites.destroy(tomato)
        sprites.destroy(cabbage)
        sprites.destroy(banana)
        cutscene4 = true
        cutscene5 = false
        cameraon = true
        dancing = true
        talktocherrydance = true
        tiles.placeOnTile(mySprite, tiles.getTileLocation(9, 18))
        tiles.setCurrentTilemap(tilemap`Town square chest not open`)
        tomato = sprites.create(assets.image`tomato`, SpriteKind.npc)
        tiles.placeOnTile(tomato, tiles.getTileLocation(6, 15))
        cabbage = sprites.create(assets.image`cabbage`, SpriteKind.npc)
        tiles.placeOnTile(cabbage, tiles.getTileLocation(15, 10))
        cherry = sprites.create(assets.image`myImage3`, SpriteKind.npc)
        tiles.placeOnTile(cherry, tiles.getTileLocation(9, 12))
        tomato_done_yapping = false
        cherry_animation()
    }
    if (controller.B.isPressed() && (cutscene4 == true && mySprite.tileKindAt(TileDirection.Left, assets.tile`talk to tomato0`))) {
        cutscene4 = false
        story.startCutscene(function () {
            controller.moveSprite(mySprite, 0, 0)
            story.spriteSayText(tomato, "Hey there Onion, what do you want? :)")
            story.showPlayerChoices("Do you know anything about the bucket thief.", "ummm.....")
            if (story.checkLastAnswer("ummm.....")) {
                story.spriteSayText(tomato, "Ummmmm....")
                story.spriteSayText(mySprite, "(Dies of embarrassment)")
                sprites.destroy(mySprite, effects.disintegrate, 2000)
                game.splash("HOW DID YOU DIE!")
                game.setGameOverMessage(true, "Ending: Unsocial")
                game.gameOver(true)
                story.cancelCurrentCutscene()
            }
            if (story.checkLastAnswer("Do you know anything about the bucket thief.")) {
                cutscene5 = true
                story.spriteSayText(tomato, "Everyone knows they live in the very creepy, dangerous, terrible, deadly, bad, scary, and dark forest")
                story.spriteSayText(mySprite, "Oh thx I'm going to head there right now.")
                story.spriteSayText(tomato, "WAIT! You need some directions so you don't get lost in the creepy, bad dark, sca-")
                story.spriteSayText(mySprite, "OK! I get it the forest is big and hard to navigate!")
                story.spriteSayText(tomato, "Talk to cabbage, he may have something.")
                story.spriteSayText(mySprite, "Ok, thanks")
                controller.moveSprite(mySprite, 50, 50)
                tomato_done_yapping = true
                story.cancelCurrentCutscene()
            }
        })
    }
    if (controller.B.isPressed() && (cabdoneyap == false && (tomato_done_yapping == true && cutscene5 == true) && mySprite.tileKindAt(TileDirection.Right, assets.tile`talk to cabbage`))) {
        story.startCutscene(function () {
            cutscene5 = false
            controller.moveSprite(mySprite, 0, 0)
            story.spriteSayText(cabbage, "Hey there, what do you want?")
            story.showPlayerChoices("Tomato told me you have a map for the dark forest that leads directly to the thief", "YOUR DUMB AND UGLY")
            if (story.checkLastAnswer("Tomato told me you have a map for the dark forest that leads directly to the thief")) {
                story.spriteSayText(mySprite, "Tomato told me you have a map for the dark forest that leads directly to the thief")
                story.spriteSayText(cabbage, "Oh it's in the chest")
                story.spriteSayText(mySprite, "THX! :)")
                controller.moveSprite(mySprite, 50, 50)
                cabdoneyap = true
                getmap = true
                story.cancelCurrentCutscene()
            }
            if (story.checkLastAnswer("YOUR DUMB AND UGLY")) {
                story.spriteSayText(cabbage, "OK, then I'm not helping you!")
                story.spriteSayText(mySprite, ":(")
                game.splash("NARRATOR: KINDNESS IS REWARDED.")
                game.splash("NARRATOR: RUDENESS IS NOT.")
                game.setGameOverMessage(true, "ENDING: RUDE")
                game.gameOver(true)
                story.cancelCurrentCutscene()
            }
        })
    }
    if (controller.B.isPressed() && (talktocherrydance == true && mySprite.tileKindAt(TileDirection.Top, assets.tile`cherrytile2`))) {
        story.startCutscene(function () {
            talktocherrydance = false
            controller.moveSprite(mySprite, 0, 0)
            story.spriteSayText(cherry, "LOOOOOOK ME DANCINGGGGGGGGGGG")
            story.spriteSayText(mySprite, "(Is he ok?)")
            controller.moveSprite(mySprite, 50, 50)
            story.cancelCurrentCutscene()
        })
    }
    if (getmap == true && (controller.B.isPressed() && (cabdoneyap == true && tomato_done_yapping == true)) && mySprite.tileKindAt(TileDirection.Top, assets.tile`myTile9`)) {
        tiles.setTileAt(tiles.getTileLocation(9, 7), assets.tile`myTile10`)
        story.startCutscene(function () {
            controller.moveSprite(mySprite, 0, 0)
            story.printCharacterText("You got map! :)")
            getmap = false
            controller.moveSprite(mySprite, 50, 50)
            story.cancelCurrentCutscene()
        })
    }
    if (getmap == false && (cabdoneyap == true && tomato_done_yapping == true) && mySprite.tileKindAt(TileDirection.Left, assets.tile`gotobrother`)) {
        game.splash("After a little bit of navigating Onion arrives.")
        tiles.setCurrentTilemap(tilemap`level8`)
        sprites.destroyAllSpritesOfKind(SpriteKind.npc)
        cameraon = false
        cutscene6 = true
        badonion = sprites.create(assets.image`little bro`, SpriteKind.Player)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(10, 6))
        tiles.placeOnTile(badonion, tiles.getTileLocation(5, 1))
        story.startCutscene(function () {
            controller.moveSprite(mySprite, 0, 0)
            story.spriteSayText(mySprite, "BROTHER IT WAS YOU!?!?!")
            story.spriteSayText(badonion, "YES IT WAS ME ALL ALONG!")
            story.spriteSayText(badonion, "I STOLE EVERY BUCKET IN THIS TOWN STARTING WITH YOURs!")
            story.spriteSayText(badonion, "AND NOBODY NOT EVEN YOU CAN STOP ME!")
            game.splash("WHAT WILL HAPPEN NEXT?!?!")
            game.splash("WILL ONION GET HIS BUCKET BACK!?!?")
            game.splash("AND MOST IMPORTANTLY IS HIS PLANTS ACTUALLY ALIVE")
            game.setGameOverMessage(true, "TO BE CONTINUED IN PART 2")
            game.gameOver(true)
            story.cancelCurrentCutscene()
        })
    }
})
forever(function () {
    if (cameraon == true) {
        scene.cameraFollowSprite(mySprite)
    } else if (cameraon == false) {
        scene.cameraFollowSprite(null)
    }
})
forever(function () {
    if (cameraon == true) {
        scene.cameraFollowSprite(mySprite)
    } else if (cameraon == false) {
        scene.cameraFollowSprite(null)
    }
})
