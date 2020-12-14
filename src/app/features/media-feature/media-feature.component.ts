import { Component, OnInit } from '@angular/core';
import { MediaItem } from './models/media-item';
import { MediaService } from './services/media.service';

@Component({
  selector: 'app-media-feature',
  templateUrl: './media-feature.component.html',
  styleUrls: ['./media-feature.component.scss']
})
export class MediaFeatureComponent implements OnInit {

  items!: MediaItem[];

  constructor(private mediaService: MediaService) { }

  ngOnInit(): void {
    this.getMediaList();
  }

  getMediaList(): void {
    this.mediaService.getMediaData()
      .subscribe(items => this.items = items);
  }


  itemAdded(item: MediaItem) {
    console.log('before', this.items);
    this.items = [...this.items, item];
    console.log('after', this.items);
  }



}
