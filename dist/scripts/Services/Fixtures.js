 (function() {
     function Fixtures() {
         var Fixtures = {};
         
         var albumPicasso = {
         title: 'The Colors',
         artist: 'Pablo Picasso',
         label: 'Cubism',
         year: '1881',
         albumArtUrl: '/assets/images/album_covers/01.png',
         songs: [
             { title: 'Blue', duration: '161.71', audioUrl: '/assets/music/blue' },
             { title: 'Green', duration: '103.96', audioUrl: '/assets/music/green' },
             { title: 'Red', duration: '268.45', audioUrl: '/assets/music/red' },
             { title: 'Pink', duration: '153.14', audioUrl: '/assets/music/pink' },
             { title: 'Magenta', duration: '374.22', audioUrl: '/assets/music/magenta' }
         ]
     };
 
         var albumMarconi = {
         title: 'The Telephone',
         artist: 'Guglielmo Marconi',
         label: 'EM',
         year: '1909',
         albumArtUrl: '/assets/images/album_covers/20.png',
         songs: [
             { title: 'Hello, Operator?', duration: '1:01' },
             { title: 'Ring, ring, ring', duration: '5:01' },
             { title: 'Fits in your pocket', duration: '3:21' },
             { title: 'Can you hear me now?', duration: '3:14' },
             { title: 'Wrong phone number', duration: '2:15' }
         ]
     };
         var album3 = {
         title: 'The Telephone2',
         artist: 'Guglielmo Marconi',
         label: 'EM',
         year: '1909',
         albumArtUrl: '/assets/images/album_covers/07.png',
         songs: [
             { title: 'Hello, Operator?', duration: '1:01' },
             { title: 'Ring, ring, ring', duration: '5:01' },
             { title: 'Fits in your pocket', duration: '3:21' },
             { title: 'Can you hear me now?', duration: '3:14' },
             { title: 'Wrong phone number', duration: '2:15' }
         ]
     };
         var album4 = {
         title: 'These Sai',
         artist: 'Rafael',
         label: 'EM',
         year: '1909',
         albumArtUrl: '/assets/images/album_covers/08.png',
         songs: [
             { title: 'Hello, Operator?', duration: '1:01' },
             { title: 'Ring, ring, ring', duration: '5:01' },
             { title: 'Fits in your pocket', duration: '3:21' },
             { title: 'Can you hear me now?', duration: '3:14' },
             { title: 'Wrong phone number', duration: '2:15' }
         ]
     };
         var album5 = {
         title: 'The Game',
         artist: 'Da Vinci',
         label: 'EM',
         year: '1909',
         albumArtUrl: '/assets/images/album_covers/09.png',
         songs: [
             { title: 'Hello, Operator?', duration: '1:01' },
             { title: 'Ring, ring, ring', duration: '5:01' },
             { title: 'Fits in your pocket', duration: '3:21' },
             { title: 'Can you hear me now?', duration: '3:14' },
             { title: 'Wrong phone number', duration: '2:15' }
         ]
     };
         var album6 = {
         title: 'Excalibur',
         artist: 'Arthur and the Sacred Knights',
         label: 'EM',
         year: '1909',
         albumArtUrl: '/assets/images/album_covers/10.png',
         songs: [
             { title: 'Hello, Operator?', duration: '1:01' },
             { title: 'Ring, ring, ring', duration: '5:01' },
             { title: 'Fits in your pocket', duration: '3:21' },
             { title: 'Can you hear me now?', duration: '3:14' },
             { title: 'Wrong phone number', duration: '2:15' }
         ]
     };
         var album7 = {
         title: 'Rivers and Streams',
         artist: 'Leike',
         label: 'EM',
         year: '1909',
         albumArtUrl: '/assets/images/album_covers/11.png',
         songs: [
             { title: 'Hello, Operator?', duration: '1:01' },
             { title: 'Ring, ring, ring', duration: '5:01' },
             { title: 'Fits in your pocket', duration: '3:21' },
             { title: 'Can you hear me now?', duration: '3:14' },
             { title: 'Wrong phone number', duration: '2:15' }
         ]
     };
         var album8 = {
         title: 'Public Domain',
         artist: 'Patents Pending',
         label: 'EM',
         year: '1909',
         albumArtUrl: '/assets/images/album_covers/12.png',
         songs: [
             { title: 'Hello, Operator?', duration: '1:01' },
             { title: 'Ring, ring, ring', duration: '5:01' },
             { title: 'Fits in your pocket', duration: '3:21' },
             { title: 'Can you hear me now?', duration: '3:14' },
             { title: 'Wrong phone number', duration: '2:15' }
         ]
     };
         var album9 = {
         title: 'Evermore',
         artist: 'Poe',
         label: 'EM',
         year: '1909',
         albumArtUrl: '/assets/images/album_covers/13.png',
         songs: [
             { title: 'Hello, Operator?', duration: '1:01' },
             { title: 'Ring, ring, ring', duration: '5:01' },
             { title: 'Fits in your pocket', duration: '3:21' },
             { title: 'Can you hear me now?', duration: '3:14' },
             { title: 'Wrong phone number', duration: '2:15' }
         ]
     };
         var album10 = {
         title: 'Have I GoNE',
         artist: 'Malio Anderos',
         label: 'EM',
         year: '1909',
         albumArtUrl: '/assets/images/album_covers/14.png',
         songs: [
             { title: 'Hello, Operator?', duration: '1:01' },
             { title: 'Ring, ring, ring', duration: '5:01' },
             { title: 'Fits in your pocket', duration: '3:21' },
             { title: 'Can you hear me now?', duration: '3:14' },
             { title: 'Wrong phone number', duration: '2:15' }
         ]
     };
         var album11 = {
         title: 'To be Hired',
         artist: 'This Studend',
         label: 'EM',
         year: '1909',
         albumArtUrl: '/assets/images/album_covers/15.png',
         songs: [
             { title: 'Hello, Operator?', duration: '1:01' },
             { title: 'Ring, ring, ring', duration: '5:01' },
             { title: 'Fits in your pocket', duration: '3:21' },
             { title: 'Can you hear me now?', duration: '3:14' },
             { title: 'Wrong phone number', duration: '2:15' }
         ]
     };
         var album12 = {
         title: 'Focus',
         artist: 'ADHD',
         label: 'EM',
         year: '1909',
         albumArtUrl: '/assets/images/album_covers/16.png',
         songs: [
             { title: 'Hello, Operator?', duration: '1:01' },
             { title: 'Ring, ring, ring', duration: '5:01' },
             { title: 'Fits in your pocket', duration: '3:21' },
             { title: 'Can you hear me now?', duration: '3:14' },
             { title: 'Wrong phone number', duration: '2:15' }
         ]
     };
         
         var myAlbs = [albumPicasso, albumMarconi, album3, album4, album5, album6, album7, album8, album9, album10, album11, album12]
       
         Fixtures.getAlbum = function() {
            return angular.copy(albumPicasso);
        };
         
         Fixtures.getCollection = function(numberOfAlbums) {
            var albums=[];
             for (var i = 0; i< numberOfAlbums; i++){
                 albums.push(myAlbs[i]);
             }
             
             return albums;
         };
       return Fixtures;
         
     }
 
     angular
         .module('blocJams')
         .factory('Fixtures', Fixtures);
 })();