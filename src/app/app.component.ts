import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  FormBuilderTypeSafe,
  FormGroupTypeSafe,
} from 'angular-typesafe-reactive-forms-helper';

type UserInfoFormModel = {
  firstName: string;
  lastName: string;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-forms-coverage-error';

  userInfoForm!: FormGroupTypeSafe<UserInfoFormModel>;

  constructor(private fb: FormBuilderTypeSafe) {}

  ngOnInit(): void {
    this.userInfoForm = this.fb.group<UserInfoFormModel>({
      firstName: new FormControl(null),
      lastName: new FormControl(null),
    });
  }

  get fullNameWithGetSafe(): string {
    const first = this.userInfoForm.getSafe((f) => f.firstName)?.value;
    const last = this.userInfoForm.getSafe((f) => f.lastName)?.value;
    return `${first} ${last}`.trim();
  }

  get fullNameWithControls(): string {
    const first = this.userInfoForm.controls.firstName.value;
    const last = this.userInfoForm.controls.lastName.value;
    return `${first} ${last}`.trim();
  }
}
