import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharsComponent } from './components/chars/chars.component';

const routes: Routes = [
  { path: 'characters', component: CharsComponent },
  { path: '**', redirectTo: '/characters' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
