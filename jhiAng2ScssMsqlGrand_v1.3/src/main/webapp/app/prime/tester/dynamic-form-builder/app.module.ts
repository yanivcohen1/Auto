import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { DynamicFormBuilderComponent } from './app.component';
import { DynamicFormComponent } from './dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [ BrowserModule, ReactiveFormsModule, FormsModule ],
  declarations: [ DynamicFormBuilderComponent, DynamicFormComponent, DynamicFormQuestionComponent ],
  // bootstrap: [ AppComponent ]
  exports: [
    DynamicFormBuilderComponent
  ]
})
export class DynamicFormBuilderModule {
  constructor() {
  }
}
