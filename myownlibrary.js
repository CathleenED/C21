function isTouching(object1,object2) {


    if (object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2
      && object1.y - object2.y < object2.height/2 + object1.height/2
      && object2.y - object1.y < object2.height/2 + object1.height/2) {
   // movingRect.shapeColor = "red";
    //fixedRect.shapeColor = "red";
  
  
    return true
  }
  
  else {
    //movingRect.shapeColor = "green";
    //fixedRect.shapeColor = "green";
  
    return false
  }
  }
  
  
  function bounceoff(object1,object2) {
    if (object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2) {
  
  object1.velocityX=(-1)*object1.velocityX
  
        return true
      }
  else {
    return false
  }
  }



  function collide(object1,object2) {
if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2) {
        
        object1.velocityX=0
        return true
    }
  }