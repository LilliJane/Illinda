// ----------------------------------------------------
// Importation des librairies liées au son
// dans le menu, Sketch > Import Library > Minim audio
// pour générer automatiquement ces lignes de code
import ddf.minim.*;
import ddf.minim.signals.*;
import ddf.minim.analysis.*;
import ddf.minim.effects.*;

SoundInput sound;

float f;
int numAgents = 10000;
Agent[] agents;

void setup()
{
  size(1400,700,P3D);  
  agents = new Agent[numAgents];
  sound = new SoundInput(this); 
 
 for(int i=0; i<numAgents; i++)
 {
  agents[i] = new Agent(random(width*1.5), random(height*1.5));
 } 
}

void draw()
{ 
  noStroke();
  fill(255,255,255,255);
  rect(0,0,width,height);
  loadPixels();
  for (int i = 0; i < width * height; i++)
      pixels[i] = 0;
  updatePixels(); 
  sound.update();
  f=sound.getLevel()*5000;
  
  for(int i=0; i<numAgents; i++)
  {
  agents[i].draw();
  }
}


float n = 0;
float z = 0;

class Agent
{
  PVector position;
  PVector vitesse;
  float velocity = random(1,5);
  //float f = 0.01;
  
  Agent(float x_, float y_)
  {
    this.position = new PVector(x_,y_);
    this.vitesse = new PVector(0,0);
  }
  
  void draw()
  {
    z = noise(f);
    n = noise(this.position.x*0.003, this.position.y*0.003,float(frameCount)/100);
    vitesse.x = velocity*cos(TWO_PI*n);
    vitesse.y = velocity*sin(TWO_PI*n);
    position.x += vitesse.x;
    position.y += vitesse.y;
    
    if(position.x<0)
    {
      position.x = width;
    }
    else if(position.x >width)
    {
      position.x = 0;
    }
    else if(position.y<0)
    {
      position.y = height;
    }
    else if(position.y >height)
    {
      position.y = 0;
    }
    noStroke();
    fill(map(n,0,1,0,255),0,map(n,0,1,150,0));
    ellipse(this.position.x, this.position.y, 10, 10);
  }
}
class SoundInput
{
  // Object minim qui représente l'interface
  // avec la carte audio
  Minim minim;

  // Object qui capte l'entrée miro
  AudioInput entreeMicro;

  // Niveau micro
  float niveauMicro;

  // Analyse spectracle
  FFT fft;
  boolean useFFT = false;
  boolean useAvg = false;

  // ----------------------------------------------------
  SoundInput(PApplet p)
  {
    this.setup(p);
  }

  // ----------------------------------------------------
  SoundInput(PApplet p, int nbBands)
  {
    this.useFFT = true;
    this.setup(p);
    this.fft.linAverages(nbBands);
    this.useAvg = true;
  }

  // ----------------------------------------------------
  void setup(PApplet p)
  {
    // Initialise la libraire Minim
    minim = new Minim(p);
    entreeMicro = minim.getLineIn(Minim.STEREO, 512);
    if (useFFT)
      fft = new FFT(entreeMicro.bufferSize(), entreeMicro.sampleRate());
    // p.registerMethod("update", this);
  }

  // ----------------------------------------------------
  void update()
  {
    niveauMicro = entreeMicro.mix.level();
    if (useFFT)
      fft.forward(entreeMicro.mix.toArray());
  }

  // ----------------------------------------------------
  float getLevel()
  {
    return niveauMicro;
  }
  
  // ----------------------------------------------------
  float getFFTLevel(int i)
  {
    if (!useFFT) return 0.0f;

    
    if (i < getFFTSize())
    {
      return fft.getBand(i);
    }
    else
    {
      println("L'index de bande FFT ["+i+"] n'est pas valide");
      return 0.0f;
    }
  }

  // ----------------------------------------------------
  void drawFFT(float s)
  {
    if (!useFFT) return;
    
    rectMode(CORNER);
    float bandWidth = float(width)/float(getFFTSize());
    float x=0;
    for (int i = 0; i < getFFTSize(); i++)
    {
      // draw the line for frequency band i, scaling it by 4 so we can see it a bit better
      if (useAvg)
      {
        noStroke();
        fill(0);
        rect(x,height,bandWidth,height-fft.getBand(i)*s);
        x+=bandWidth;
      }
      else
      {
        x = i;
        stroke(0);
        line(x, height, x, height - fft.getBand(i)*s);
      }
    }
  }

  // ----------------------------------------------------
  int getFFTSize()
  {
    if (!useFFT) return 0;
    return (useAvg ? fft.avgSize() : fft.specSize());
  }
}


