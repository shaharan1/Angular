import { Routes } from '@angular/router';
import { Home } from './components/shared/layout/home/home';

export const routes: Routes = [


 { path: '', component: Home },

 {
        path: 'dashboard',
        component: Home,
        title: 'Dashboard - Modern Hospital Management System Angular',
    },

];
