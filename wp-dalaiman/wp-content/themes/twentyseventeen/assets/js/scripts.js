"use strict";

(function($){
  var $body = $('body'),
      $customHeader = $body.find('.custom-header'),
      canvas,
      context,
      screenH,
      screenW,
      stars = [],
      fps = 50,
      numStars = 500;

  function initHeaderCanvas(){
    $customHeader.append('<canvas id="canvas"></canvas>');

    $('document').ready(function() {
      screenH = $customHeader.height();
      screenW = $customHeader.width();
      
      canvas = $('#canvas');
      
      canvas.attr('height', screenH);
      canvas.attr('width', screenW);
      context = canvas[0].getContext('2d');
      
      // Create all the stars
      for(var i = 0; i < numStars; i++) {
        var x = Math.round(Math.random() * screenW),
            y = Math.round(Math.random() * screenH),
            length = 1 + Math.random() * 2,
            opacity = Math.random(),
            star = new Star(x, y, length, opacity);

        stars.push(star); // Add the the stars array
      }
      setInterval(animate, 1000 / fps);
    });
    
    function animate() {
      context.clearRect(0, 0, screenW, screenH);
      $.each(stars, function() {
        this.draw(context);
      })
    }

    function Star(x, y, length, opacity) {
      this.x = parseInt(x);
      this.y = parseInt(y);
      this.length = parseInt(length);
      this.opacity = opacity;
      this.factor = 1;
      this.increment = Math.random() * .03;
    }

    Star.prototype.draw = function() {
      context.rotate((Math.PI * 1 / 10));
      context.save();
      context.translate(this.x, this.y);
      
      if(this.opacity > 1) {
        this.factor = -1;
      }
      else if(this.opacity <= 0) {
        this.factor = 1;
        this.x = Math.round(Math.random() * screenW);
        this.y = Math.round(Math.random() * screenH);
      }
        
      this.opacity += this.increment * this.factor;
      
      context.beginPath()
      for (var i = 5; i--;) {
        context.lineTo(0, this.length);
        context.translate(0, this.length);
        context.rotate((Math.PI * 2 / 10));
        context.lineTo(0, - this.length);
        context.translate(0, - this.length);
        context.rotate(-(Math.PI * 6 / 10));
      }
      context.lineTo(0, this.length);
      context.closePath();
      context.fillStyle = "rgba(255, 255, 200, " + this.opacity + ")";
      context.shadowBlur = 5;
      context.shadowColor = '#ffff33';
      context.fill();
      
      context.restore();
    }
  }
  initHeaderCanvas();
  //console.log($customHeader, 'yesss!!!!');
})( jQuery );
