import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class SnackbarService {
  private snackbarSubject = new Subject<string>();
  snackbarState = this.snackbarSubject.asObservable();

  public show(message: string) {
    this.snackbarSubject.next(message);
  }
}
