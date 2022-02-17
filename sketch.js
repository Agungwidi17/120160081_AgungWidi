let j;
let goLeft = false;
let x = 310;
let y = 60;

function setup() {
  // put setup code here
  createCanvas(400,200);
  j=0;

}

function draw() {
  // put drawing code here

    // put drawing code here

  background(200);
  strokeWeight(1)
  line (200,0,200,200)
  strokeWeight(0);
  arc(35,75,30,30,9.4,44);
  rect(20,75,30,55);
  
  arc(100,60,79,75,9.4,44);
  rect(60,65,80,90);
  
  arc(165,75, 30,30,9.4,44);
  rect(150,75,30,55);
  fill(0,255,0)
  
  
  arc(35,129,30,30, 44,9.4);
  arc(165,129,30,30, 44,9.4);
  
  strokeWeight(6)
  point (85, 40)
  point (115,40)
  
  strokeWeight(0)
  rect(75,155,15,30);
  rect(110,155,15,30)
  
  //gambar 2
  strokeWeight(0);
  arc(245,75,30,30,9.4,44);
  rect(230,75,30,55);
  //kepala gerak
  arc(x,y-15,79,75,9.4,44);
  rect(270,65,80,90);
  
  arc(375,75, 30,30,9.4,44);
  rect(360,75,30,55);
  fill(0,255,0)
  
  
  arc(245,129,30,30, 44,9.4);
  arc(375,129,30,30, 44,9.4);
  
  strokeWeight(6)
  point (x-15,y-30)
  point (325,y-30)
  
  strokeWeight(0)
  rect(285,155,15,30);
  rect(320,155,15,30);
  
  if(goLeft==false){
    y=y+2;
  }
  if(goLeft==true){
    y=y-2;
  }
  if(y>70){
    goLeft=true;
    
  }
  if(y<40){
    goLeft=false;
  }

}