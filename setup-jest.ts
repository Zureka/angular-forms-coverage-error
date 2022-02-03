import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';
import 'jest-preset-angular/setup-jest';
import { Shallow } from 'shallow-render';

beforeEach(() => {
  Shallow.alwaysReplaceModule(BrowserAnimationsModule, NoopAnimationsModule);
});
