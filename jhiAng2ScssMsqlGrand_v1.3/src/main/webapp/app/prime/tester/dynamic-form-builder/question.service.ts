import { Injectable } from '@angular/core';
import { DropdownQuestion } from './question-dropdown';
import { QuestionBase } from './question-base';
import { TextboxQuestion } from './question-textbox';
import { forEach } from '@angular/router/src/utils/collection';

@Injectable()
export class QuestionService {

  questions: QuestionBase<any>[] = [];
  // Todo: get from a remote source of question metadata
  // Todo: make asynchronous
  getQuestions(str: string) {
    let jstr;
    // const jstr = JSON.stringify(str);
    try {
      jstr = JSON.parse(str);
      this.questions = [];
      jstr.forEach((element) => {
        let addElement;
        if (Object.keys(element).find((key) => key === 'options') !== undefined) {
          addElement = new DropdownQuestion(element);
        } else {
          addElement = new TextboxQuestion(element);
        }
        this.questions.push(addElement);
      });
  } catch (ex) {
    // Code to handle exception
  }
  return this.questions.sort((a, b) => a.order - b.order);
    /* const questions: QuestionBase<any>[] = [

      new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3
      }),

      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
      })
    ];
 */
  }
}
