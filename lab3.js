// Nick Tyra
// Lab 3 - Surrealism
// CPE 123
// Professor Workman

var animate = false
var yMove = 0
var holeScale = 0

function setup() 
{
   createCanvas(564, 738)
}

function mousePressed()
{
   if (mouseX > 235 && mouseX < 345 && mouseY > 225 && mouseY < 475)
   {
      animate = true
   }
}

function drawBackground()
{
   background("#352914")
   noStroke()
   fill("#796E73")
   rect(0, 0, width, height)

   fill("#584122")
   ellipse(width / 2, 5425, 10000)
}

function drawEggman(xEgg, yEgg, wEgg, hEgg)
{
   noStroke()
   fill("#E1D8CC")
   ellipse(xEgg, yEgg, wEgg, hEgg)

   noStroke()
   fill("#C8A462")
   beginShape()
      vertex(width / 2, 225)
      vertex(350, 350)
      vertex(345, 375)
      vertex(310, 400)
      vertex(width / 2, 475)
      vertex(265, 390)
      vertex(235, 350)
      vertex(235, 350)
      vertex(235, 350)
   endShape()

   noStroke()
   fill("#AD7D51")
   ellipse((width / 2) + 10, (height / 2) - 25, 80, 50)
   fill("#FFFFFF")
   ellipse((width / 2) + 10, (height / 2) - 25, 78, 27)
   fill("#294879")
   ellipse((width / 2) + 10, (height / 2) - 25, 27, 27)
   fill("#000000")
   ellipse((width / 2) + 10, (height / 2) - 25, 12, 12)

   stroke("#5D4524")
   strokeWeight(8)
   noFill()
   arc((width / 2) + 10, (height / 2) - 55, 50, 25, radians(190), radians(340))
}

function drawGrass()
{
   noStroke()
   fill("#9A7629")
   beginShape()
      vertex(-10, 600)           //1
      vertex(200, 550)           //2
      vertex(250, 570)           //3
      vertex(260, 573)           //4
      vertex(330, 570)           //5
      vertex(350, 575)           //6
      vertex(375, 560)           //7
      vertex(600, 600)           //8
      vertex(width, height)      //9
      vertex(0, height)          //10
   endShape()

   fill("#372A0E")
   noStroke()
   triangle(390, 500, 485, 585, 325, 575)
}

function drawArmHole(scaleArmHole)
{
   push()
      translate(360, 450)
      scale(scaleArmHole)
      fill("#8C867F")
      ellipse(0, 0, 40, 75)
   pop()
}

function drawAnims(xAnim, yAnim, scaleAnim)
{
   push()
      translate(xAnim, yAnim)
      scale(scaleAnim)

      stroke("#000000")
      fill("#E1D8CC")
      beginShape()
         vertex(width / 2, 225)
         vertex(350, 350)
         vertex(345, 375)
         vertex(310, 400)
         vertex(width / 2, 475)
         vertex(265, 390)
         vertex(235, 350)
         vertex(235, 350)
         vertex(235, 350)
         vertex(240, 325)
         vertex(width / 2, 225)
      endShape()

      stroke("#000000")
      fill("#C8A462")

      push()
         translate(0, -610)
         noStroke()
         beginShape()
            curveVertex(365, 440)
            curveVertex(365, 440)
            curveVertex(420, 445)
            curveVertex(430, 320)
            curveVertex(455, 290)
            curveVertex(470, 310)
            curveVertex(450, 330)
            curveVertex(440, 480)
            curveVertex(360, 470)
            curveVertex(360, 470)
         endShape()

         stroke("#000000")
         strokeWeight(4)
         line(450, 200, 450, 308)

         noStroke()
         fill("#A24D23")
         ellipse(450, 200, 75)
      pop()
}

function draw()
{
   if (animate && yMove < 600)
   {
      yMove += 5
      holeScale += 0.007
   }
   
   drawBackground()
   drawEggman(width / 2, height / 2, 250, 500)
   drawGrass()
   drawArmHole(holeScale)
   drawAnims(0, yMove, 1)
}