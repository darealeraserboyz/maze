function Q2 () {
    if (info.score() <= 0) {
        game.showLongText("Should you use respectful communication with people online?", DialogLayout.Full)
        story.showPlayerChoices("Yes", "No")
        ask2()
    }
}
function ask2 () {
    if (story.checkLastAnswer("Yes")) {
        info.changeScoreBy(500)
    } else if (story.checkLastAnswer("No")) {
    	
    }
}
function ask3 () {
    if (story.checkLastAnswer("No")) {
        info.changeScoreBy(500)
    } else if (story.checkLastAnswer("Yes")) {
    	
    }
}
function Q1 () {
    if (info.score() <= 0) {
        game.showLongText("Should you keep personal information to yourself and your parents?", DialogLayout.Full)
        story.showPlayerChoices("Yes", "No")
        ask()
    }
}
function Q5 () {
    if (info.score() <= 0) {
        game.showLongText("Should buy deals that are too good?", DialogLayout.Full)
        story.showPlayerChoices("Yes", "No")
        ask3()
    }
}
function Q4 () {
    if (info.score() <= 0) {
        game.showLongText("A new movie came out and you want to watch it, you found a website where you can view it for free dou you want to watch it?", DialogLayout.Full)
        story.showPlayerChoices("Yes", "No")
        ask3()
    }
}
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.field1, function (sprite, location) {
    game.gameOver(true)
    game.setGameOverEffect(true, effects.confetti)
})
function ask () {
    if (story.checkLastAnswer("Yes")) {
        info.changeScoreBy(500)
    } else if (story.checkLastAnswer("No")) {
    	
    }
}
function Q3 () {
    if (info.score() <= 0) {
        game.showLongText("your favorite game has been discounted by 99% do you want to buy?", DialogLayout.Full)
        story.showPlayerChoices("Yes", "No")
        ask3()
    }
}
game.showLongText("Hi, try to escape the  maze. There is a energy bar on the  top right of the screen. If it runs out you will have to do some questions to regain energy. ", DialogLayout.Full)
// maze game you have energy and if it run out, u need to do questions
tiles.setCurrentTilemap(tilemap`level1`)
let player_marble = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 6 6 6 6 . . . . . . 
    . . . . 6 6 6 5 5 6 6 6 . . . . 
    . . . 7 7 7 7 6 6 6 6 6 6 . . . 
    . . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
    . . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
    . 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
    . 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
    . 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
    . 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
    . . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
    . . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
    . . . 6 8 8 8 8 8 8 8 8 6 . . . 
    . . . . 6 6 8 8 8 8 6 6 . . . . 
    . . . . . . 6 6 6 6 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(player_marble)
scene.cameraFollowSprite(player_marble)
tiles.placeOnRandomTile(player_marble, sprites.builtin.field0)
info.setScore(1000)
// Set the speed of movement
controller.moveSprite(player_marble, 100, 100)
// Forever loop to track movement and decrease score
// Move the player with the arrow keys
controller.moveSprite(player_marble, 100, 100)
// Forever loop to decrease score when the player moves
game.onUpdate(function () {
    // Check if any of the arrow keys are pressed
    if (controller.left.isPressed() || controller.right.isPressed() || controller.up.isPressed() || controller.down.isPressed()) {
        // Decrease score by 10
        info.changeScoreBy(-6)
    }
})
forever(function () {
    if (Math.randomRange(0, 4) == 0) {
        Q1()
    } else if (Math.randomRange(0, 4) == 1) {
        Q2()
    } else if (Math.randomRange(0, 4) == 2) {
        Q3()
    } else if (Math.randomRange(0, 4) == 3) {
        Q4()
    } else {
        Q5()
    }
})
