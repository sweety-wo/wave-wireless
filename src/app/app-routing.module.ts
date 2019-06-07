import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'login', loadChildren: './pages/login/login.module#LoginModule'},
  {path: '', loadChildren: './pages/main-container/main-container.module#MainContainerModule'},
  // {path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
