(function() {
     function SongPlayer() {
          var SongPlayer = {};
         
         
        /**
        * @desc Song object that is currently playing or paused. or null if no song is active
        * @type {Object}
        */
         var currentSong=null;
         
        /**
        * @desc Buzz object audio file
        * @type {Object}
        */
         var currentBuzzObject=null;
         
        /**
        * @function setSong
        * @desc Stops currently playing song and loads new audio file as currentBuzzObject
        * @param {Object} song
        */
          var setSong = function(song) {
              if (currentBuzzObject) {
                    currentBuzzObject.stop();
                    currentSong.playing = null;
                }
 
              currentBuzzObject = new buzz.sound(song.audioUrl, {
              formats: ['mp3'],
              preload: true
              });
 
              currentSong = song;
          };
         
        /**
        * @function playSong
        * @desc plays current Buzz object and sets currentSong.playing to true
        */
         var playSong = function(){
             currentBuzzObject.play();
             currentSong.playing = true;
         }
         
         
        /**
        * @function play
        * @desc if the current song is paused and is clicked again, play the song. if a different song is clicked, set song to the new song and play it
        * @param {Object} song
        */
         SongPlayer.play = function(song) {
             if (currentSong !== song){
                
                setSong(song);
                playSong();
                 
             } else if (currentSong === song){
                 if (currentBuzzObject.isPaused()){
                     playSong();
                 }
                 
             }
     };
         
        /**
        * @function pause
        * @desc pauses the current song and sets playing to false
        * @param {Object} song
        */
         SongPlayer.pause = function(song) {
             currentBuzzObject.pause();
             song.playing = false;
         }
         
         return SongPlayer;
     }
 
     angular
         .module('blocJams')
         .factory('SongPlayer', SongPlayer);
 })();