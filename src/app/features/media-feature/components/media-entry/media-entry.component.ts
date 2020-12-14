import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MediaItem } from '../../models';

@Component({
  selector: 'app-media-entry',
  templateUrl: './media-entry.component.html',
  styleUrls: ['./media-entry.component.scss']
})
export class MediaEntryComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  @Output() itemAdded = new EventEmitter<MediaItem>();


  form!: FormGroup;
  get title(): AbstractControl { return this.form.get('title') as AbstractControl; }
  get format(): AbstractControl { return this.form.get('format') as AbstractControl; }
  get isLoanedOut(): AbstractControl { return this.form.get('isLoanedOut') as AbstractControl; }


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: new FormControl('', [Validators.required]),
      format: new FormControl('', [Validators.required]),
      isLoanedOut: false
    });
  }

  add(focus: HTMLElement): void {
    if (this.form.invalid) {
      console.log('Form Invalid.');
      return;
    }
    console.log(this.form.value);
    this.itemAdded.emit(this.form.value);
    this.form.reset();
    focus.focus();
  }


}
