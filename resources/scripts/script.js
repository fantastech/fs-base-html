var $ = require('jquery');
window.$ = $;
// window.bootstrap = require('bootstrap');
// require('select2');

(function($){

    // Helps equalizing height of elements
    /* function equalizeHeights(elements){
      elements.forEach(function(elem){
          var $element = $(elem[0]);
          if($element.length > 0){
            var maxHeight = 0;
            if(elem[1] === false){
              if($(window).width() > 767){
                $element.each(function() {
                  if ($(this).outerHeight() > maxHeight) {
                      maxHeight = $(this).outerHeight();
                  }
                }).height(maxHeight);
              }
            }
            else{
              $element.each(function() {
                if ($(this).outerHeight() > maxHeight) {
                    maxHeight = $(this).outerHeight();
                }
              }).height(maxHeight);
            }
          }
      });
    } */

    // Run code when docuemnt is ready
    $(document).ready(function(){

      // Equalize height of the following elements
      // var equalizeHeightElements = [
      //     ['.row-preset-some-class .post-title', false],
      //     ['.row-preset-other-class .post-summary', false],
      // ];
      // equalizeHeights(equalizeHeightElements);

      // Equalize height of elements on page resize
      // $(window).resize(function(){
      //   equalizeHeights(equalizeHeightElements);
      // });

      // Your JS starts below this line.

    });

})($);
