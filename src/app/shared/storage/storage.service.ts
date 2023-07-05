import { Injectable, OnInit } from '@angular/core';
import { StorageMap } from '@ngx-pwa/local-storage';
import { EMPTY, Observable, distinctUntilChanged, filter, map, of, switchMap, take, tap } from 'rxjs';
import { Tweet, TweetJSONSchema } from 'src/app/models/tweet.model';
import { v4 as uuid } from 'uuid';

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
    this.hydrateTweets();
  }

  hydrateTweets() {
    (this.storage.get(TWEETS_STORE) as Observable<Tweet[] | undefined>).pipe(
      filter(tweets => tweets === undefined ),
      switchMap(() => this.storage.set(TWEETS_STORE, [
          {
            id: uuid(),
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
            id: uuid(),
            user: {
              handle: 'igor',
              name: 'igorrr',
              avatar: 'https://unsplash.it/100/100',
              bio: 'hey, i\'m me'
            },
            message: 'this is an ancient test tweet',
            datetime: 1553683912689
          }
        ])
      )
    ).subscribe()
  }

  get() {
    return this.tweets$
  }

  saveTweet(tweet: Tweet) {
    return (this.storage.get(TWEETS_STORE) as Observable<Tweet[]>).pipe(
      filter(tweets => tweets !== undefined ),
      tap(tweets => tweets?.unshift(tweet) ),
      tap(tweets => console.log(tweets)),
      distinctUntilChanged(),
      take(1),
      switchMap(updatedTweets => this.storage.set(TWEETS_STORE, updatedTweets)),
    )
  }

  deleteTweet(tweet: Tweet) {
    return (this.storage.get(TWEETS_STORE) as Observable<Tweet[]>).pipe(
      filter(tweets => tweets !== undefined ),
      distinctUntilChanged(),
      take(1),
      switchMap(tweets => {
        const id = tweets.findIndex(tw => tw.id === tweet.id)
        if(id === -1) return of(undefined)

        tweets.splice(id, 1)
        return this.storage.set(TWEETS_STORE, tweets)
      }),
    )
  }
}
