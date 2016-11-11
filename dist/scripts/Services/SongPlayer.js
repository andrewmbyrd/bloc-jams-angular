(function() {
     function SongPlayer(Fixtures) {
          var SongPlayer = {};
         
        
         
        
         
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
                    stopSong();
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
            for (var i =0; i <SongPlayer.currentAlbum.songs.length; i++){
                if (SongPlayer.currentAlbum.songs[i].title == song.title){
                    return i;    
                }
                    
            }
         };
        
         
        /**
        * @function stopSong
        * @desc stops the currently playing song and sets .playing to null
        */
        var stopSong = function(){
            currentBuzzObject.stop();
            SongPlayer.currentSong.playing = null;
        } 
         
        /**
        * @desc Song object that is currently playing or paused. or null if no song is active
        * @type {Object}
        */
         SongPlayer.currentSong=null;
         
         /**
        * @desc gets the picassso album from the fixtures object
        * @type {Object}
        */
         SongPlayer.currentAlbum = Fixtures.getAlbum();
         
         
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
                stopSong();
            } else{
                var song = SongPlayer.currentAlbum.songs[currentSongIndex];
                setSong(song);
                playSong(song);               
            }
        };
         
        /**
        * @function next
        * @desc sets the current song to the song that comes nextin album song list. Or loops to the first song if it was at the end
        */
        SongPlayer.next = function(){
            var currentSongIndex = getSongIndex(SongPlayer.currentSong);
            currentSongIndex++;
            
            if (currentSongIndex >= SongPlayer.currentAlbum.songs.length) {
                currentSongIndex = 0;
            } 
    
            var song = SongPlayer.currentAlbum.songs[currentSongIndex];
            setSong(song);
            playSong(song);               
            
        };
        
        /**
        * @function initialPlay
        * @desc makes it so that if currentSong===null, the playerBar can play the first song in the album
        */
        SongPlayer.initialPlay = function(){
            var song = SongPlayer.currentAlbum.songs[0];
            setSong(song);
            playSong(song);
        } 
         
         return SongPlayer;
     }
 
     angular
         .module('blocJams')
         .factory('SongPlayer', SongPlayer);
 })();