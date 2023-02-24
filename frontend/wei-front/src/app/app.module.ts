import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule],
  declarations: [AppComponent, NxWelcomeComponent],
})
export class AppModule {}
