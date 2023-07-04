import { Component, Input, OnInit } from '@angular/core';
import { Tweet } from 'src/app/models/tweet.model';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.scss']
})
export class TweetComponent implements OnInit {
  @Input() tweet: Tweet = {
    user: {
      handle: 'igor',
      avatar: 'https://unsplash.it/100/100',
      bio: 'hey, i\'m me',
      name: 'igorrr'
    },
    message: 'this is a test tweet',
    datetime: 1553683912689
  };

  constructor() {
  }

  ngOnInit() {
  }
}
