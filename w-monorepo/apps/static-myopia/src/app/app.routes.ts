import { Route } from '@angular/router';
import { ExperienceComponent } from './pages/experience/experience.component';
import { EquipmentComponent } from './pages/equipment/equipment.component';
import { KnowledgeComponent } from './pages/knowledge/knowledge.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: KnowledgeComponent,
  },
  {
    path: 'knowledge',
    component: KnowledgeComponent,
  },
  {
    path: 'experience',
    component: ExperienceComponent,
  },
  {
    path: 'equipment',
    component: EquipmentComponent,
  },
];
