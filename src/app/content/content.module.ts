import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';
import { LoginModule } from './login/login.module';
import { ProductionSummaryComponent } from './production-summary/production-summary.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'production-summary', pathMatch: 'full' },
  { path: 'production-summary', component: ProductionSummaryComponent},
];


@NgModule({
  imports: [
    // CommonModule,
    // FormsModule,
    LoginModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ProductionSummaryComponent
  ],
  exports: [
    LoginModule,
    RouterModule
  ]
})
export class ContentModule { }
