import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators } from '@angular/forms';

/** A hero's name can't match the given regular expression */
export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? {'forbiddenName': {value: control.value}} : null;
  };
}

@Directive({
  selector: '[jhiForbiddenName]',
  providers: [{provide: NG_VALIDATORS, useExisting: ForbiddenValidatorDirective, multi: true}]
})
export class ForbiddenValidatorDirective implements Validator {
  @Input() jhiForbiddenName: string;

  validate(control: AbstractControl): {[key: string]: any} {
    return this.jhiForbiddenName ? forbiddenNameValidator(new RegExp(this.jhiForbiddenName, 'i'))(control)
                              : null;
  }
}
/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
