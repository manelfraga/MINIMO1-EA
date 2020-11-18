import { AdminComponent } from './admin/admin.component';
import { StudentsComponent } from './students/students.component';
import { StudentFormComponent } from './student-form/student-form.component';

import { LocationFormComponent } from './location-form/location-form.component';
import { LocationsComponent } from './locations/locations.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/admin' },
  { path: 'admin', component: AdminComponent},
  { path: 'students', component: StudentsComponent},
  
  { path: 'location', component: LocationsComponent},
  { path: 'subjects/add/:subjectName', component: StudentFormComponent},
  
  { path: 'newStudent', component: StudentFormComponent},
  { path: 'newLocation', component: LocationFormComponent},
  { path: 'updateLocation', component: LocationFormComponent},
  { path: 'newStudent/:subjectName', component: StudentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
