function setup() {
  //Samantha Berkholz

createCanvas(400,269);
background(255);

//bottomRedRectangles
fill(149,1,1);
strokeWeight(6);
rect(0,200,400,69);
rect(0,170,400,30);
rect(0,136,400,30);
quad(240,0,176,0,276,134,285,134);


//blue quads
fill(0,14,59);
strokeWeight(5);
quad(52,0,182,0,276,134,169,134);
quad(244,0,400,0,400,134,290,134);

//top right corner
fill(255);
beginShape();
vertex(390,0);
vertex(400,0);
vertex(400,14);
endShape();

//yellow quad
fill(248,201,26);
quad(0,0,51,0,169,134,0,134);

//black detail 1
fill(0);
beginShape();
vertex(14,0);
vertex(20,0);
vertex(24,20);
vertex(20,24);
vertex(24,40);
vertex(20,42);
vertex(24,57);
vertex(21,59);
vertex(26,96);
vertex(23,97);
vertex(24,112);
vertex(21,113);
vertex(19,134);
vertex(18,134);
vertex(14,98);
vertex(9,78);
vertex(15,81);
vertex(12,50);
vertex(13,34);
vertex(15,81);
vertex(12,50);
vertex(13,34);
vertex(11,14);
vertex(17,28);
vertex(19,11);
vertex(9,0);
endShape();

//black Detail 2

beginShape();
vertex(34,134);
vertex(38,130);
vertex(39,131);
vertex(44,126);
vertex(47,129);
vertex(49,126);
vertex(53,126);
vertex(56,128);
vertex(61,125);
vertex(64,128);
vertex(70,126);
vertex(76,129);
vertex(81,127);
vertex(92,134);
endShape();

//black Deatail 3
strokeWeight(4);
beginShape();
vertex(161,128);
vertex(150,123);
vertex(147,127);
vertex(141,122);
vertex(135,125);
//vertex(130,26);
vertex(122,119);
vertex(114,124);
vertex(87,100);
vertex(91,102);
vertex(84,93);
vertex(88,96);
vertex(86,88);
vertex(100,91);
vertex(104,84);
vertex(112,85);
vertex(102,75);
vertex(109,78);
vertex(95,66);
vertex(102,68);
vertex(83,49);
vertex(78,60);
vertex(75,65);
vertex(68,57);
vertex(65,50);
vertex(74,46);
vertex(72,39);
vertex(70,33);
vertex(62,39);
vertex(61,34);
vertex(56,29);
vertex(56,43);
vertex(50,43);
vertex(49,48);
vertex(47,65);
vertex(57,60);
vertex(73,74);
vertex(62,88);
vertex(52,84);
//vertex(49,94);
vertex(51,84);
vertex(41,87);
vertex(38,74);
vertex(40,44);
vertex(37,24);
vertex(41,9);
vertex(45,11);
vertex(51,4);
vertex(54,4);
endShape();









}

function draw() {
  print(mouseX, mouseY);

}