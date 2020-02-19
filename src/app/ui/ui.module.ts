import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { LabelInputComponent } from './label-input/label-input.component';
import { UpdateNotificationComponent } from './update-notification/update-notification.component';

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule],
  declarations: [
    LoadingSpinnerComponent,
    TopNavComponent,
    LabelInputComponent,
    UpdateNotificationComponent
  ],
  exports: [
    LoadingSpinnerComponent,
    TopNavComponent,
    LabelInputComponent,
    UpdateNotificationComponent
  ]
})
export class UiModule {}
