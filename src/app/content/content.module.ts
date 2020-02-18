import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';
import { LoginModule } from './login/login.module';
import { ProductionSummaryComponent } from './production-summary/production-summary.component';


@NgModule({
  imports: [
    // CommonModule,
    // FormsModule,
    // RouterModule
    LoginModule
  ],
  declarations: [
    ProductionSummaryComponent
  ],
  exports: [
    LoginModule
  ]
})
export class ContentModule { }
