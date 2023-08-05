//your parameter variables go here!
let scenter = 100;
let mcenter = 200;
let pwidh = 1;
let phigh = 2;
let size = 12;
//my colour parametrs are at the start of function 'my symbol'


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 0;
}

function wallpaper_background() {
  colorMode(HSB);
  angleMode(DEGREES)
  background('#8FC0ED'); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  //my parameters for colours
  let sunColor = color('#E37F1B');
  let moonColor = color('#1A1697');
  let bgColor = color('#8FC0ED');

  /* Sun-eye symbol */
  fill(sunColor);
  noStroke();

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
  noStroke();
  ellipse(scenter, scenter, 7.5*size, 7*size); 


  fill(bgColor);
  noStroke();
  ellipse(scenter, scenter, pwidh*size, phigh*size);

  
     
  /* Moon-eye symbol */
  fill(moonColor);
  noStroke();
  ellipse(mcenter+mcenter, mcenter+mcenter, 7.5*size, 7*size); 

  fill('#8FC0ED');
  noStroke();
  ellipse(mcenter-20, mcenter, 7.5*size, 6.5*size); // center-20 

  fill(moonColor);
  noStroke();
  ellipse(mcenter, mcenter, pwidh*size, phigh*size);

}

