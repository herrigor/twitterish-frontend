import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetMediaComponent } from './tweet-media.component';

describe('TweetMediaComponent', () => {
  let component: TweetMediaComponent;
  let fixture: ComponentFixture<TweetMediaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TweetMediaComponent]
    });
    fixture = TestBed.createComponent(TweetMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
