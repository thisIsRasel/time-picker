import { Component } from '@angular/core';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'Time Picker';
    timeStr: string;

    public changeTime(event: any): void {
        // event will contain hours and minutes. can be used to implement business logic.
        let timeStr = (event.hours < 10 ? ('0' + event.hours) : event.hours) + ":" + (event.minutes < 10 ? ('0' + event.minutes) : event.minutes);
        this.timeStr = timeStr;
    }
}
