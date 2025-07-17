import { Routes } from '@angular/router';
import { SnakeGame } from './components/snake-game/snake-game';

export const routes: Routes = [
  { path: 'snake', component: SnakeGame },
  { path: '', redirectTo: '#home', pathMatch: 'full' }
];
