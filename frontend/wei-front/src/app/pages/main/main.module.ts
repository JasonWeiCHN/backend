import { NgModule } from '@angular/core';
import { HeaderComponent } from './shared/components/header/header.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import {RouterLink} from "@angular/router";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [HeaderComponent, SidebarComponent],
  imports: [
    CommonModule,
    RouterLink
  ],
  providers: [],
  exports: [
    HeaderComponent,
    SidebarComponent
  ]
})
export class MainModule {}
