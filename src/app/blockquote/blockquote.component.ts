import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'storybook-blockquote-component',
  template: `<blockquote>{{text}}</blockquote>`,
  styles: [
    `blockquote {color:red}`
  ],
})
export class Blockquote {
  @Input() text = '';
}
