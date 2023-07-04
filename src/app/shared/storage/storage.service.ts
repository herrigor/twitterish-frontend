import { Injectable } from '@angular/core';
import { StorageMap } from '@ngx-pwa/local-storage';
import { Observable, filter, map, of, tap } from 'rxjs';
import { Tweet, TweetJSONSchema } from 'src/app/models/tweet.model';

const TWEETS_STORE = 'tweets'

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  tweets$: Observable<Tweet[] | undefined>;
  tweets: Tweet[] = [];

  constructor(private storage: StorageMap) {
    // this.storage.watch if typecast must have TweetJSONSchema
    // this.tweets$ = this.storage.watch<Tweet[]>(TWEETS_STORE, TweetJSONSchema.definitions.tweets);
    this.tweets$ = (this.storage.watch(TWEETS_STORE) as Observable<Tweet[] | undefined>);

    this.storage.set(TWEETS_STORE, [
      {
        user: {
          handle: 'igor',
          name: 'igorrr',
          avatar: 'https://unsplash.it/100/100',
          bio: 'hey, i\'m me'
        },
        message: 'this is fairly recent test tweet :)',
        datetime: 1656767842396
      },
      {
        user: {
          handle: 'igor',
          name: 'igorrr',
          avatar: 'https://unsplash.it/100/100',
          bio: 'hey, i\'m me'
        },
        message: 'this is an ancient test tweet',
        datetime: 1553683912689
      }
    ]).subscribe()
  }

  get() {
    return this.tweets$
  }

  saveTweet(tweet: Tweet) {
    this.tweets$.pipe(
      filter(tweets => tweets !== undefined ),
      map(tweets => tweets?.unshift(tweet) ),
      tap(updatedTweets => this.storage.set(TWEETS_STORE, updatedTweets)),
      tap(tweets => console.log(tweets))
    )
  }
}
