function setup(){
  var myCanvas = createCanvas(windowWidth,windowHeight);
  myCanvas.parent('mySketch');
}
function draw(){
  if(mouseIsPressed){
    fill(0,20);
    stroke(0,10);

  } else{
    stroke(0,10);
    fill(random(0,255),random(0,255),random(0,255),30);
  }
  ellipse(mouseX,mouseY,80,80);
}
