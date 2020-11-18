import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StudentCardComponent } from './student-card/student-card.component';

//formulario reactivo
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentsComponent } from './students/students.component';
import { AdminComponent } from './admin/admin.component';
import { LocationCardComponent } from './location-card/location-card.component';
import { LocationFormComponent } from './location-form/location-form.component';
import { LocationsComponent } from './locations/locations.component';


@NgModule({
  declarations: [
    AppComponent,
    
    StudentCardComponent,
   
    StudentFormComponent,
    StudentsComponent,
    AdminComponent,
    LocationCardComponent,
    LocationFormComponent,
    LocationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
