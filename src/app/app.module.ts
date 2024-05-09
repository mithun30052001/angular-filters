import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppSidebarComponent } from './app-sidebar/app-sidebar.component';
import { MenuListComponent } from './menu-list/menu-list.component';
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
import { FormsModule } from '@angular/forms';
import { AppFiltersComponent } from './app-filters/app-filters.component';
import { FilterConsumerContainerComponent } from './filter-consumer-container/filter-consumer-container.component';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    AppSidebarComponent,
    JobsListingComponent,
    ReferralsComponent,
    MenuListComponent,
    MainComponent,
    SearchBoxComponent,
    AppFiltersComponent,
    FilterConsumerContainerComponent,
    PaginationComponent
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
