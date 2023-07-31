//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;
let center = 10;
let pwidh = 1;
let phigh = 2;
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
  triangle(-1.5, -3, 1, -5.5, 2, -3.5); //up
  triangle(-2, 3, -1, 5.5, 1.5, 3); //down
  pop();

  push();
  translate(center,center)
  rotate(-65);
  triangle(-1.5, -3, 1, -5.5, 2, -3.5); //up
  triangle(-2, 3, -1, 5.5, 1.5, 3); //down
  pop();

  fill(sunColor);
  noStroke();
  triangle(8, 6.5, center, 4.5, 12, 6.5); //up
  triangle(8, 13.5, center, 15.5, 12, 13.5); //down

  fill(bgColor);
  noStroke();
  circle(center, center, 8);


  fill(sunColor);
  noStroke();
  ellipse(center, center, 7.5, 7); 
  fill(bgColor);
  noStroke();
  ellipse(center, center, pwidh, phigh);

  /* Moon-eye symbol */
  fill(moonColor);
  noStroke();
  ellipse(center+10, center+10, 7.5, 7); 

  fill('#8FC0ED');
  noStroke();
  ellipse(center+8, center+10, 7.5, 6.5); // center-20 

  fill(moonColor);
  noStroke();
  ellipse(center+10, center+10, pwidh, phigh);

}

