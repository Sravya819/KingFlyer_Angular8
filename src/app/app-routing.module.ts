import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookflightComponent } from './bookflight/bookflight.component';
import { CovidComponent } from './covid/covid.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UpdatesComponent } from './updates/updates.component';
import { ViewflightsComponent } from './viewflights/viewflights.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [{path : '', redirectTo : '/dashboard', 'pathMatch' : 'full'},
{path : 'dashboard', component : DashboardComponent},
{path : 'welcome', component : WelcomeComponent},
{path : 'updates', component : UpdatesComponent},
{path : 'covid', component : CovidComponent},
{path : 'login', component : LoginComponent},
{path : 'register', component : RegisterComponent},
{path : 'viewflights', component : ViewflightsComponent},
{path : 'bookflight', component : BookflightComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
