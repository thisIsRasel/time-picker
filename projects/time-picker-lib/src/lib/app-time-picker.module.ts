import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TimePickerDirective } from './directives/time-picker.directive';
import { TimePickerDialogComponent } from './components/time-picker-dialog/time-picker-dialog.component';
import { AppTimePickerComponent } from './components/app-time-picker/app-time-picker.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { TimePickerService } from './services/time-picker.service';

@NgModule({
    imports: [
        FlexLayoutModule,
        TranslateModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatInputModule,
        MatDialogModule,
        MatIconModule
    ],
    declarations: [
        AppTimePickerComponent,
        TimePickerDirective,
        TimePickerDialogComponent
    ],
    exports: [
        AppTimePickerComponent,
        TimePickerDirective
    ],
    providers: [
        TimePickerService
    ],
    entryComponents: [
        TimePickerDialogComponent
    ]
})
export class AppTimePickerModule { }
