float[] x;
float[] y;
float[] vx;
float[] vy;
float[] d;

int nb = 250;

void setup()
{ 
  size(1560, 1600);
  x = new float[nb];
  y = new float[nb];
  vx = new float[nb];
  vy = new float[nb];
  d = new float[nb];
  translate(width/2,height/2);
  for (int i=0; i<nb; i++)
  {
    x[i] = random(width);
    y[i] = random(height);
    vx[i] = random(-5, 10);
    vy[i] = random(-3, 10);
    d[i] = random(10, 60);
  }
}

void draw()
{
  noStroke();
  fill(255,255,255,255);
  rect(0,0,width,height);
  loadPixels();
  for (int i = 0; i < width * height; i++) pixels[i] = 0;
  updatePixels(); 
    
  for (int i=0; i<nb; i++)
  {
    x[i] = x[i]+vx[i];
    y[i] = y[i]+vy[i];
    fill(0);
    noStroke();
    ellipse(x[i], y[i], 15, 15);

    if (x[i] >= width )
    {
      vx[i] = -vx[i];
    }
    if (x[i] <= 0 )
    {
      vx[i] = -vx[i];
    }
    if (y[i] >= height )
    {
      vy[i] = -vy[i];
    }
    if (y[i] <= 0 )
    {
      vy[i] = -vy[i];
    }
  }
  for(int i=0; i<nb; i++)
  {
   for(int j=0; j<nb; j++)
    {
     if(dist(x[i],y[i],x[j],y[j]) <= 100)
     {
	 strokeWeight(2);
      	 stroke(0,0,0);
      	 line(x[i],y[i],x[j],y[j]);
     }
  }
  drawSelectedDot();
}


}

void drawSelectedDot()
{
 
}
