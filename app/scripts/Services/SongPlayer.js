(function() {
     function SongPlayer(Fixtures) {
          var SongPlayer = {};
         
        
         
        /**
        * @desc gets the picassso album from the fixtures object
        * @type {Object}
        */
         var currentAlbum = Fixtures.getAlbum();
         
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
                    SongPlayer.currentSong.playing = null;
                }
 
              currentBuzzObject = new buzz.sound(song.audioUrl, {
              formats: ['mp3'],
              preload: true
              });
 
              SongPlayer.currentSong = song;
          };
         
        /**
        * @function playSong
        * @desc plays current Buzz object and sets currentSong.playing to true
        */
         var playSong = function(){
             currentBuzzObject.play();
             SongPlayer.currentSong.playing = true;
         }
         
        /**
        * @function getSongIndex
        * @desc gets the index in the album songs array of the current song
        * @returns an integer with index in the album songs array
        */
         var getSongIndex = function(song) {
            for (var i =0; i <currentAlbum.songs.length; i++){
                if (currentAlbum.songs[i].title == song.title){
                    return i;    
                }
                    
            }
         };
         
        /**
        * @desc Song object that is currently playing or paused. or null if no song is active
        * @type {Object}
        */
         SongPlayer.currentSong=null;
         
         
        /**
        * @function play
        * @desc if the current song is paused and is clicked again, play the song. if a different song is clicked, set song to the new song and play it
        * @param {Object} song
        */
         SongPlayer.play = function(song) {
             song = song || SongPlayer.currentSong;
             if (SongPlayer.currentSong !== song){
                
                setSong(song);
                playSong();
                 
             } else if (SongPlayer.currentSong === song  && currentBuzzObject !== null){
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
             song = song || SongPlayer.currentSong;
             currentBuzzObject.pause();
             song.playing = false;
         };
         
        /**
        * @function previous
        * @desc sets the current song to the song that comes previously in album song list. Or stops the song if it was the first in album song list
        */ 
        SongPlayer.previous = function() {
            var currentSongIndex = getSongIndex(SongPlayer.currentSong);
            currentSongIndex--;
            
            if (currentSongIndex < 0) {
                currentBuzzObject.stop();
                SongPlayer.currentSong.playing = null;
            } else{
                var song = currentAlbum.songs[currentSongIndex];
                setSong(song);
                playSong(song);               
            }
        };
         
         return SongPlayer;
     }
 
     angular
         .module('blocJams')
         .factory('SongPlayer', SongPlayer);
 })();