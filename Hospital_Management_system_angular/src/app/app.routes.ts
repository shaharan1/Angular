import { Routes } from '@angular/router';

import { Doctor } from './components/feature/doctor/doctor';
import { DoctorList } from './components/feature/doctor-list/doctor-list';
import { DoctorDepartment } from './components/feature/doctor-department/doctor-department';
import { Nurse } from './components/feature/nurse/nurse';
import { NurseList } from './components/feature/nurse-list/nurse-list';
import { OfficeStaffComponent } from './components/feature/office-staff.component/office-staff.component';
import { OfficeStaffList } from './components/feature/office-staff-list.component/office-staff-list.component';

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

   {
    path: 'office-staff/create',
    component: OfficeStaffComponent
  },
   {
    path: 'office-staff/edit/:id',
    component: OfficeStaffComponent
  },

   {
    path: 'office-staff',
    component: OfficeStaffList
  },


];
