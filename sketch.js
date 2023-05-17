
let s= 0;
let l= 0;
let g= 0;


function preload() {
  BG = loadImage('images/homepage.png');
  Q1 = loadImage('images/Q1.png');
  Q2 = loadImage('images/Q2.png');
  Q3 = loadImage('images/Q3.png');
  Q4 = loadImage('images/Q4.png');
  Q5 = loadImage('images/Q5.png');
  //
  A = loadImage('images/A.png');
  B = loadImage('images/B.png');
  C = loadImage('images/C.png');
  D = loadImage('images/D.png');
  E = loadImage('images/E.png');
  F = loadImage('images/F.png');
  G = loadImage('images/G.png');
  H = loadImage('images/H.png');
  I = loadImage('images/I.png');
  J = loadImage('images/J.png');

}


function setup() {
  
  createCanvas(340, 844);
  image(BG,0, 0, 340, 844);
  
  start = createImg('images/start.png');
  start.position(105,646);
  start.size(129.51,44);
  start.id('start');
  
  
  document.getElementById('start').addEventListener("click",(event) =>{
    image(Q1,0, 0, 340, 844);
    start.hide();
    page1();
  })
  
  
                                                 
  
}

function draw() {
  
  
}

function page1(){
  A1 = createImg('images/L01.png');
  A1.position(71,397);
  A1.size(249,55);
  A1.id('A1');
  
  B1 = createImg('images/G01.png');
  B1.position(71,489);
  B1.size(249,55);
  B1.id('B1');
  
  C1 = createImg('images/S01.png');
  C1.position(71,581);
  C1.size(249,55);
  C1.id('C1');
  
  document.getElementById('A1').addEventListener("click",(event) =>{
    image(Q2,0, 0, 340, 844);
    A1.hide();
    B1.hide();
    C1.hide();
    page2();
    liquid();
  })

  document.getElementById('B1').addEventListener("click",(event) =>{
    image(Q2,0, 0, 340, 844);
    A1.hide();
    B1.hide();
    C1.hide();
    page2();
    gas();
  })

  document.getElementById('C1').addEventListener("click",(event) =>{
    image(Q2,0, 0, 340, 844);
    A1.hide();
    B1.hide();
    C1.hide();
    page2();
    soild();
  })
  
}

function page2(){
  A2 = createImg('images/G02.png');
  A2.position(71,397);
  A2.size(249,55);
  A2.id('A2');
  
  B2 = createImg('images/S02.png');
  B2.position(71,489);
  B2.size(249,55);
  B2.id('B2');
  
  C2 = createImg('images/L02.png');
  C2.position(71,581);
  C2.size(249,55);
  C2.id('C2');
  
  document.getElementById('A2').addEventListener("click",(event) =>{
    image(Q3,0, 0, 340, 844);
    A2.hide();
    B2.hide();
    C2.hide();
    page3();
    gas();
  })

  document.getElementById('B2').addEventListener("click",(event) =>{
    image(Q3,0, 0, 340, 844);
    A2.hide();
    B2.hide();
    C2.hide();
    page3();
    soild();
  })

  document.getElementById('C2').addEventListener("click",(event) =>{
    image(Q3,0, 0, 340, 844);
    A2.hide();
    B2.hide();
    C2.hide();
    page3();
    liquid();
  })
  
}

function page3(){
  A3 = createImg('images/S03.png');
  A3.position(71,397);
  A3.size(249,55);
  A3.id('A3');
  
  B3 = createImg('images/L03.png');
  B3.position(71,489);
  B3.size(249,55);
  B3.id('B3');
  
  C3 = createImg('images/G03.png');
  C3.position(71,581);
  C3.size(249,55);
  C3.id('C3');
  
  document.getElementById('A3').addEventListener("click",(event) =>{
    image(Q4,0, 0, 340, 844);
    A3.hide();
    B3.hide();
    C3.hide();
    page4();
    soild();
  })

  document.getElementById('B3').addEventListener("click",(event) =>{
    image(Q4,0, 0, 340, 844);
    A3.hide();
    B3.hide();
    C3.hide();
    page4();
    liquid();
  })

  document.getElementById('C3').addEventListener("click",(event) =>{
    image(Q4,0, 0, 340, 844);
    A3.hide();
    B3.hide();
    C3.hide();
    page4();
    gas();
  })
  
}

function page4(){
  A4 = createImg('images/G04.png');
  A4.position(71,397);
  A4.size(249,55);
  A4.id('A4');
  
  B4 = createImg('images/S04.png');
  B4.position(71,489);
  B4.size(249,55);
  B4.id('B4');
  
  C4 = createImg('images/L04.png');
  C4.position(71,581);
  C4.size(249,55);
  C4.id('C4');
  
  document.getElementById('A4').addEventListener("click",(event) =>{
    image(Q5,0, 0, 340, 844);
    A4.hide();
    B4.hide();
    C4.hide();
    page5();
    gas();
  })

  document.getElementById('B4').addEventListener("click",(event) =>{
    image(Q5,0, 0, 340, 844);
    A4.hide();
    B4.hide();
    C4.hide();
    page5();
    soild();
  })

  document.getElementById('C4').addEventListener("click",(event) =>{
    image(Q5,0, 0, 340, 844);
    A4.hide();
    B4.hide();
    C4.hide();
    page5();
    liquid();
  })
  
}

function page5(){
  A5 = createImg('images/L05.png');
  A5.position(71,397);
  A5.size(249,55);
  A5.id('A5');
  
  B5 = createImg('images/S05.png');
  B5.position(71,489);
  B5.size(249,55);
  B5.id('B5');
  
  C5 = createImg('images/G05.png');
  C5.position(71,581);
  C5.size(249,55);
  C5.id('C5');
  
  document.getElementById('A5').addEventListener("click",(event) =>{
    A5.hide();
    B5.hide();
    C5.hide();
   liquid();
   final();
  })

  document.getElementById('B5').addEventListener("click",(event) =>{
    A5.hide();
    B5.hide();
    C5.hide();
    soild();
    final();
  })

  document.getElementById('C5').addEventListener("click",(event) =>{
    A5.hide();
    B5.hide();
    C5.hide();
    gas();
    final();
  })
   
}

function soild(){
  s = s+20;
}
function gas(){
  g = g+20;
}
function liquid(){
  l = l+20;
}

function final(){
  if(g==0 && l==100 && s==0){
    image(A,0, 0, 340, 844);
  }else if(g==0 && l==60 && s==40){
    image(B,0, 0, 340, 844);
  }else if(g==0 && l==80 && s==20){
    image(B,0, 0, 340, 844);
  }else if(g==0 && l==20 && s==80){
    image(C,0, 0, 340, 844);
  }else if(g==0 && l==40 && s==60){
    image(C,0, 0, 340, 844);
  }else if(g==100 && l==0 && s==0){
    image(D,0, 0, 340, 844);
  }else if(g==20 && l==0 && s==80){
    image(E,0, 0, 340, 844);
  }else if(g==40 && l==0 && s==60){
    image(E,0, 0, 340, 844);
  }else if(g==20 && l==0 && s==80){
    image(E,0, 0, 340, 844);
  }else if(g==80 && l==0 && s==20){
    image(F,0, 0, 340, 844);
  }else if(g==60 && l==0 && s==40){
    image(F,0, 0, 340, 844);
  }else if(g==0 && l==0 && s==100){
    image(G,0, 0, 340, 844);
  }else if(g==80 && l==20 && s==40){
    image(H,0, 0, 340, 844);
  }else if(g==60 && l==40 && s==40){
    image(I,0, 0, 340, 844);
  }else if(g==40 && l==20 && s==40){
    image(J,0, 0, 340, 844);
  }else if(g==40 && l==40 && s==20){
    image(J,0, 0, 340, 844);
  }else if(g==20 && l==40 && s==40){
    image(J,0, 0, 340, 844);
  }else if(g==40 && l==20 && s==40){
    image(J,0, 0, 340, 844);
  }else if(g==40 && l==60 && s==0){
    image(K,0, 0, 340, 844);
  }else if(g==20 && l==80 && s==40){
    image(K,0, 0, 340, 844);
  }//這裡開始
  
  else if(g==60 && l==20 && s==20){
    image(H,0, 0, 340, 844);
  }else if(g==20 && l==20 && s==60){
    image(C,0, 0, 340, 844);
  }else if(g==20 && l==60 && s==20){
    image(I,0, 0, 340, 844);
  }

}

