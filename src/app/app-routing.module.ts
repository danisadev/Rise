import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'user-home',
    loadChildren: () => import('./user-home/user-home.module').then( m => m.UserHomePageModule)
  },
  {
    path: 'now-playing',
    loadChildren: () => import('./now-playing/now-playing.module').then( m => m.NowPlayingPageModule)
  },
  {
    path: 'user-library',
    loadChildren: () => import('./user-library/user-library.module').then( m => m.UserLibraryPageModule)
  },
  {
    path: 'artist-info',
    loadChildren: () => import('./artist-info/artist-info.module').then( m => m.ArtistInfoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
