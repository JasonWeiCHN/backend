import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { UserComponent } from './pages/user/user.component';
import { MatTableModule } from '@angular/material/table';
import {BrowserModule} from "@angular/platform-browser";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";

@NgModule({
  declarations: [AppComponent, UserComponent],
  imports: [RouterModule, MatTableModule,BrowserModule],
  providers: [
    {
      provide: platformBrowserDynamic,
      useValue: platformBrowserDynamic(),
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
