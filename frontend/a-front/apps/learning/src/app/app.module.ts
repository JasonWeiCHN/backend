import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { NxWelcomeComponent } from './nx-welcome.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import {CustomInputComponent} from "./components/custom-input/custom-input.component";
import {FormlyCustomInputTypeComponent} from "./components/custom-input/formly-custom-input-type.component";

@NgModule({
  declarations: [FormlyCustomInputTypeComponent, AppComponent, NxWelcomeComponent, CustomInputComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {initialNavigation: 'enabledBlocking'}),
    ReactiveFormsModule,
    FormlyModule.forRoot(
      {
        types: [
          { name: 'custom-input', component: FormlyCustomInputTypeComponent },
        ],
      }
    ),
    FormlyBootstrapModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [CustomInputComponent],
})
export class AppModule {}
