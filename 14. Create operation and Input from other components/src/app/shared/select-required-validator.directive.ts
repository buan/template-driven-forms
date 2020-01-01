import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { Directive } from '@angular/core';

@Directive({
    selector: '[appSelectValidator]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: SelectRequiredValidatorDirective,
            multi: true
        }]
})
export class SelectRequiredValidatorDirective implements Validator {
    validate(control: AbstractControl): { [key: string]: any } | null {
        // console.log(control.value);
        if (/@cognizant.com\s*$/.test(control.value)) {
            // console.log("it ends in @yahoo");
            
         } 
 
        return control.value === '-1' ? { 'defaultSelected': true } : null;
    }
}