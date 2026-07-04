import { Routes } from '@angular/router';

import { Doctor } from './components/feature/doctor/doctor';
import { DoctorList } from './components/feature/doctor-list/doctor-list';
import { DoctorDepartment } from './components/feature/doctor-department/doctor-department';

export const routes: Routes = [

  {
    path: 'doctor-departments',
    component: DoctorDepartment
  },
  {
    path: 'doctor/create',
    component: Doctor
  },
  {
    path: 'doctor/edit/:id',
    component: Doctor
  },
  {
    path: 'doctor',
    component: DoctorList
  }

];
