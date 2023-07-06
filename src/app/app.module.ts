import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TimeagoModule } from "ngx-timeago";

import { TweetMediaComponent } from './shared/tweet-media/tweet-media.component';
import { TweetComposerComponent } from './tweet-composer/tweet-composer.component';
import { TimelineComponent } from './timeline/timeline/timeline.component';
import { TweetComponent } from './timeline/tweet/tweet.component';
import { TweetInteractionsComponent } from './timeline/tweet/tweet-interactions/tweet-interactions.component';
import { FormsModule } from '@angular/forms';
import { AvatarComponent } from './shared/avatar/avatar.component';

@NgModule({
  declarations: [
    AppComponent,
    TweetComposerComponent,
    TimelineComponent,
    TweetComponent,
    TweetMediaComponent,
    TweetInteractionsComponent,
    AvatarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    NgbModalModule,
    TimeagoModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
