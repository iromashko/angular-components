import { Component, OnInit } from '@angular/core';
import { fadeInOutAnimation } from '../../other/fade-in-out/fade-in-out.animation';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IFormDirty } from '../form-dirty-guard/form-dirty.interface';

@Component({
  selector: 'app-other-documentation',
  templateUrl: './other-documentation.component.html',
  styleUrls: ['./other-documentation.component.scss'],
  animations: [fadeInOutAnimation],
})
export class OtherDocumentationComponent implements IFormDirty {
  public isInDOM = true;
  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.initializeForm();
  }

  public submit() {
    this.form.reset(this.form.value);
  }

  private initializeForm(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
    });
  }
}
