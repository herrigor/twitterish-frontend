import { Component, Input } from '@angular/core';
import { Tweet } from 'src/app/models/tweet.model';
import { StorageService } from '../../shared/storage/storage.service';

@Component({
  selector: '[app-tweet]',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.scss']
})
export class TweetComponent {
  @Input() tweet!: Tweet;

  constructor(private storageService: StorageService) {}

  onDeleteTweet() {
    const result = confirm('delete really?')
    if(!result) return

    this.storageService.deleteTweet(this.tweet).subscribe()
  }
}
