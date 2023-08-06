//your parameter variables go here!
let scenter = 100;
let mcenter = 0;
let pwidh = 0.8;
let phigh = 3.2;
let size = 12;
let strS = 2.5;
//my colour parametrs are at the start of function 'my symbol'


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(A3);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 0;
}

function wallpaper_background() {
  colorMode(HSB);
  angleMode(DEGREES)
  background('#8FC0ED'); 
}



function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
 
  //my parameters for colours
  let sunColor = color('#fa7e1e');
  let moonColor = color('#3331f2');
  let starColor = color('#53AD33');
  let fullMoon = color('#8C100E');
  let shadow = color(0);
  
  let bgColor = color('#8FC0ED');
  let bgNight = color('#455FA2');

  let strCol = color('#E56A14');
  let nigStr = color('#28307A');
  let starStr = color('#70b68d');
  let strMon = color('#623f66');
  
 
  if(mcenter == scenter){
    shadow = sunColor;
  }
  else {
    shadow = bgNight;
  }

  /*
  * night background
  */
  noStroke();
  fill(bgNight);
  triangle(110, 0, 0, 70, 0, -70);
  triangle(-110, 0, 0, 70, 0, -70); 
  
  


  /* 
  * Sun-eye symbol 
  */
  fill(sunColor);
  stroke(strCol);
  strokeWeight(strS);

  push();
  translate(scenter,scenter)
  rotate(45);
  triangle(-1.5*size, -3*size, 1*size, -5.5*size, 2*size, -3.5*size); //up
  triangle(-2*size, 3*size, -1*size, 5.5*size, 1.5*size, 3*size); //down
  pop();

  push();
  translate(scenter,scenter)
  rotate(-65);
  triangle(-1.5*size, -3*size, 1*size, -5.5*size, 2*size, -3.5*size); //up
  triangle(-2*size, 3*size, -1*size, 5.5*size, 1.5*size, 3*size); //down
  pop();

  push();
  translate(scenter,scenter)
  triangle(-2*size, -3.5*size, 0*size, -5.5*size, 2*size, -3.5*size); //up
  triangle(-2*size, 3.5*size, 0*size, 5.5*size, 2*size, 3.5*size); //down
  pop()

  fill(bgColor);
  noStroke();
  circle(scenter, scenter, 8*size);


  fill(sunColor);
  stroke(strCol);
  strokeWeight(strS);
  ellipse(scenter, scenter, 7.5*size, 7*size); 


  fill(bgColor);
  ellipse(scenter, scenter, pwidh*size, phigh*size);



     
  /* 
  * Moon-eye symbol 
  */
  fill(moonColor);
  stroke(nigStr);
  strokeWeight(strS);
  arc(mcenter, mcenter, 7.5*size, 7*size, 240, 110); 

  fill(shadow);
  noStroke();
  arc(mcenter-20, mcenter, 7.5*size, 6.5*size, 265, 450);  
  
  stroke(nigStr);
  strokeWeight(strS);
  noFill();
  arc(mcenter-20, mcenter, 7.5*size, 6.5*size, 270, 90)

  fill(moonColor);
  stroke(nigStr);
  ellipse(mcenter, mcenter, pwidh*size, phigh*size);

  


  /* 
  * lines 
  */
  strokeWeight(5);
  stroke('#7FA4DA');
  line(100, -10, 0, -70);
  line(0,-70,-100,-10);
  line(100, 10, 0, 70);
  line(0, 70,-100, 10);
  
  strokeWeight(3.5);
  //stroke('#7390CD')
  stroke(starStr)
  line(0, -80, 35, -60);
  line(-35, -60, 0, -80);
  line(0, 80, 35, 60);
  line(-35, 60, 0, 80);

  stroke(strMon)
  line(-92, 0, -77, 10);
  line(-92, 0, -77, -10);
  line(-109, 0, -124, 10);
  line(-109, 0, -124, -10);

  /* circle */
  stroke(fullMoon);
  fill(fullMoon);
  circle(-100, 0, 5, 5);

  /* star - eye */
  stroke(starColor);
  strokeWeight(3)
  noFill();

  line(0, 92, 4, 97)
  line(0, 92, -4, 97)
  line(4, 97, 12, 99)
  line(12,99, 7, 104)
  line(7, 104, 9, 110)
  line(9, 110, 0, 106)
  line(-4, 97, -12, 99)
  line(-12,99, -7, 104)
  line(-7, 104, -9, 110)
  line(-9, 110, 0, 106)
  
  strokeWeight(2)
  line(0, 100, 0, 102)
}

