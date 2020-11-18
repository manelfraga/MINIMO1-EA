import { LocationService } from './../services/location.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Location } from '../model/location';

@Component({
  selector: 'app-location-card',
  templateUrl: './location-card.component.html',
  styleUrls: ['./location-card.component.css']
})
export class LocationCardComponent implements OnInit {

  constructor(public locationService: LocationService, private router: Router, private route: ActivatedRoute) { }

  @Input()
  location: Location;

  @Input()
  index: number;

  ngOnInit(): void {
  }

}
