import { NgModule } from '@angular/core';
import { Routes, RouterModule, } from '@angular/router';
import { TopBarComponent } from './top-bar/top-bar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ResourcePageComponent } from './resource-page/resource-page.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent},
  { path: 'registration', component: RegistrationComponent},
  { path: 'resource', component: ResourcePageComponent},
  { path: 'resource/:id', redirectTo: '/resource', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
