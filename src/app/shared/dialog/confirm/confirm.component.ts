import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class DialogConfirmComponent {

  constructor(public activeModal: NgbActiveModal) {}

  onConfirmDelete(confirm: boolean): void {
    this.activeModal.close(confirm)
  }

}
