import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ChartTestComponent } from './components/chart-test/chart-test.component';
import { OktaCallbackComponent } from '@okta/okta-angular';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'bgChart', component: ChartTestComponent },
  { path: 'implicit/callback', component: OktaCallbackComponent },
   // otherwise redirect to home
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
