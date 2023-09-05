function setup() {
  createCanvas(windowWidth, 2 * windowHeight);
}

function createHorizontalGradient(color1, color2, leftX, rightX, upperY, lowerY){
  var increment = 1.0 / (rightX - leftX);
  for (var i = 0; i <= rightX - leftX; i++) {  
    // Each vertical line is a slightly different color.
    var lineColor = lerpColor(color1, color2, increment * i);
    stroke(lineColor);
    line(leftX + i, upperY, leftX + i, lowerY);
  }
}

function draw() {
  var color1 = color("#0E21A0");
  var color2 = color("#EC53B0");
  createHorizontalGradient(color1, color2, 0, width, 0, height);
  noLoop();
}