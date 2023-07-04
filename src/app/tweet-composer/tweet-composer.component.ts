import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StorageService } from '../shared/storage/storage.service';
import { v4 as uuid } from 'uuid';


@Component({
  selector: 'app-tweet-composer',
  templateUrl: './tweet-composer.component.html',
  styleUrls: ['./tweet-composer.component.scss']
})
export class TweetComposerComponent {
  currentUser = {
    handle: 'guest',
    name: 'guest_account',
    avatar: 'https://unsplash.it/100/100',
    bio: 'don\'t mind me, just passing by :)'
  }

  constructor(private storageService: StorageService) {
  }

  onSendTweet(composer: NgForm) {
    if(!composer.form.valid) return

    this.storageService.saveTweet({
      id: uuid(),
      user: this.currentUser,
      message: composer.form.controls['tweet'].value,
      datetime: new Date().getTime()
    }).subscribe(result => {
      console.log(result)
    })
  }
}
