import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { offlineProviders } from '@ngx-pwa/offline';

import { LoginComponent } from '../content/login/login.component';
import { UnavailableComponent } from '../content/unavailable/unavailable.component';

import { ContentRoutingModule } from './content-routing.module';
import { LoginGuard } from './guard/login.guard';

const routes: Routes = [
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '', component: LoginComponent },
  { path: 'unavailable', component: UnavailableComponent },
  // {
  //   path: 'content',
  //   loadChildren: './content-routing.module#ContentRoutingModule',
  //   // canActivate: [LoginGuard]
  // }
];

@NgModule({
  imports: [
    ContentRoutingModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [
    offlineProviders({ routeOffline: '/unavailable', routeUnavailable: '/unavailable' }),
  ]

})
export class AppRoutingModule {}
