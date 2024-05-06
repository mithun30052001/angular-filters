import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppSidebarComponent } from './app-sidebar/app-sidebar.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { LocationComponent } from './location/app-location.component';
import { JobsListingComponent } from './jobs-listing/jobs-listing.component';
import { ReferralsComponent } from './referrals/referrals.component';
import { MainComponent } from './main-component/main-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SearchBoxComponent } from './search-box/search-box.component';
import { MatIconModule } from '@angular/material/icon';
import { TimingsComponent } from './timings/timings.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AppSidebarComponent,
    JobsListingComponent,
    ReferralsComponent,
    LocationComponent,
    MenuListComponent,
    MainComponent,
    SearchBoxComponent,
    TimingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatRadioModule,
    MatPaginatorModule,
    FormsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
