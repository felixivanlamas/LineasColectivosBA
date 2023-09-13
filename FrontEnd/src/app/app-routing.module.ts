import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LineasComponent } from './components/lineas/lineas.component';
import { ChoferesComponent } from './components/choferes/choferes.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: '/choferes', pathMatch: 'full'},
  { path: 'lineas', component: LineasComponent},
  { path: 'choferes', component: ChoferesComponent},
  { path: '**', redirectTo: '/choferes', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
