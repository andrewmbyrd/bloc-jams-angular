 (function() {
     function timecode() {
         return function(seconds) {
             
             /*
             *@desc these variables store the number of whole seconds and whole minutes in the song
             */
             var seconds = Number.parseFloat(seconds);
             
             //checks if the input is null and formats accordingly
             if (Number.isNaN(seconds)) {
                 return '-:--';
             }
                
             //use buzz built in function to format time
             return buzz.toTimer(seconds);
             
         };
     }
 
     angular
         .module('blocJams')
         .filter('timecode', timecode);
 })();