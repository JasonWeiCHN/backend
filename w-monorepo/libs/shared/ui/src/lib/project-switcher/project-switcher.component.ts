import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ISwitcherProject } from './shared/project-switcher.interface';

@Component({
  selector: 'w-project-switcher',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-switcher.component.html',
  styleUrl: './project-switcher.component.scss'
})
export class ProjectSwitcherComponent {
  @Input() selectedProject: ISwitcherProject | undefined = undefined;
  @Input() projects: ISwitcherProject[] = [];
  @Output() projectSelected: EventEmitter<ISwitcherProject> = new EventEmitter<ISwitcherProject>();

  selectProject(project: ISwitcherProject) {
    this.selectedProject = project;
    this.projectSelected.emit(project);
  }
}
