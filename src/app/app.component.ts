import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

import { UtilService } from '../app/util.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent {
  
  form$: Observable<FormGroup> = this.service.getHotelForm();

  constructor(private readonly service: UtilService) {
  }

  onSubmit(value) {
    console.log(value);
  }
}
