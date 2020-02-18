import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ContentRoutingModule } from './routing/content-routing.module';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './content/login/login.module#LoginModule'},
  { path: 'content', loadChildren: './content/content.module#ContentModule'},
];

@NgModule({
  imports: [
    ContentRoutingModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
