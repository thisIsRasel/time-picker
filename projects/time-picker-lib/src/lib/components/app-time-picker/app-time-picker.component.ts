import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TimePickerDialogComponent } from '../time-picker-dialog/time-picker-dialog.component';

@Component({
    selector: 'app-time-picker',
    templateUrl: './app-time-picker.component.html'
})
export class AppTimePickerComponent implements OnInit {

    @Output() dateChanged: EventEmitter<any> = new EventEmitter<any>();

    constructor(public dialog: MatDialog) {

    }

    ngOnInit() {

    }

    openDialog(timeStr) {
        let hours = 0, minutes = 0;
        if (timeStr) {
            [hours, minutes] = timeStr.split(':');
        }

        const dialogRef = this.dialog.open(TimePickerDialogComponent, {
            width: '250px',
            data: {
                hours: hours,
                minutes: minutes
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.dateChanged.emit({
                    hours: parseInt(result.hours),
                    minutes: parseInt(result.minutes)
                });
            }
        });
    }

    splitTime(timeStr) {
        if (timeStr) {
            let t = timeStr.split(':');

        }
    }
}
