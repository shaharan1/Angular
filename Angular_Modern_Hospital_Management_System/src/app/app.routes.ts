import { Routes } from '@angular/router';
import { HomeComponent } from './components/shared/layout/home/home';

export const routes: Routes = [

    {
        path: '',
        component: HomeComponent,
        children: [
            { path: '', component: HomeComponent },
        ]
    },
];
