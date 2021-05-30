import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'time-picker-dialog',
    templateUrl: './time-picker-dialog.component.html',
    styleUrls: ['./time-picker-dialog.component.scss']
})
export class TimePickerDialogComponent implements OnInit, AfterViewInit {

    hours: number = 0;
    minutes: number = 0;
    minuteChangeBy: number = 1;
    @ViewChild('hour', { static: false }) hour: any;
    @ViewChild('minute', { static: false }) minute: any;
    
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        public dialogRef: MatDialogRef<any>
    ) { }

    ngOnInit() {
        this.hours = this.data && parseInt(this.data.hours);
        this.minutes = this.data && parseInt(this.data.minutes);
        this.minuteChangeBy = this.data && parseInt(this.data.minuteChangeBy) || 1;
    }

    ngAfterViewInit() {
        this.hour.valueChanges.subscribe((value) => {
            setTimeout(() => {
                if (value && (!parseInt(value) || parseInt(value) < 0)) {
                    this.hours = 0;
                } else if (value && parseInt(value) > 23) {
                    this.hours = 23;
                }
            })
        });

        this.minute.valueChanges.subscribe((value) => {
            setTimeout(() => {
                if (value && (!parseInt(value) || parseInt(value) < 0)) {
                    this.minutes = 0;
                } else if (value && parseInt(value) > 59) {
                    this.minutes = 59;
                }
            });
        });
    }

    increment(type: string) {
        if (type == 'hour') {
            this.hours++;
        } else if (type == 'minute') {
            this.minutes = +this.minutes + +this.minuteChangeBy;
        }

        if (this.hours > 23) { this.hours = 0; }
        if (this.minutes > 59) {
            this.minutes = this.minutes - 60;
        }
    }

    decrement(type: string) {
        if (type == 'hour') {
            this.hours--;
        } else if (type == 'minute') {
            this.minutes = +this.minutes - +this.minuteChangeBy;
        }

        if (this.hours < 0) { this.hours = 23; }
        if (this.minutes < 0) { this.minutes = 60 + this.minutes; }
    }

    ok() {
        let timeData = {
            hours: this.hours,
            minutes: this.minutes
        };
        this.data && this.data.onSuccess && this.data.onSuccess(timeData);
        this.dialogRef.close(timeData);
    }
}
