// import { Injectable } from '@angular/core';
// import { Howl, Howler } from 'howler';
// import { IonRange } from '@ionic/angular';

// export interface Track {
//   title: string;
//   path: string;
//   artist: string;
//   album_art: string;
// }

// @Injectable({
//   providedIn: 'root'
// })

// export class AudioPlaybackService {
//   activeTrack: Track = null; // variable for active track
//   player: Howl = null;
//   isPlaying = false;
//   progress = 0;
//   @ViewChild('range', {static: false}) range: IonRange;

//   playlist: Track[] = [{
//     title: 'No Me Conoce (Remix)',
//     artist: 'Jhay Cortez, J. Balvin, Bad Bunny',
//     album_art: '../../assets/img/Famouz.jpg',
//     path: '../../assets/music/Jhay Cortez, J. Balvin, Bad Bunny - No Me Conoce (Remix).mp3'
//   },
//   {
//     title: 'Roses Imanbek Remix',
//     artist: 'Saint JHN',
//     album_art: '../../assets/img/Roses_album_art.jpeg',
//     path: '../../assets/music/SAINt JHN - Roses Imanbek Remix (Official Audio).mp3'
//   },
//   {
//     title: 'Civil War',
//     artist: 'Russ',
//     album_art: '../../assets/img/default-artwork.png',
//     path: '../../assets/music/Russ - CIVIL WAR (Official Video).mp3'
//   },
//   {
//     title: 'Marinero',
//     artist: 'Maluma',
//     album_art: '../../assets/img/FAME.jpeg',
//     path: '../../assets/music/Maluma - Marinero (Official Video).mp3'
//   },
//   {
//     title: 'Title',
//     artist: 'artist',
//     album_art: '../../assets/img/default-artwork.png',
//     path: 'path'
//   }

//   ];

//   ngOnInit() {
//   }

//   start(track: Track) {
//     if (this.player) {
//       this.player.stop();
//     }
//     this.player = new Howl({
//       src: [track.path],
//       html5: true,
//       onplay: () => {
//         console.log('onplay');
//         this.isPlaying = true;
//         this.activeTrack = track;
//         this.updateProgress();
//       },
//       onend: () => {

//       }
//     });
//     this.player.play();

//   }

//   togglePlayer(pause) {
//     this.isPlaying = !pause;
//     if (pause) {
//       this.player.pause();
//     } else {
//       this.player.play();
//     }
//   }

//   next() {
//     const index = this.playlist.indexOf(this.activeTrack);
//     if (index != this.playlist.length - 1){
//       this.start(this.playlist[index + 1]);
//     } else {
//       this.start(this.playlist[0]);
//     }

//   }

//   prev() {
//     const index = this.playlist.indexOf(this.activeTrack);
//     if (index > 0){
//       this.start(this.playlist[index - 1]);
//     } else {
//       this.start(this.playlist[this.playlist.length - 1]);
//     }

//   }

//   seek() {
//     const newValue = +this.range.value;
//     const duration = this.player.duration();
//     this.player.seek(duration * (newValue / 100));
//   }

//   updateProgress() {
//     const seek = this.player.seek();
//     this.progress = (seek / this.player.duration()) * 100 || 0;
//     setTimeout(() => {
//       this.updateProgress();
//     }, 1000);
//   }

//   constructor() { }
// }
