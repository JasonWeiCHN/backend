import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnackbarService } from './shared/services/snackbar.service';

@NgModule({
  imports: [CommonModule],
  providers: [SnackbarService]
})
export class SnackbarModule {
}
