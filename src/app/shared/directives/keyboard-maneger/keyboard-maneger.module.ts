import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeyboardManegerDirective } from './keyboard-maneger.directive';
import { KeyboardManegedItemDirective } from './keyboard-managed-item.directive';

@NgModule({
  declarations: [
    KeyboardManegerDirective,
    KeyboardManegedItemDirective
  ],
  imports: [CommonModule],
  exports: [
    KeyboardManegerDirective,
    KeyboardManegedItemDirective
  ],
})
export class keyboardManagerModule {}
