import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { KeyboardManegerDirective } from "./keyboard-maneger.directive";

@NgModule({
  declarations: [KeyboardManegerDirective],
  imports: [CommonModule],
  exports: [KeyboardManegerDirective]
})
export class keyboardManagerModule {}
