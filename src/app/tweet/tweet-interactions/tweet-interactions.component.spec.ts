import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetInteractionsComponent } from './tweet-interactions.component';

describe('TweetInteractionsComponent', () => {
  let component: TweetInteractionsComponent;
  let fixture: ComponentFixture<TweetInteractionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TweetInteractionsComponent]
    });
    fixture = TestBed.createComponent(TweetInteractionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
