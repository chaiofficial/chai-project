import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Shared components
import * as components from '@app/components';

@NgModule({
  declarations: [
    ...components.CommonComponents,
  ],
  imports: [
    CommonModule,
  ]
})
export class SharedModule { }
