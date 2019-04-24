import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {
  MatIconModule,
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatPaginatorModule,
  MatTableModule,
  MatSortModule,
  MatDialogModule,
  MatSnackBarModule,
  MatStepperModule,
  MatToolbarModule,
  MatMenuModule,
  MatAutocompleteModule,
  MatTooltipModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatExpansionModule,
  MatNativeDateModule,
  MatTabsModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatButtonToggleModule,
  MatTreeModule, MatDatepickerModule, MatFormFieldModule
} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  imports: [MatIconModule, MatPaginatorModule, MatTableModule, MatButtonModule, MatCheckboxModule, MatInputModule, MatButtonToggleModule,
    CdkTableModule, MatSortModule, MatDialogModule, MatSnackBarModule, MatStepperModule, MatToolbarModule, MatMenuModule,
    MatTooltipModule, MatSelectModule, MatSlideToggleModule, MatExpansionModule, MatNativeDateModule, MatRadioModule,
    MatTabsModule, MatListModule, MatAutocompleteModule, MatProgressSpinnerModule, MatTreeModule,
    MatDatepickerModule, MatFormFieldModule, FormsModule],
  exports: [MatIconModule, MatPaginatorModule, MatTableModule, MatButtonModule, MatCheckboxModule, MatInputModule, MatButtonToggleModule,
    CdkTableModule, MatSortModule, MatDialogModule, MatSnackBarModule, MatStepperModule, MatToolbarModule, MatMenuModule,
    MatTooltipModule, MatSelectModule, MatSlideToggleModule, MatExpansionModule, MatNativeDateModule, MatRadioModule,
    MatTabsModule, MatListModule, MatAutocompleteModule, MatProgressSpinnerModule, MatTreeModule, DragDropModule,
    MatDatepickerModule, MatFormFieldModule, FormsModule],
  providers: [
  ]
})
export class MaterialModule {
}

