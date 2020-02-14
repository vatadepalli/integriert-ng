import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule, MatProgressSpinnerModule, MatIconModule, MatSidenavModule } from '@angular/material';

const Material = [
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatSidenavModule
];

@NgModule({
  imports: [
    Material
  ],
  exports: [
    Material
  ]
})
export class MaterialModule { }
