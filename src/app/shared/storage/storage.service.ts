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
      filter(tweets => tweets === undefined || !tweets.length ),
      switchMap(() => this.storage.set(TWEETS_STORE, [
          {
            id: uuid(),
            user: {
              handle: 'igor',
              name: 'igorrr',
              avatar: 'assets/avatar_anim.gif',
              bio: 'hey, i\'m me'
            },
            message: 'hello! i\'m Igor Pamplona and i\'m a frontend engineer<br><br> this is a small twitter thingy i made. hope you like it (much of the buttons are for flair only tho)',
            datetime: new Date().getTime()
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
      distinctUntilChanged(),
      take(1),
      switchMap(updatedTweets => this.storage.set(TWEETS_STORE, updatedTweets)),
    )
  }

  deleteTweet(tweet: Tweet) {
    // dialog confirmation
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
