import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import en from '@angular/common/locales/en';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import { ZorroAntdModule } from './zorro.module';

registerLocaleData(en);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ZorroAntdModule,
  ],
  bootstrap: [AppComponent],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
})
export class AppModule {}
