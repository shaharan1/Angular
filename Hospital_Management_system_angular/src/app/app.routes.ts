import { Routes } from '@angular/router';

import { Doctor } from './components/feature/doctor/doctor';
import { DoctorList } from './components/feature/doctor-list/doctor-list';
import { DoctorDepartment } from './components/feature/doctor-department/doctor-department';
import { Nurse } from './components/feature/nurse/nurse';
import { NurseList } from './components/feature/nurse-list/nurse-list';
import { OfficeStaffComponent } from './components/feature/office-staff.component/office-staff.component';
import { OfficeStaffList } from './components/feature/office-staff-list.component/office-staff-list.component';
import { ScheduleSlotComponent } from './components/feature/schedule-slot.component/schedule-slot.component';
import { AppointmentList } from './components/feature/appointment-list.component/appointment-list.component';
import { AppointmentComponent } from './components/feature/appointment.component/appointment.component';
import { AppointmentSlip } from './components/feature/appointment-slip/appointment-slip';
import { MedicineComponent } from './components/feature/medicine.component/medicine.component';
import { MedicineListComponent } from './components/feature/medicine-list.component/medicine-list.component';
import { Generic } from './components/feature/generic/generic';
import { GenericListComponent } from './components/feature/generic-list/generic-list';

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
    component: Nurse
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

  // Schedule Slot
  {
    path: 'schedule-slot',
    component: ScheduleSlotComponent
  },


  // ===========================
  // Appointment
  // ===========================
  {
    path: 'appointments',
    component: AppointmentComponent
  },
  {
    path: 'appointment-list',
    component: AppointmentList
  },

  {
    path: 'appointments/create',
    component: AppointmentComponent
  },
  {
    path: 'appointments/edit/:id',
    component: AppointmentComponent
  },


  {
    path: 'appointment-slip',
    component: AppointmentSlip
  },

  // Medicine
  {
    path: 'medicines/create',
    component: MedicineComponent
  },

  {
    path: 'medicine-list',
    component: MedicineListComponent
  },

  {
    path: 'medicine/:id',
    component: MedicineComponent
  },

  {
  path: 'generics',
  component: Generic
},
{
  path: 'generic-list',
  component: GenericListComponent
}





];
