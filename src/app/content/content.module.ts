import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';
import { LoginModule } from './login/login.module';


@NgModule({
  imports: [
    // CommonModule,
    // FormsModule,
    // RouterModule
    loginModule
  ],
  declarations: [
  ],
  exports: [
    loginModule
  ]
})
export class ContentModule { }
