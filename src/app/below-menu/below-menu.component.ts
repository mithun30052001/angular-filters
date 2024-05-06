import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-below-menu',
  templateUrl: './below-menu.component.html',
  styleUrls: ['./below-menu.component.scss']
})

export class BelowMenuComponent {
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const location = params['location'];
      if (location) {
        (document.getElementById(location.toLowerCase()) as HTMLInputElement).checked = true;
      }
    });
  }

  updateLocation(event: any) {
    const location = event.target.value;
    this.router.navigate(['/jobs'], { queryParams: { location: location } });
  }
}
