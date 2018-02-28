import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'storybook-button-component',
  template: `<button (click)="onClick.emit($event);">{{text}}</button>`,
  styles: [
    `
        button {
          border: 1px solid #ccc;
          border-radius: 3rem;
          background-color: #eee;
          font-size: 15px;
          padding: 5px 10px;
          margin: 1rem 0;
        }
      `,
  ],
})
export class ButtonComponent {
  @Input() text = '';
  @Output() onClick = new EventEmitter<any>();
}
