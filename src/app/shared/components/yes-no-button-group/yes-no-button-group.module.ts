import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YesNoButtonGroupComponent } from './yes-no-button-group.component';
import { keyboardManagerModule } from '../../directives/keyboard-maneger/keyboard-maneger.module';



@NgModule({
  declarations: [YesNoButtonGroupComponent],
  imports: [
    CommonModule,
    keyboardManagerModule
  ],
  exports: [YesNoButtonGroupComponent]
})
export class YesNoButtonGroupModule { }
