//your parameter variables go here!
let scenter = 100;
let mcenter = 200;
let pwidh = 1;
let phigh = 2.5;
let size = 12;
let strS = 1.5;
//my colour parametrs are at the start of function 'my symbol'


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(NINE_PORTRAIT);
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
  //let sunColor = color('#E37F1B');
  let sunColor = color('#fa7e1e');
  //let moonColor = color('#1A1697')
  let bgNight = color('#455FA2');
  let moonColor = color('#212C91');
  let bgColor = color('#8FC0ED');
  let strCol = color('#7FA4DA');
  
  
  //noStroke();
  //fill(bgNight);
  //noFill()
 // triangle(110, 0, 0, 70, 0, -70);
  //triangle(-110, 0, 0, 70, 0, -70);
  

  /* 
  * Sun-eye symbol 
  */
  fill(sunColor);
  //noStroke();
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

  //fill(sunColor);
  //noStroke();
  //triangle(8, 6.5, center, 4.5, 12, 6.5); //up
  //triangle(8, 13.5, center, 15.5, 12, 13.5); //down

  push();
  translate(scenter,scenter)
  triangle(-2*size, -3.5*size, 0*size, -5.5*size, 2*size, -3.5*size); //up
  triangle(-2*size, 3.5*size, 0*size, 5.5*size, 2*size, 3.5*size); //down
  pop()

  fill(bgColor);
  noStroke();
  circle(scenter, scenter, 8*size);


  fill(sunColor);
  //noStroke();
  stroke(strCol);
  strokeWeight(strS);
  ellipse(scenter, scenter, 7.5*size, 7*size); 


  fill(bgColor);
  //noStroke();
  ellipse(scenter, scenter, pwidh*size, phigh*size);


     
  /* 
  * Moon-eye symbol 
  */
  fill(moonColor);
  //noStroke();
  stroke(strCol);
  strokeWeight(strS);
  ellipse(mcenter+mcenter, mcenter+mcenter, 7.5*size, 7*size); 

  fill(bgColor);
  noStroke();
  ellipse(mcenter-20, mcenter, 7.5*size, 6.5*size); // center-20 
  
  stroke(strCol);
  strokeWeight(strS);
  noFill();
  arc(mcenter-20, mcenter, 7.5*size, 6.5*size, 270, 90)

  fill(moonColor);
  //noStroke();
  stroke(strCol);
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
  stroke('#7390CD')
  line(0, -80, 35, -60);
  line(-35, -60, 0, -80);
  line(0, 80, 35, 60);
  line(-35, 60, 0, 80);

  stroke('#7FA4DA');
  line(92, 0, 77, 10);
  line(92, 0, 77, -10);
  line(109, 0, 124, 10);
  line(109, 0, 124, -10);
  stroke('#7390CD')
  fill('#7390CD');
  circle(100, 0, 5, 5);

  /* eye */
  stroke('#7FA4DA');
  noFill();
  /*arc(0, 103, 20, 15, 0, 180);
  arc(0, 101, 20, 20, 180, 0);
  circle(0, 101, 1);*/

  ellipse(0, 100, 22, 20)
  line(0, 101, 0, 99)

   

}

