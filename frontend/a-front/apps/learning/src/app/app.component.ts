import { Component } from "@angular/core";
import {FormGroup} from "@angular/forms";
import {FormlyFieldConfig} from "@ngx-formly/core";

@Component({
  selector: "a-front-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "learning";

  form = new FormGroup({});
  model = { email: 'email@gmail.com' };
  fields: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'input',
      props: {
        label: 'Email address',
        placeholder: 'Enter email',
        required: true,
      }
    },
    {
      key: 'name',
      type: 'input',
      props: {
        label: 'Your name',
        placeholder: 'Enter name',
        required: true,
      }
    },
    {
      key: 'age',
      type: 'number',
      props: {
        label: 'Your age',
        placeholder: 'Enter age',
        required: true,
      }
    }
  ];

  onSubmit(model: any) {
    console.log(model);
  }
}
