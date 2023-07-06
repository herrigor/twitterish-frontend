import {
  Component,
  ElementRef,
  SecurityContext,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { StorageService } from '../shared/storage/storage.service';
import { nanoid } from 'nanoid';
import { DomSanitizer } from '@angular/platform-browser';
import { ROBOT_GUEST } from '../models/tweet.model';

@Component({
  selector: 'app-tweet-composer',
  templateUrl: './tweet-composer.component.html',
  styleUrls: ['./tweet-composer.component.scss'],
})
export class TweetComposerComponent {
  CHAR_LIMIT = 130;

  currentUser = {
    handle: 'guest',
    name: 'guest_account',
    avatar: ROBOT_GUEST,
    bio: 'Robot icon created by YardenG; Trees, by Freepik. @Flaticon',
  };

  constructor(
    private storageService: StorageService,
    private sanitizer: DomSanitizer
  ) {}

  onSendTweet(composer: NgForm) {
    if (!composer.form.valid) return;

    const sanitizedTweet = this.sanitizer.sanitize(
      SecurityContext.HTML,
      composer.form.controls['tweet'].value.trim()
    );
    if (!sanitizedTweet) return;

    this.storageService
      .saveTweet({
        id: nanoid(),
        user: this.currentUser,
        message: sanitizedTweet,
        datetime: new Date().getTime(),
      })
      .subscribe(() => {
        composer.form.reset();
      });
  }
}
