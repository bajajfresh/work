(function() {
        var canvas = document.getElementById('mySketch'),
                context = canvas.getContext('2d');
                myCanvas.parent('mySketch');


        // resize the canvas to fill browser window dynamically
        window.addEventListener('resize', resizeCanvas, false);

        function resizeCanvas() {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;

                drawStuff();
        }
        resizeCanvas();

        function draw() {
          if(mouseIsPressed){
            fill(0,20);
            stroke(0,10);

          } else{
            stroke(0,10);
            fill(random(0,255),random(0,255),random(0,255),30);
          }
          ellipse(mouseX,mouseY,80,80);
        }
})();
