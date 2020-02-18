import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './content/login/login.component';

import { ContentRoutingModule } from './content-routing.module';
import { LoginGuard } from './guard/login.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'content',
    loadChildren: './content-routing.module#ContentRoutingModule',
    // canActivate: [LoginGuard]
  }
];

@NgModule({
  imports: [
    ContentRoutingModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
