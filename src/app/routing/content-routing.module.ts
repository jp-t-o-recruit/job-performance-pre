import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginModule } from '../content/login/login.module';
import { ProductionSummaryComponent } from '../content/production-summary/production-summary.component';
import { PwaQueueFormComponent } from '../content/pwa-queue-form/pwa-queue-form.component';

import { LoginGuard } from './guard/login.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'production-summary', pathMatch: 'full'
  //  canActivate: [LoginGuard]
    },
  { path: 'pwa-queue-form', component: PwaQueueFormComponent
  //  canActivate: [LoginGuard]
    },
  { path: 'production-summary', component: ProductionSummaryComponent
  //  canActivate: [LoginGuard]
    },
];

@NgModule({
  imports: [
    // LoginModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    // LoginModule,
    RouterModule
  ]
})
export class ContentRoutingModule { }