var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["44bcd54c-15c2-4e22-b9d5-5530e939bdd8","c4fbfdfe-1421-4db1-af46-1879063637f0","ea8bab6a-b09d-4cd4-8c34-eb5b66c08e1f","bc604acf-839d-4fb4-a84f-98223d93e137"],"propsByKey":{"44bcd54c-15c2-4e22-b9d5-5530e939bdd8":{"name":"kid_17_1","sourceUrl":"assets/api/v1/animation-library/gamelab/PKyTMPPuzvzhOl6p9QL_ed8ieV7kPr4s/category_characters/kid_17.png","frameSize":{"x":208,"y":300},"frameCount":1,"looping":true,"frameDelay":2,"version":"PKyTMPPuzvzhOl6p9QL_ed8ieV7kPr4s","loadedFromSource":true,"saved":true,"sourceSize":{"x":208,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/PKyTMPPuzvzhOl6p9QL_ed8ieV7kPr4s/category_characters/kid_17.png"},"c4fbfdfe-1421-4db1-af46-1879063637f0":{"name":"kid_26_1","sourceUrl":"assets/api/v1/animation-library/gamelab/9s0I9e8fTkUOon1TCVGyAOnxdKOQf4V7/category_characters/kid_26.png","frameSize":{"x":239,"y":360},"frameCount":1,"looping":true,"frameDelay":2,"version":"9s0I9e8fTkUOon1TCVGyAOnxdKOQf4V7","loadedFromSource":true,"saved":true,"sourceSize":{"x":239,"y":360},"rootRelativePath":"assets/api/v1/animation-library/gamelab/9s0I9e8fTkUOon1TCVGyAOnxdKOQf4V7/category_characters/kid_26.png"},"ea8bab6a-b09d-4cd4-8c34-eb5b66c08e1f":{"name":"kid_21_1","sourceUrl":"assets/api/v1/animation-library/gamelab/JzchW6AmtEzcL8.d2v_hAblTvROl5b8c/category_characters/kid_21.png","frameSize":{"x":196,"y":300},"frameCount":1,"looping":true,"frameDelay":2,"version":"JzchW6AmtEzcL8.d2v_hAblTvROl5b8c","loadedFromSource":true,"saved":true,"sourceSize":{"x":196,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/JzchW6AmtEzcL8.d2v_hAblTvROl5b8c/category_characters/kid_21.png"},"bc604acf-839d-4fb4-a84f-98223d93e137":{"name":"kid_12_1","sourceUrl":"assets/api/v1/animation-library/gamelab/yQDY_sxzOClThPeYzj5dWKKyTz2drdZY/category_characters/kid_12.png","frameSize":{"x":242,"y":339},"frameCount":1,"looping":true,"frameDelay":2,"version":"yQDY_sxzOClThPeYzj5dWKKyTz2drdZY","loadedFromSource":true,"saved":true,"sourceSize":{"x":242,"y":339},"rootRelativePath":"assets/api/v1/animation-library/gamelab/yQDY_sxzOClThPeYzj5dWKKyTz2drdZY/category_characters/kid_12.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

/*


In this project we are going to recreate gravity using 4 balls/sprites.
Create 4 sprites. You can give it any animation for setAnimation 
(Ball, person jumping...).

Each sprite should a different gravity
Every time the sprite COLLIDES with the ground bounce the sprite back in the air.

Observe how high the sprite bounces off the ground and how long it takes
to get to the ground.

Understand the impact each variable has on the sprite.

OPTIONAL:
You can have different velocities for each sprite as well.
Every time the sprite collides with the ground, give that sprite +1 point.

*/



// Create a global startVelocity variable
 var startVelocity = -20;


// Create the first sprite and setAnimation to the sprite
// Also set it's gravity
var ball1 = createSprite(61,351,10,10);
ball1.setAnimation("kid_17_1");
ball1.scale = 0.3;
ball1.gravity = 1;

// Create the second sprite and setAnimation to the sprite
// Also set it's gravity
var ball2 = createSprite(152,336,10,10);
ball2.setAnimation("kid_26_1");
ball2.scale = 0.3;
ball2.gravity = 0.75;


// Create the third sprite and setAnimation to the sprite
// Also set it's gravity
var ball3 = createSprite(240,329,10,10);
ball3.setAnimation("kid_21_1");
ball3.scale = 0.3;
ball3.gravity = 1.25;


// Create the fourth sprite and setAnimation to the sprite
// Also set it's gravity
var ball4 = createSprite(331,337,10,10);
ball4.setAnimation("kid_12_1");
ball4.scale = 0.3;
ball4.gravity = 1.75;

function draw() {
  background("orange");
  
 
  
  createEdgeSprites();
  
  if(ball1.collide(bottomEdge)){
    ball1.velocityY = startVelocity;
    
  }
  ball1.velocityY = ball1.velocityY + ball1.gravity;
  
  if(ball2.collide(bottomEdge)){
    ball2.velocityY = startVelocity;
    
  }
  ball2.velocityY = ball2.velocityY + ball2.gravity;
  
  if(ball3.collide(bottomEdge)){
    ball3.velocityY = startVelocity;
    
  }
  ball3.velocityY = ball3.velocityY + ball3.gravity;
  
  if(ball4.collide(bottomEdge)){
    ball4.velocityY = startVelocity;
    
  }
  ball4.velocityY = ball4.velocityY + ball4.gravity;
  
  /* 
    Create the condition where we find out if the first sprite collides
    with the bottomEdge :
      IF SO - give it the intended velocity.
  */
  
  
  
  
  /* 
    Now when the sprite doesn't collide with the ground,
    Add gravity to the ball.
    You have learnt how to do it in the Trex Class.
  */
 
 
 
 
  
  // DO THE SAME FOR THE REST OF THE SPRITES
  
  
  
  
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
