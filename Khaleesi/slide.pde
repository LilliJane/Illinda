// The next line is needed if running in JavaScript Mode with Processing.js
/* @pjs preload="Bordeaux.jpg"; */

PImage bg;

void setup()
{
  size(1600, 1000);
  bg = loadImage("Bordeaux.jpg");
}

void draw()
{
  background(bg);
}