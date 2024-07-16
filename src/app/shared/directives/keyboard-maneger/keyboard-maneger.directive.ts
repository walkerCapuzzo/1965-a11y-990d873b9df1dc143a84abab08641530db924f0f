import {
  ContentChildren,
  Directive,
  HostListener,
  QueryList,
} from '@angular/core';
import { KeyboardManegedItemDirective } from './keyboard-managed-item.directive';

@Directive({
  selector: '[appkm]',
})
export class KeyboardManegerDirective {

  @ContentChildren(KeyboardManegedItemDirective)
  public items: QueryList<KeyboardManegedItemDirective> = null;

  @HostListener('keyup', ['$event'])
  public manageKeys(event: KeyboardEvent): void {
    switch (event.key) {
      case 'ArrowUp':
        console.log('up');
        this.moveFocus(ArrowDirection.RIGHT).focus();
        break;
      case 'ArrowDown':
        console.log('down');
        this.moveFocus(ArrowDirection.LEFT).focus();

        break;
      case 'ArrowLeft':
        console.log('left');
        this.moveFocus(ArrowDirection.LEFT).focus();

        break;
      case 'ArrowRight':
        console.log('right');
        this.moveFocus(ArrowDirection.RIGHT).focus();

        break;
    }
  }

  public moveFocus(direcion: ArrowDirection): KeyboardManegedItemDirective {
    const items = this.items.toArray();
    const curentSelectedIndex = items.findIndex(item => item.isFocused());
    const targetElementFocus = items[curentSelectedIndex + direcion];
    if(targetElementFocus) {
      return targetElementFocus;
    }
    return direcion ===ArrowDirection.LEFT
      ? items[items.length -1]
      : items[0];
  }
}


enum ArrowDirection{
  LEFT = -1,
  RIGHT = 1
}
