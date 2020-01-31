import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { TestComponent } from './components/test/test.component';
import { FilterComponent } from './components/filter/filter.component';
import { FilterTestComponent } from './components/filter-test/filter-test.component';
import { TestService } from './services/Test.Service';
import { UserService } from './services/user.service';
import { FormTestComponent } from './components/form-test/form-test.component';
import { ActionsTestComponent } from './components/actions-test/actions-test.component';
import { LoginComponent } from './components/login/login.component';
import { LoginErrorComponent } from './components/login-error/login-error.component';
import { PermissionErrorComponent } from './components/permission-error/permission-error.component';

import { SecurityGuard } from './guards/security.guard';
import { WelcomeComponent } from './components/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    TestComponent,
    FilterComponent,
    FilterTestComponent,
    FormTestComponent,
    ActionsTestComponent,
    LoginComponent,
    LoginErrorComponent,
    PermissionErrorComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full', canActivate: [SecurityGuard] },
      { path: 'counter', component: CounterComponent, canActivate: [SecurityGuard] },
      { path: 'fetch-data', component: FetchDataComponent, canActivate: [SecurityGuard] },
      { path: 'filter-test', component: FilterTestComponent, canActivate: [SecurityGuard] },
      { path: 'actions-test', component: ActionsTestComponent, canActivate: [SecurityGuard] },
      { path: 'actions-test/:id', component: FormTestComponent, canActivate: [SecurityGuard] },
      { path: 'login', component: LoginComponent },
      { path: 'login-error', component: LoginErrorComponent },
      { path: 'permission-error', component: PermissionErrorComponent },
      { path: 'welcome', component: WelcomeComponent },
    ])
  ],
  providers: [TestService, UserService, SecurityGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
