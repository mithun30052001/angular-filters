import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppSidebarComponent } from './app-sidebar/app-sidebar.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { BelowMenuComponent } from './below-menu/below-menu.component';
import { JobsListingComponent } from './jobs-listing/jobs-listing.component';
import { ReferralsComponent } from './referrals/referrals.component';
import { MainComponent } from './main-component/main-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [
    AppComponent,
    AppSidebarComponent,
    JobsListingComponent,
    ReferralsComponent,
    BelowMenuComponent,
    MenuListComponent,
    MainComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
