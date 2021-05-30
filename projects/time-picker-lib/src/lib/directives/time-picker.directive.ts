import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({selector: '[timePicker]'})
export class TimePickerDirective {

    @Input() timePicker;

    @HostListener('click', ['$event']) onClick($event){
        let timeStr = $event.target.value;
        this.timePicker.openDialog(timeStr);
    }

    constructor(private el: ElementRef) {

    }
}
