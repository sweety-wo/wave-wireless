import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NotAuthGuardService} from './services/custom/not-auth-guard-service/not-auth-guard.service';
import {AuthGuardService} from './services/custom/auth-guard-service/auth-guard.service';

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
