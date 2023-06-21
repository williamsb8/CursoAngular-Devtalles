import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { HeroeModule } from './heroes/heroe.module';
import { DbzModule } from './dbz/dbz.module';

@NgModule({
  imports: [BrowserModule, FormsModule, HeroeModule, DbzModule],
  declarations: [AppComponent, CounterComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
