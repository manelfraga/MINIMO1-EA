import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocationService } from '../services/location.service';
import { Router } from '@angular/router';
import { Location } from '../model/location';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  locations: Location[];

  constructor(public locationService: LocationService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.locationService.getLocations().subscribe (location => {
      this.locations = location;
    });
  }

  newLocation() {
    this.router.navigateByUrl('/newLocation');
  }

  

}
