import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Location } from '../model/location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) { }

  getLocations(){
    return this.http.get<Location[]>(environment.apiURL+'/location/all')
  }

  newLocation(newLocation: Location){
    return this.http.post(environment.apiURL + '/location/new', newLocation);
  }
  updateLocation(newLocation: Location){
    return this.http.post(environment.apiURL + '/location/new', newLocation);
  }

}
