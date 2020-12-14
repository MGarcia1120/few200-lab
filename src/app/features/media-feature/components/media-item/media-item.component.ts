import { Component, Input, OnInit } from '@angular/core';
import { MediaItem } from '../../models/media-item';

@Component({
  selector: 'app-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.scss']
})
export class MediaItemComponent implements OnInit {

  @Input() item!: MediaItem;


  constructor() { }

  ngOnInit(): void {
  }


  changed(evt: any) {
    this.item.isLoanedOut = evt.target.checked;
    console.log(this.item);
  }

}
