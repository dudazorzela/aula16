let cor ;

function setup() {
 createCanvas(400, 400) ;
  background("pink") ;
cor =color (random(0, 255), random(0, 255), random(0, 100));
posicaoHorizontal = 200;
posicaoVertical = 200;
}

function draw() {
  fill("blue");
  circle(posicaoHorizontal, posicaoVertical, 50);
  
  if(mouseX < posicaoHorizontal){posicaoHorizontal--;}
  if(mouseX > posicaoHorizontal){posicaoHorizontal++;}
  if(mouseX < posicaoVertical){posicaoVertical--;}
  if(mouseX > posicaoVertical){posicaoVertical++;}
  
  if(mouseIsPressed) {
  cor = color(random(0, 255), random(0, 255), random(0, 255), random(0, 100));}
}
