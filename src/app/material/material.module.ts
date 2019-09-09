import { NgModule } from '@angular/core';


import { MatButtonModule, MatTabsModule, MatStepperModule, MatIconModule, MatToolbarModule, MatListModule } from '@angular/material';
import { MatFormFieldModule, MatInputModule, MatCheckboxModule , MatRadioModule, MatSelectModule } from '@angular/material';
import { MatDatepickerModule, MatSidenavModule, MatNativeDateModule } from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import { NgMarqueeModule } from 'ng-marquee';
import {MatExpansionModule} from '@angular/material/expansion'; 
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTableModule} from '@angular/material/table';

const Materialcomponents = [
  MatButtonModule,
  MatTabsModule,
  MatStepperModule,
  MatIconModule,
  MatToolbarModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatInputModule,
  MatCheckboxModule,
  MatSelectModule,
  MatRadioModule,
  MatSelectModule,
  MatDatepickerModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCardModule,
  NgMarqueeModule,
  MatExpansionModule,
  MatProgressSpinnerModule,
  MatListModule,
  MatTableModule
];

@NgModule({

  imports: [ Materialcomponents ],
  exports: [ Materialcomponents ]

})
export class MaterialModule { }
