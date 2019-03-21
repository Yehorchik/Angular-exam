import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

import { AllComponent } from './all/all.component';
import { CreateComponent } from './create/create.component';
import { InfoComponent } from './info/info.component';
import { UpdateComponent } from './update/update.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';

@NgModule({
  declarations: [
    AppComponent,
    AllComponent,
    CreateComponent,
    InfoComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
