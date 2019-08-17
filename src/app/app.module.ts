import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { OktaAuthModule, OktaCallbackComponent } from '@okta/okta-angular';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChartTestComponent } from './components/chart-test/chart-test.component';
import { DatePipe } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { FilterChartLabelsPipe } from './common/filter-chart-labels.pipe';
import { FilterChartDataPipe } from './common/filter-chart-data.pipe';

const config = {
  // issuer: 'https://dev-589331.okta.com',
  issuer: 'https://dev-589331.okta.com/oauth2/default',
  redirectUri: 'http://localhost:4200/implicit/callback',
  clientId: '0oao19p51NZc06YEC356'
}

@NgModule({
  declarations: [
    AppComponent,
    ChartTestComponent,
    LoginComponent,
    FilterChartLabelsPipe,
    FilterChartDataPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ChartsModule,
    HttpClientModule,
    OktaAuthModule.initAuth(config)
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
