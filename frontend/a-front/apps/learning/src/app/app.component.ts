import {Component} from "@angular/core";
import {FormGroup} from "@angular/forms";
import {FormlyFieldConfig} from "@ngx-formly/core";

@Component({
  selector: "a-front-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  public title = "learning";

  form = new FormGroup({});
  model = {email: 'email@gmail.com'};
  fields: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'input',
      props: {
        label: 'Email address',
        placeholder: 'Enter email',
        required: true,
      },
      hooks: {
        onInit: (field: FormlyFieldConfig) => {
          console.log('onInit');
          console.log(field);
        },
        onChanges: (field: FormlyFieldConfig) => {
          console.log('onChanges');
          console.log(field.model.email);
        }
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
        required: false,
      },
      expressions: {
        'props.disabled': '!model.name',
      },
    },
    {
      key: 'Radio',
      type: 'radio',
      props: {
        label: 'Radio',
        placeholder: 'Placeholder',
        description: 'Description',
        required: true,
        options: [
          { value: 1, label: 'Option 1' },
          { value: 2, label: 'Option 2' },
          { value: 3, label: 'Option 3' },
          { value: 4, label: 'Option 4', disabled: true },
        ],
      },
    },
    {
      key: 'custom-input',
      type: 'custom-input',
    }
  ];

  onSubmit(model: any) {
    console.log(model);
  }
}
