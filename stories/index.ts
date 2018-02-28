import { storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/angular';

import { ButtonComponent } from '../src/app/button/button.component';

storiesOf('Button', module)
.add('w/ emoji1', () => ({component: ButtonComponent, props:{text: '😀'}}))
.add('w/ emoji2', () => ({component: ButtonComponent, props:{text: 'OKAY'}}))
.add('w/ emoji4', () => ({component: ButtonComponent, props:{text: '💯'}}))
.add('w/ emoji5', () => ({component: ButtonComponent,props: {text: '😀 😎 👍 💯',click: action('clicked')}}))

