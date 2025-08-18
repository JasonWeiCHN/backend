import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReleaseNote, releaseNotes } from './release-notes.data';

@Component({
  selector: 'app-release-notes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './release-notes.component.html',
  styleUrls: ['./release-notes.component.scss'],
})
export class ReleaseNotesComponent {
  notes: ReleaseNote[] = releaseNotes;
}
