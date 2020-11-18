import { LocationService } from './../services/location.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-location-form',
  templateUrl: './location-form.component.html',
  styleUrls: ['./location-form.component.css']
})
export class LocationFormComponent implements OnInit {
  LocationForm: FormGroup;
  isSubmitted = false;
  

  constructor( public locationService: LocationService, private router: Router, 
              private formBuilder: FormBuilder, private route: ActivatedRoute){ }

  

  ngOnInit(): void {
    this.LocationForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.nullValidator]],
      estado: ['', [Validators.required, Validators.nullValidator]],
      densidad: ['', [Validators.required, Validators.nullValidator]],
      latitud: ['', [Validators.required, Validators.nullValidator]],
      longitud: ['', [Validators.required, Validators.nullValidator]]
    });
  }
  get formControls(){
    return this.LocationForm.controls;
  }
  submitLocation(): void {
    this.isSubmitted = true;
    if(this.LocationForm.invalid){
      return;
    }
    const nombre = this.LocationForm.value.nombre;
    const estado = this.LocationForm.value.estado;
    const densidad = this.LocationForm.value.densidad;
    const latitud = this.LocationForm.value.latitud;
    const longitud = this.LocationForm.value.longitud;

    let location = {'nombre': nombre, 'estado': estado, 'densidad': densidad, 'latitud':latitud, 'longitud':longitud};
    console.log("NEW LOCATION: ", location);
  
      this.locationService.newLocation(location)
      .subscribe(() => {
        this.router.navigateByUrl('/location');
      });
    
  }
  

}
