import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './pages/layout/sidebar/sidebar.component';
import { HeaderComponent } from './pages/layout/header/header.component';
import { MainComponent } from './pages/layout/main/main.component';
import { HelperService } from './util/helper.service';
import { OverviewComponent } from './pages/overview/overview.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { ApiService } from './util/api.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    MainComponent,
    OverviewComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgChartsModule,
    NgxPaginationModule
  ],
  providers: [HelperService,ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
