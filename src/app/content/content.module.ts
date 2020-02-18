import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UiModule } from '../ui/ui.module';
import { LoginComponent } from './login/login.component';
import { ProductionSummaryComponent } from './production-summary/production-summary.component';
import { PwaQueueFormComponent } from './pwa-queue-form/pwa-queue-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UiModule,
    // RouterModule
  ],
  declarations: [
    ProductionSummaryComponent,
    PwaQueueFormComponent,
    LoginComponent
  ],
  exports: [
    // RouterModule
  ]
})
export class ContentModule { }
