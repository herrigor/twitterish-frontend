import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TimeagoModule } from "ngx-timeago";

import { TweetComposerComponent } from './tweet-composer/tweet-composer.component';
import { TimelineComponent } from './timeline/timeline/timeline.component';
import { TweetMediaComponent } from './shared/tweet-media/tweet-media.component';
import { TweetComponent } from './tweet/tweet.component';
import { TweetInteractionsComponent } from './tweet/tweet-interactions/tweet-interactions.component';

@NgModule({
  declarations: [
    AppComponent,
    TweetComposerComponent,
    TimelineComponent,
    TweetComponent,
    TweetMediaComponent,
    TweetInteractionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    TimeagoModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
