import { Routes } from '@angular/router';
import { ProTrainingComponent } from './pages/pro-training/pro-training.component';

export const routes: Routes = [
  { path: '', redirectTo: 'protraining', pathMatch: 'full' },
  { path: 'protraining', component: ProTrainingComponent },
  { path: '**', component: ProTrainingComponent },
];
