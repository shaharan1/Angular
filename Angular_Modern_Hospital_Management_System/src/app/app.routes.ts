import { Routes } from '@angular/router';
import { HomeComponent } from './components/shared/layout/home/home';


export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: HomeComponent,
        title: 'Dashboard | MedCore HMS'
    },

    //   // --- Care ---
    //   {
    //     path: 'patients',
    //     loadComponent: () =>
    //       import('./patients/patients.component').then(m => m.PatientsComponent),
    //     title: 'Patients | MedCore HMS'
    //   },
    //   {
    //     path: 'appointments',
    //     loadComponent: () =>
    //       import('./appointments/appointments.component').then(m => m.AppointmentsComponent),
    //     title: 'Appointments | MedCore HMS'
    //   },
    //   {
    //     path: 'doctors',
    //     loadComponent: () =>
    //       import('./doctors/doctors.component').then(m => m.DoctorsComponent),
    //     title: 'Doctors | MedCore HMS'
    //   },
    //   {
    //     path: 'wards',
    //     loadComponent: () =>
    //       import('./wards/wards.component').then(m => m.WardsComponent),
    //     title: 'Wards & Beds | MedCore HMS'
    //   },

    //   // --- Operations ---
    //   {
    //     path: 'pharmacy',
    //     loadComponent: () =>
    //       import('./pharmacy/pharmacy.component').then(m => m.PharmacyComponent),
    //     title: 'Pharmacy | MedCore HMS'
    //   },
    //   {
    //     path: 'laboratory',
    //     loadComponent: () =>
    //       import('./laboratory/laboratory.component').then(m => m.LaboratoryComponent),
    //     title: 'Laboratory | MedCore HMS'
    //   },
    //   {
    //     path: 'billing',
    //     loadComponent: () =>
    //       import('./billing/billing.component').then(m => m.BillingComponent),
    //     title: 'Billing | MedCore HMS'
    //   },
    //   {
    //     path: 'reports',
    //     loadComponent: () =>
    //       import('./reports/reports.component').then(m => m.ReportsComponent),
    //     title: 'Reports | MedCore HMS'
    //   },

    //   // --- Account ---
    //   {
    //     path: 'profile',
    //     loadComponent: () =>
    //       import('./profile/profile.component').then(m => m.ProfileComponent),
    //     title: 'My Profile | MedCore HMS'
    //   },
    //   {
    //     path: 'settings',
    //     loadComponent: () =>
    //       import('./settings/settings.component').then(m => m.SettingsComponent),
    //     title: 'Settings | MedCore HMS'
    //   },
    //   {
    //     path: 'logout',
    //     loadComponent: () =>
    //       import('./auth/logout.component').then(m => m.LogoutComponent),
    //     title: 'Signing Out | MedCore HMS'
    //   },

    // --- Fallback ---
    {
        path: '**',
        redirectTo: 'dashboard'
    }
];