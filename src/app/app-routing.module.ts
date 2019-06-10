import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NotAuthGuardService} from './services/not-auth-guard-service/not-auth-guard.service';
import {AuthService} from './services/auth-service/auth.service';
import {AuthGuardService} from './services/auth-guard-service/auth-guard.service';

const routes: Routes = [
  {path: '', redirectTo: '/map', pathMatch: 'full'},
  {path: 'login', loadChildren: './pages/login/login.module#LoginModule', canActivate: [NotAuthGuardService]},
  {path: '', loadChildren: './pages/main-container/main-container.module#MainContainerModule', canActivate: [AuthGuardService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
