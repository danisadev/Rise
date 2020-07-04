import { Component, OnInit, ViewChild } from '@angular/core';
import { Howl, Howler } from 'howler'
// import { timingSafeEqual } from 'crypto';
import { IonRange } from '@ionic/angular';
import { TouchSequence } from 'selenium-webdriver';
import { ThrowStmt } from '@angular/compiler';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';

export interface Track {
  title: string;
  path: string;
  artist: string;
  album_art: string;
}

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.page.html',
  styleUrls: ['./user-home.page.scss'],
})
export class UserHomePage implements OnInit {
  activeTrack: Track = null;//variable for active track
  player: Howl = null;
  isPlaying = false;
  progress = 0;
  @ViewChild('range', {static: false}) range: IonRange;

  playlist: Track[] = [{
    title: 'No Me Conoce (Remix)',
    artist: 'Jhay Cortez, J. Balvin, Bad Bunny',
    album_art: '../../assets/img/Famouz.jpg',
    path: '../../assets/music/Jhay Cortez, J. Balvin, Bad Bunny - No Me Conoce (Remix).mp3'
  },
  {
    title: 'Roses Imanbek Remix',
    artist: 'Saint JHN',
    album_art: '../../assets/img/Roses_album_art.jpeg',
    path: '../../assets/music/SAINt JHN - Roses Imanbek Remix (Official Audio).mp3'
  },
  {
    title: 'Civil War',
    artist: 'Russ',
    album_art: '../../assets/img/default-artwork.png',
    path: '../../assets/music/Russ - CIVIL WAR (Official Video).mp3'
  },
  {
    title: 'Marinero',
    artist: 'Maluma',
    album_art: '../../assets/img/FAME.jpeg',
    path: '../../assets/music/Maluma - Marinero (Official Video).mp3'
  },
  {
    title: 'Title',
    artist: 'artist',
    album_art: '../../assets/img/default-artwork.png',
    path: 'path'
  }

  ]

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {
  }

  start(track: Track) {
    if(this.player) {
      this.player.stop();
    }
    this.player = new Howl({
      src: [track.path],
      html5: true,
      onplay: () => {
        console.log('onplay');
        this.isPlaying = true;
        this.activeTrack = track;
        this.updateProgress();
      },
      onend: () => {

      }
    });
    this.player.play();

  }

  togglePlayer(pause) {
    this.isPlaying = !pause;
    if (pause) {
      this.player.pause();
    } else {
      this.player.play();
    }
  }

  next() {
    let index = this.playlist.indexOf(this.activeTrack);
    if(index != this.playlist.length - 1){
      this.start(this.playlist[index + 1]);
    } else {
      this.start(this.playlist[0])
    }

  }

  prev() {
    let index = this.playlist.indexOf(this.activeTrack);
    if(index > 0){
      this.start(this.playlist[index-1]);
    } else {
      this.start(this.playlist[this.playlist.length - 1])
    }

  }

  seek() {
    let newValue = +this.range.value;
    let duration = this.player.duration();
    this.player.seek(duration * (newValue / 100));
  }

  updateProgress() {
    let seek = this.player.seek();
    this.progress = (seek / this.player.duration()) * 100 || 0;
    setTimeout(() => {
      this.updateProgress();
    }, 1000)
  }

  //popover
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      componentProps: {},
      cssClass: 'popOver',
      event: ev,
      translucent: false,

    });
    return await popover.present(); 
  }
}
