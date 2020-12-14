import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaFeatureComponent } from './media-feature.component';
import { MediaListComponent } from './components/media-list/media-list.component';
import { MediaEntryComponent } from './components/media-entry/media-entry.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MediaItemComponent } from './components/media-item/media-item.component';

@NgModule({
  declarations: [MediaFeatureComponent, MediaListComponent, MediaEntryComponent, MediaItemComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class MediaFeatureModule { }
