import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArtistInfoPage } from './artist-info.page';

const routes: Routes = [
  {
    path: '',
    component: ArtistInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtistInfoPageRoutingModule {}
