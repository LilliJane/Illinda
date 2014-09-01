int totalPts = 300;
float steps = totalPts + 1;
  
void setup() {
  size(1600, 850);
  stroke(255);
  frameRate(5);
} 

void draw() {
  background(0);
  float rand = 0;
  for  (int i = 1; i < steps; i++) {
    point( (width/steps) * i, (height/2) + random(-rand, rand) );
    rand += random(-5, 5);
  }
}

