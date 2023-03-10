import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { UserComponent } from './pages/user/user.component';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { AddUserComponent } from './pages/user/pages/add-user/add-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddImageComponent } from './pages/image/pages/add-image/add-image.component';
import { AddImageByExcelComponent } from './pages/excel/pages/add-image-by-excel/add-image-by-excel.component';
import { AddGoodComponent } from './pages/good/pages/add-good/add-good.component';
import { AddGoodByDragComponent } from './pages/good/pages/add-good-by-drag/add-good-by-drag.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AddUserComponent,
    AddImageComponent,
    AddImageByExcelComponent,
    AddGoodComponent,
    AddGoodByDragComponent,
  ],
  imports: [
    RouterModule,
    MatTableModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatInputModule,
    MatSnackBarModule,
    MatNativeDateModule,
  ],
  providers: [
    {
      provide: platformBrowserDynamic,
      useValue: platformBrowserDynamic(),
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
