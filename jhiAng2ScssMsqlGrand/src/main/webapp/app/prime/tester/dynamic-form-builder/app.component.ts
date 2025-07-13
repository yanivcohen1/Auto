import { Component } from '@angular/core';
import { QuestionService } from './question.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'jhi-dynamic-form-builder',
  template: `
  <textarea rows="10" cols="50" [(ngModel)]="textData" (ngModelChange)="onChange($event)"></textarea>
    <div>
      <h2>dynamic form builder</h2>
      <jhi-app-dynamic-form [questions]="questions"></jhi-app-dynamic-form>
    </div>
  `,
  providers:  [QuestionService]
})
export class DynamicFormBuilderComponent implements OnInit {
  questions: any[];
  public textData; // = ` `;

  constructor(private service: QuestionService) {
    // this.questions = service.getQuestions();
  }

  onChange(event) {
    this.questions = this.service.getQuestions(this.textData)
  }

  ngOnInit() {
    this.textData = JSON.stringify([{
      key: 'firstName',
      label: 'First name',
      value: 'Bombasto',
      required: true,
      order: 1
    }, {
      key: 'brave',
      label: 'Bravery Rating',
      options: [
        {key: 'solid',  value: 'Solid'},
        {key: 'great',  value: 'Great'},
        {key: 'good',   value: 'Good'},
        {key: 'unproven', value: 'Unproven'}
      ],
      order: 2},
      {
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 3
      }])
    
    this.onChange('event');
  }

}
