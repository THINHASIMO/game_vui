import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppGameComponent } from './game/game.component';

const routes: Routes = [
  { path: 'game/:id', component: AppGameComponent },
  { path: '', redirectTo: '/game/1', pathMatch: 'full' },
  { path: '**', redirectTo: '/game/1' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
