import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CadAndamentoComponent } from './components/cad-andamento/cad-andamento.component';
import { CustosComponent } from './components/cad-custos/custos.component';
import { CadServicesComponent } from './components/cad-andamento/cad-services/cad-services.component';
import { GestaoCustosComponent } from './components/gestao-custos/gestao-custos.component';
import { GestaoFluxoComponent } from './components/gestao-fluxo/gestao-fluxo.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
{
  path:'', component: HomeComponent
},
{
  path:'cadAndamento', component: CadAndamentoComponent
},
{
  path:'cadCustos', component: CustosComponent
},
{
  path:'fluxoCaixa', component: GestaoCustosComponent
},
{
  path:'gestaoFluxo', component: GestaoFluxoComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
