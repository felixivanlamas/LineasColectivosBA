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
    RegisterComponent
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
