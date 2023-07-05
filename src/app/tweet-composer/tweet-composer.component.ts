import { Component, ElementRef, SecurityContext, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StorageService } from '../shared/storage/storage.service';
import { v4 as uuid } from 'uuid';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-tweet-composer',
  templateUrl: './tweet-composer.component.html',
  styleUrls: ['./tweet-composer.component.scss']
})
export class TweetComposerComponent {
  CHAR_LIMIT = 130

  currentUser = {
    handle: 'guest',
    name: 'guest_account',
    avatar: 'https://unsplash.it/100/100',
    bio: 'don\'t mind me, just passing by :)'
  }

  constructor(
    private storageService: StorageService,
    private sanitizer: DomSanitizer) {}

  onSendTweet(composer: NgForm) {
    if(!composer.form.valid) return

    const sanitizedTweet = this.sanitizer.sanitize(SecurityContext.HTML, composer.form.controls['tweet'].value.trim())
    if(!sanitizedTweet) return

    this.storageService.saveTweet({
      id: uuid(),
      user: this.currentUser,
      message: sanitizedTweet,
      datetime: new Date().getTime()
    }).subscribe(result => {
      console.log(result)
    })
  }
}
