import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './components/shared/shared.module'

//Components
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './components/login/login.component';
import { LineasComponent } from './components/lineas/lineas.component';
import { ColectivosComponent } from './components/colectivos/colectivos.component';
import { ChoferesComponent } from './components/choferes/choferes.component';
import { ParadasComponent } from './components/paradas/paradas.component';
import { RecorridosComponent } from './components/recorridos/recorridos.component';
import { RegisterComponent } from './components/register/register.component';
import { LineasEditComponent } from './components/lineas/lineas-list/lineas-edit/lineas-edit.component';
import { LineasListComponent } from './components/lineas/lineas-list/lineas-list.component';
import { ColectivosListComponent } from './components/colectivos/colectivos-list/colectivos-list.component';
import { ColectivosEditComponent } from './components/colectivos/colectivos-list/colectivos-edit/colectivos-edit.component';
import { ChoferesListComponent } from './components/choferes/choferes-list/choferes-list.component';
import { ChoferesEditComponent } from './components/choferes/choferes-edit/choferes-edit.component';
import { ParadasListComponent } from './components/paradas/paradas-list/paradas-list.component';
import { ParadasEditComponent } from './components/paradas/paradas-list/paradas-edit/paradas-edit.component';
import { RecorridosListComponent } from './components/recorridos/recorridos-list/recorridos-list.component';
import { RecorridosEditComponent } from './components/recorridos/recorridos-list/recorridos-edit/recorridos-edit.component';
import { ChoferesCreateComponent } from './components/choferes/choferes-create/choferes-create.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    LineasComponent,
    ColectivosComponent,
    ChoferesComponent,
    ParadasComponent,
    RecorridosComponent,
    RegisterComponent,
    LineasEditComponent,
    LineasListComponent,
    ColectivosListComponent,
    ColectivosEditComponent,
    ChoferesListComponent,
    ChoferesEditComponent,
    ParadasListComponent,
    ParadasEditComponent,
    RecorridosListComponent,
    RecorridosEditComponent,
    ChoferesCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
