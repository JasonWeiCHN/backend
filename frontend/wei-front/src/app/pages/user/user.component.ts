import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UserHttpService } from './shared/services/user.http.service';

export interface tableElement {
  name: string;
  position: string;
  email: string;
  phone: string;
  creationTime: string;
}

// const ELEMENT_DATA: tableElement[] = [
//   { position: 1, name: 'Hydrogen', email: 1.0079, phone: 'H' },
//   { position: 2, name: 'Helium', email: 4.0026, phone: 'He' },
//   { position: 3, name: 'Lithium', email: 6.941, phone: 'Li' },
//   { position: 4, name: 'Beryllium', email: 9.0122, phone: 'Be' },
//   { position: 5, name: 'Boron', email: 10.811, phone: 'B' },
//   { position: 6, name: 'Carbon', email: 12.0107, phone: 'C' },
//   { position: 7, name: 'Nitrogen', email: 14.0067, phone: 'N' },
//   { position: 8, name: 'Oxygen', email: 15.9994, phone: 'O' },
//   { position: 9, name: 'Fluorine', email: 18.9984, phone: 'F' },
//   { position: 10, name: 'Neon', email: 20.1797, phone: 'Ne' },
// ];

@Component({
  selector: 'wei-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [UserHttpService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent implements OnInit {
  public displayedColumns: string[] = ['position', 'name', 'phone', 'email', 'creationTime'];
  // dataSource = ELEMENT_DATA;
  public dataSource: tableElement[] = [];

  constructor(private readonly _changeDetectorRef: ChangeDetectorRef, private userHttpService: UserHttpService) {}

  public ngOnInit(): void {
    this.userHttpService.getUsers().subscribe(users => {
      if (users) {
        const _dataSource: tableElement[] = [];
        users.forEach((item, index) => {
          _dataSource.push({
            ...item,
            position: `${index + 1}`,
          });
        });

        this.dataSource = _dataSource;
        console.log(this.dataSource);
        this._changeDetectorRef.markForCheck();
      }
    });
  }
}
