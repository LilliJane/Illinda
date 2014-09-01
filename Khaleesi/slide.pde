/* @pjs preload="Bordeaux.jpg"; */

PImage bg;

void setup()
{
  size(1600, 850);
  bg = loadImage("Bordeaux.jpg");
}

void draw()
{
  background(bg);
}