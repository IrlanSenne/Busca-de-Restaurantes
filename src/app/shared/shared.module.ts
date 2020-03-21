import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RatingComponent } from './rating/rating.component';
import { NgModule } from '@angular/core';
import { RadioComponent } from './radio/radio.component';
import { SnackbarComponent } from './messages/snackbar/snackbar.component';



@NgModule({
    declarations:[RadioComponent,
                  RatingComponent,
                  SnackbarComponent
    ],
    imports: [CommonModule, FormsModule,
              ReactiveFormsModule
    ],
    exports: [RadioComponent, RatingComponent,
              CommonModule, FormsModule,
              ReactiveFormsModule,SnackbarComponent
    ]
})
export class SharedModule {

}