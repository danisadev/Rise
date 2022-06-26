import { Component, OnInit } from '@angular/core';

export interface Track {
  title: string;
  path: string;
  artist: string;
  album_art: string;
}

@Component({
  selector: 'app-user-library',
  templateUrl: './user-library.page.html',
  styleUrls: ['./user-library.page.scss'],
})
export class UserLibraryPage implements OnInit {

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

  ];

  constructor() { }

  ngOnInit() {
  }

}
