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
import { FormTestComponent } from './components/form-test/form-test.component';
import { ActionsTestComponent } from './components/actions-test/actions-test.component';

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
    ActionsTestComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'filter-test', component: FilterTestComponent },
      { path: 'actions-test', component: ActionsTestComponent },
      { path: 'actions-test/:id', component: FormTestComponent },
    ])
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
