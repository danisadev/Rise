import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArtistInfoPageRoutingModule } from './artist-info-routing.module';

import { ArtistInfoPage } from './artist-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArtistInfoPageRoutingModule
  ],
  declarations: [ArtistInfoPage]
})
export class ArtistInfoPageModule {}
