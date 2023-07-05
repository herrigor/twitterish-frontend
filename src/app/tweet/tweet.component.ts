import { Component, Input, OnInit } from '@angular/core';
import { Tweet } from 'src/app/models/tweet.model';
import { StorageService } from '../shared/storage/storage.service';

@Component({
  selector: '[app-tweet]',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.scss']
})
export class TweetComponent implements OnInit {
  @Input() tweet!: Tweet;

  constructor(private storageService: StorageService) {
  }

  ngOnInit() {
  }

  onDeleteTweet() {
    console.log(`will delete tweet ${this.tweet.id}`)
    this.storageService.deleteTweet(this.tweet).subscribe(() => console.log(`deleted tweet ${this.tweet.id}`))
  }
}
