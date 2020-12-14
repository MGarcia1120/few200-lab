
import { BehaviorSubject, Observable } from 'rxjs';
import { MediaItem } from '../models';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})


export class MediaService {

  private data: MediaItem[] = [
    { title: 'StarCraft', format: 'video game', isLoanedOut: false },
    { title: 'Command & Conquer', format: 'video game', isLoanedOut: false },
  ];

  private subject = new BehaviorSubject<MediaItem[]>(this.data);

  getMediaData(): Observable<MediaItem[]> {
    return this.subject.asObservable();
  }

  getMediaCount(): Observable<number> {
    return this.subject.pipe(
      map(items => items.length)
    );
  }

  addItem(mediaItem: MediaItem): void {
    this.data = [...this.data, mediaItem];
    this.subject.next(this.data);
  }

}
