import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProjectSwitcher } from './shared/project-switcher.interface';

@Component({
  selector: 'w-project-switcher',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-switcher.component.html',
  styleUrl: './project-switcher.component.scss'
})
export class ProjectSwitcherComponent {
  @Input() selectedProject: IProjectSwitcher | undefined = undefined;
  @Input() projects: IProjectSwitcher[] = [];
  @Output() projectSelected: EventEmitter<IProjectSwitcher> = new EventEmitter<IProjectSwitcher>();

  selectProject(project: IProjectSwitcher) {
    this.selectedProject = project;
    this.projectSelected.emit(project);
  }
}
