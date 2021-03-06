import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TwitcomponnetComponent } from './twitcomponnet/twitcomponnet.component';
import { TwitServiceService } from './twit-service.service';
import { LikeComponent } from './like/like.component';


@NgModule({
  declarations: [
    AppComponent,
    TwitcomponnetComponent,
    LikeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TwitServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
