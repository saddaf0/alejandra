var wizard
var ghost1, ghost2
var monster1, monster2
var candyLand, cave, desert, forest, swamp
var gameState="play"
var score=0
var monstersGroup, ghostsGroup


function preload(){

wizardRight=loadImage("Wizard1.png")
wizardLeft=loadImage("Wizard2.png")
wizardWand=loadImage("Wizard3.png")
wizardHit=loadImage("Wizard4.png")
ghost1Image=loadImage("Ghost1.png")
ghost2Image=loadImage("Ghost2.png")
monster1Image=loadImage("Monster1.png")
monster2Image=loadImage("Monster2.png")
candyLand=loadImage("Candy Land.jpg")
cave=loadImage("Cave.jpg")
desert=loadImage("Desert.jpg")
forest=loadImage("Forest.jpg")

}

function setup(){

createCanvas(1263,610)

wizard=createSprite(200,200,25,25)
wizard.addImage("wizard", wizardRight)
wizard.addImage("wizard1", wizardLeft)
wizard.addImage("wizard2", wizardWand)
wizard.addImage("wizard3", wizardHit)
wizard.scale=0.5
wizard.debug=true
monstersGroup=createGroup()
ghostsGroup=createGroup()
monstersGroup1=createGroup()
ghostsGroup1=createGroup()

}

function draw(){
background(forest)


if(gameState==="play"){
    
}

if(gameState==="end"){

}

if(keyDown(RIGHT_ARROW)){
    wizard.changeImage("wizard1", wizardLeft)
    wizard.velocityX=4
}

if(keyDown(LEFT_ARROW)){
    wizard.changeImage("wizard", wizardRight)
    wizard.velocityX=-4

}

if(keyDown("space")){
    wizard.changeImage("wizard2", wizardWand)

}
monsters()
    ghosts()
    monsters1()
    ghosts1()
drawSprites()


}

function monsters(){

    if (frameCount % 60 === 0) {
        monster = createSprite(1300,100,40,10);
       monster.y = Math.round(random(10,350));
       monster.addImage(monster1Image);
       monster.scale = 0.5;
       monster.velocityX = 3;
       
       monster.lifetime = 200;
       monster.debug=true
      monstersGroup.add(monster);
       }

}

function monsters1(){
    if (frameCount % 50 === 0) {
        monster1 = createSprite(106,100,40,10);
       monster1.y = Math.round(random(10,350));
       monster1.addImage(monster2Image);
       monster1.scale = 0.5;
       monster1.velocityX = -3;
       
       monster1.lifetime = 200;
       monster1.debug=true
      monstersGroup1.add(monster1);
       }
}

function ghosts(){

    if (frameCount % 80 === 0) {
        ghost = createSprite(1300,200,40,10);
       ghost.y = Math.round(random(10,350));
       ghost.addImage(ghost1Image);
       ghost.scale = 1;
       ghost.velocityX = 3;
       
       ghost.lifetime = 200;
       ghost.debug=true
      ghostsGroup.add(ghost);
       }
    }

    function ghosts1(){

    
       if (frameCount % 90 === 0) {
        ghost1 = createSprite(1300,500,40,10);
       ghost1.y = Math.round(random(10,350));
       ghost1.addImage(ghost2Image);
       ghost1.scale = 1;
       ghost1.velocityX = 3;
       
       ghost1.lifetime = 200;
       ghost1.debug=true
      ghostsGroup1.add(ghost1);
       }
}