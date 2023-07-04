import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'market-group-form',
  templateUrl: './market-group-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarketGroupFormComponent {
  @Input() public marketGroupForm: FormGroup;
}