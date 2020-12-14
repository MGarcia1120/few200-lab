import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { MediaItem } from '../../models/media-item';
import { Observable } from 'rxjs';
import { MediaService } from '../../services/media.service';

@Component({
  selector: 'app-media-list',
  templateUrl: './media-list.component.html',
  styleUrls: ['./media-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MediaListComponent implements OnInit {

  @Input() items!: MediaItem[];


  constructor() { }

  ngOnInit(): void {

  }



}
