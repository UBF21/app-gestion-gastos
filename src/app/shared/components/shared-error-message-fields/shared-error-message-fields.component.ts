import { Component, Input, OnInit } from '@angular/core';
import { ValidationsMessageError } from 'src/app/utils/models/ValidationsMessageError';

@Component({
  selector: 'shared-error-message-fields',
  templateUrl: './shared-error-message-fields.component.html',
  styleUrls: ['./shared-error-message-fields.component.css']
})
export class SharedErrorMessageFieldsComponent implements OnInit {

  @Input()
  field: any;

  @Input()
  validationsMessageError:ValidationsMessageError = new ValidationsMessageError({});

  constructor (){}

  ngOnInit(): void {
      
  }
}
