import { Routes } from '@angular/router';

import { Doctor } from './components/feature/doctor/doctor';
import { DoctorList } from './components/feature/doctor-list/doctor-list';
import { DoctorDepartment } from './components/feature/doctor-department/doctor-department';
import { Nurse } from './components/feature/nurse/nurse';
import { NurseList } from './components/feature/nurse-list/nurse-list';

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
  },

   {
    path: 'nurses/create',
    component:Nurse
  },

   {
    path: 'nurses',
    component: NurseList
  },


];
