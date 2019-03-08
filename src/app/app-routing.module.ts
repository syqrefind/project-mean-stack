import { NgModule } from '@angular/core';
import { Routes, RouterModule, } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ResourcePageComponent } from './resource-page/resource-page.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { FormulaPageComponent } from './formula-page/formula-page.component';
import { AuthGuard } from './auth.guard';
// import { CanActivate } from '@angular/router';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent},
  { path: 'registration', component: RegistrationComponent},
  { path: 'resource', component: ResourcePageComponent, canActivate: [AuthGuard]},
  { path: 'resource/:id', redirectTo: '/resource', pathMatch: 'full'},
  { path: 'project', component: ProjectPageComponent, canActivate: [AuthGuard]},
  { path: 'formula', component: FormulaPageComponent, canActivate: [AuthGuard]},
  { path: '**', component: PageNotFoundComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }


// /src/utils/preactivation