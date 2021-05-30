import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Time Picker';

  public changeTime(event: any): void {
    let timeStr = (event.hours < 10 ? ('0' + event.hours) : event.hours) + ":" + (event.minutes < 10 ? ('0' + event.minutes) : event.minutes);
    console.log(event);
  }
}
