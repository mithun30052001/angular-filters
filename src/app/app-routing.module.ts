import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobsListingComponent } from './jobs-listing/jobs-listing.component';
import { ReferralsComponent } from './referrals/referrals.component';


const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'jobs', component: JobsListingComponent },
      { path: 'referrals', component: ReferralsComponent }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
