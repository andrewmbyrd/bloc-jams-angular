(function(){
    function seekBar($document){
        
        /*
        *@desc calculates the percent of the seekbar fill based on a click event
        *@returns a number with the percentage fill
        */
        var calculatePercent = function(seekBar, event) {
            
            var offsetX = event.pageX - seekBar.offset().left;
            var seekBarWidth = seekBar.width();
            
            var offsetXPercent = offsetX / seekBarWidth;
            
            offsetXPercent = Math.max(0, offsetXPercent);
            offsetXPercent = Math.min(1, offsetXPercent);
            
            return offsetXPercent;
        };
        return {
          templateUrl: '/templates/directives/seek_bar.html',
          replace: true,
          restrict: 'E',
          scope: {},
          link: function(scope, element, attributes){
              scope.value = 0;
              scope.max = 100;
              
              /*
              * this holds the element that was clicked on of the two seek bar element directives
              */
              var seekBar = $(element);
              
              /*
              *@desc returns number%, where number is scope.value/scope.max in percent
              *@returns a String with format ##%
              */
              var percentString = function(){
                  var value = scope.value;
                  var max = scope.max;
                  var percent = value / max * 100;
                  return percent + "%"
              }
              
              
              /*
              *@desc creates CSS code to set width
              *@returns a String with format for setting width in CSS
              */
              scope.fillStyle = function(){
                  
                  return {width: percentString()};
              }
              
              
              
              /*
              *@desc gets the percent fill when a seekBar is clicked and updates scope.value
              */
              scope.onClickSeekBar = function(event) {
                  var percent = calculatePercent(seekBar, event);
                  scope.value = percent * scope.max;
              }
              
              
              /*
              *@desc constantly update scope.value as the thumb is moved
              */
              scope.trackThumb = function() {
                    $document.bind('mousemove.thumb', function(event) {
                        var percent = calculatePercent(seekBar, event);
                        scope.$apply(function() {
                            scope.value = percent * scope.max;
                        });
                });
 
                    $document.bind('mouseup.thumb', function() {
                        $document.unbind('mousemove.thumb');
                        $document.unbind('mouseup.thumb');
                    });
            };
              
          }
     };
    }
    
    angular
        .module("blocJams")
        .directive("seekBar", ['$document', seekBar]);
})();