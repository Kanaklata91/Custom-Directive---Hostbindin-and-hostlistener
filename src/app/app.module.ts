import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HighlightClass } from './highlight.directive';
import { BetterHighlighter } from './better-highlighter.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    HighlightClass,
    BetterHighlighter,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
