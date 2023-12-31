import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Tweet } from '../../models/tweet.model';
import { StorageService } from '../../shared/storage/storage.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent {
  tweets$: Observable<Tweet[] | undefined>;

  constructor(private storageService: StorageService) {
    this.tweets$ = this.storageService.get()
  }
}
