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
          scope: {
              onChange: '&'
          },
          link: function(scope, element, attributes){
              scope.value = 0;
              scope.max = 100;
              
              /*
              * this holds the element that was clicked on of the two seek bar element directives
              */
              var seekBar = $(element);
              
            
            /*
            *@desc constantly updates the value and max of the seekbar
            */
            attributes.$observe('value', function(newValue) {
                scope.value = newValue;
            });
 
            attributes.$observe('max', function(newValue) {
                scope.max = newValue;
            });
              
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
              *@desc creates CSS code to set width
              *@returns a String with format for setting HOW FAR FROM THE LEFT the thumb should be in CSS
              */
              scope.thumbStyle = function(){
                  return {left: percentString()};
              }
              
              /*
              *@desc gets the percent fill when a seekBar is clicked and updates scope.value
              */
              scope.onClickSeekBar = function(event) {
                  var percent = calculatePercent(seekBar, event);
                  scope.value = percent * scope.max;
                  notifyOnChange(scope.value);
              }
              
              
              /*
              *@desc constantly update scope.value as the thumb is moved
              */
              scope.trackThumb = function() {
                    $document.bind('mousemove.thumb', function(event) {
                        var percent = calculatePercent(seekBar, event);
                       scope.$apply(function() {
                            scope.value = percent * scope.max;
                            notifyOnChange(scope.value);
                        });
                });
 
                    $document.bind('mouseup.thumb', function() {
                        $document.unbind('mousemove.thumb');
                        $document.unbind('mouseup.thumb');
                    });
            };
              
               /*
               *@desc makes the view update when the seekbar value changes
               *@args takes the value to which the seekbar has been changed
               */
               var notifyOnChange = function(newValue) {
                if (typeof scope.onChange === 'function') {
                    scope.onChange({value: newValue});
                }
               }; 
              
          }
     };
    }
    
    angular
        .module("blocJams")
        .directive("seekBar", ['$document', seekBar]);
})();