 const Engine = Matter.Engine;
  const World = Matter.World;
  const Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score = 0;
var count = 0;
var particle;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Number of balls : "+score,20,30);
 text("500", 5, 550);
 text("500", 90, 550);
 text("500", 170, 550);
 text("500", 250, 550);
 text("100", 330, 550);
 text("100", 410, 550);
 text("100", 490, 550);
 text("200", 570, 550);
 text("200", 650, 550);
 text("200", 730, 550);
  Engine.update(engine);
  ground.display();
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if (particle!=null)
    {
     particle.display();

     if (particle.body.position.y>760)
      {
       if (particle.body.position.x<300) 
       {
         score=score+500;
         particle=null;

         if (count>=5) {
           gameState='end'
         }
       }
         else if (particle.body.position.x<600 && particle.body.position.x>301) 
       {
         score=score+100;
         particle=null;

         if (count>=5) {
           gameState='end'
         }
       }
         else if (particle.body.position.x>601 && particle.body.position.x<900) 
       {
         score=score+100;
         particle=null;

         if (count>=5) {
           gameState='end'
         }
       }
     }
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}