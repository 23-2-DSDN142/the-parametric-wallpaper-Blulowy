//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;
let center = 70;
let pwidh = 1;
let phigh = 2;
let size = 9;
//my colour parametrs are at the start of function 'my symbol'


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
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
  translate(center,center)
  rotate(45);
  triangle(-1.5*size, -3*size, 1*size, -5.5*size, 2*size, -3.5*size); //up
  triangle(-2*size, 3*size, -1*size, 5.5*size, 1.5*size, 3*size); //down
  pop();

  push();
  translate(center,center)
  rotate(-65);
  triangle(-1.5*size, -3*size, 1*size, -5.5*size, 2*size, -3.5*size); //up
  triangle(-2*size, 3*size, -1*size, 5.5*size, 1.5*size, 3*size); //down
  pop();

  //fill(sunColor);
  //noStroke();
  //triangle(8, 6.5, center, 4.5, 12, 6.5); //up
  //triangle(8, 13.5, center, 15.5, 12, 13.5); //down

  push();
  translate(center,center)
  triangle(-2*size, -3.5*size, 0*size, -5.5*size, 2*size, -3.5*size); //up
  triangle(-2*size, 3.5*size, 0*size, 5.5*size, 2*size, 3.5*size); //down
  pop()

  fill(bgColor);
  noStroke();
  circle(center, center, 8*size);


  fill(sunColor);
  noStroke();
  ellipse(center, center, 7.5*size, 7*size); 
  fill(bgColor);
  noStroke();
  ellipse(center, center, pwidh*size, phigh*size);

  /* Moon-eye symbol */
  fill(moonColor);
  noStroke();
  ellipse(center+center, center+center, 7.5*size, 7*size); 

  fill('#8FC0ED');
  noStroke();
  ellipse(center+(center-0.2*center), center+center, 7.5*size, 6.5*size); // center-20 

  fill(moonColor);
  noStroke();
  ellipse(center+center, center+center, pwidh*size, phigh*size);

}

