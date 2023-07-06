import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Tweet } from 'src/app/models/tweet.model';
import { StorageService } from '../../shared/storage/storage.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DialogConfirmComponent } from 'src/app/shared/dialog/confirm/confirm.component';

@Component({
  selector: '[app-tweet]',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.scss']
})
export class TweetComponent {
  @Input() tweet!: Tweet;

  constructor(private storageService: StorageService, private modalService: NgbModal) {}

  onDeleteTweet() {
    const modalRef = this.modalService.open(DialogConfirmComponent);

    modalRef.closed.subscribe(confirmation => {
      if(confirmation) this.storageService.deleteTweet(this.tweet).subscribe()
    });
  }
}
