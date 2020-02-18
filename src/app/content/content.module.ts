import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';
import { LoginModule } from './login/login.module';
import { ProductionSummaryComponent } from './production-summary/production-summary.component';
import { Routes, RouterModule } from '@angular/router';
import { PwaQueueFormComponent } from './pwa-queue-form/pwa-queue-form.component';

@NgModule({
  imports: [
    // CommonModule,
    // FormsModule,
    LoginModule,
    // RouterModule.forChild(routes)
  ],
  declarations: [
    ProductionSummaryComponent,
    PwaQueueFormComponent
  ],
  exports: [
    LoginModule,
    RouterModule
  ]
})
export class ContentModule { }
