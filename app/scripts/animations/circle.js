angular.module('tribecaApp')
  .animation('.circle', function() {


  function makeNewPosition(){

        // Get viewport dimensions (remove the dimension of the div)
        var h = $(window).height();
        var w = $(window).width();

        var nh = Math.floor(Math.random() * h);
        var nw = Math.floor(Math.random() * w);


        console.log(nh, nw);

        return [nh,nw];



  }



  return {
    enter : function(element, done) {
      // jQuery(element).css({
      //   position:'relative',
      //   left:-10,
      //   opacity:0
      // });
      // jQuery(element).animate({
      //   left:0,
      //   opacity:1
      // }, done);

      // jQuery(element).css({
      //   position:'fixed',
      //   left:100,
      //   top:200,
      //   width:10,
      //   opacity:0
      // });
      // jQuery(element).animate({
      //   left:100,
      //   top:200,
      //   width:50,
      //   opacity:1
      // }, animateDiv());


      var h = $(window).height();
      var w = $(window).width();


      jQuery(element).css({
        left:w/2-25,
        top:h/2-25
      });




      animateDiv();

      jQuery(element).addClass('bounceInBig');

      function animateDiv(){
        var newq = makeNewPosition();

        jQuery(element).animate({ top: newq[0], left: newq[1] }, 1000, function(){
          animateDiv();
        });
      };


    },

    leave : function(element, done) {
      jQuery(element).css({
        position:'relative',
        left:0,
        opacity:1
      });
      jQuery(element).animate({
        left:-10,
        opacity:0
      }, done);
    },

    move : function(element, done) {
      jQuery(element).css({
        opacity:0.5
      });
      jQuery(element).animate({
        opacity:1
      }, done);
    }
  };
});
