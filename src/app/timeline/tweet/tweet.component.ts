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
  confirmDelete = false

  constructor(private storageService: StorageService) {}

  onDeleteTweet() {
    this.confirmDelete = true

    // this.storageService.deleteTweet(this.tweet).subscribe()
  }

  onDeleteConfirm() {

  }
}
