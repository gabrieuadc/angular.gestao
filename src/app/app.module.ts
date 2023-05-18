import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import {MatListModule} from '@angular/material/list';
import { CadAndamentoComponent } from './components/cad-andamento/cad-andamento.component';
import { CadServicesComponent } from './components/cad-andamento/cad-services/cad-services.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { CustosComponent } from './components/cad-custos/custos.component';
import { GestaoCustosComponent } from './components/gestao-custos/gestao-custos.component';
import { GestaoFluxoComponent } from './components/gestao-fluxo/gestao-fluxo.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';
import { EditcustoDialogComponent } from './components/cad-custos/editcusto-dialog/editcusto-dialog.component';
import { HomeComponent } from './components/home/home.component';
import { CadcustoDialogComponent } from './components/cad-custos/cadcusto-dialog/cadcusto-dialog.component';










@NgModule({
  declarations: [
    AppComponent,
    CadAndamentoComponent,
    CadServicesComponent,
    CustosComponent,
    GestaoCustosComponent,
    GestaoFluxoComponent,
    EditcustoDialogComponent,
    HomeComponent,
    CadcustoDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatTableModule,
    HttpClientModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatIconModule,
    MatTabsModule,
    MatCardModule,
    MatGridListModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
