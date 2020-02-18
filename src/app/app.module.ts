import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { UiModule } from './ui/ui.module';
import { ContentModule } from './content/content.module';
import { HelloComponent } from './hello.component.ts';


@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ContentModule,
    UiModule,
		ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
