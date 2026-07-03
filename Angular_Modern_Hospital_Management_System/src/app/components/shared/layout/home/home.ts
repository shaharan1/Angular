import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface StatCard {
  label: string;
  value: string;
  delta: string;
  deltaDirection: 'up' | 'down';
  icon: string;
  tone: 'teal' | 'amber' | 'coral' | 'green';
}

interface Appointment {
  patient: string;
  patientId: string;
  doctor: string;
  department: string;
  time: string;
  status: 'confirmed' | 'waiting' | 'urgent';
}

interface DoctorAvailability {
  name: string;
  specialty: string;
  initials: string;
  status: 'available' | 'in-surgery' | 'off-duty';
}

interface QuickAction {
  label: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  welcomeName = 'Dr. Reynolds';

  stats: StatCard[] = [
    { label: 'Total Patients', value: '3,482', delta: '+4.2%', deltaDirection: 'up', icon: 'bi-people', tone: 'teal' },
    { label: "Today's Appointments", value: '128', delta: '+12', deltaDirection: 'up', icon: 'bi-calendar-check', tone: 'amber' },
    { label: 'Available Beds', value: '46 / 210', delta: '-8 today', deltaDirection: 'down', icon: 'bi-hospital', tone: 'green' },
    { label: 'Critical Cases', value: '7', delta: '+2', deltaDirection: 'up', icon: 'bi-heart-pulse', tone: 'coral' }
  ];

  quickActions: QuickAction[] = [
    { label: 'Register Patient', icon: 'bi-person-plus', route: '/patients/new' },
    { label: 'New Appointment', icon: 'bi-calendar-plus', route: '/appointments/new' },
    { label: 'Admit Patient', icon: 'bi-hospital', route: '/wards/admit' },
    { label: 'Generate Bill', icon: 'bi-receipt', route: '/billing/new' }
  ];

  appointments: Appointment[] = [
    { patient: 'Michael Carter', patientId: 'PT-10234', doctor: 'Dr. Alan Wu', department: 'Cardiology', time: '09:00 AM', status: 'confirmed' },
    { patient: 'Elena Vasquez', patientId: 'PT-10235', doctor: 'Dr. Priya Nair', department: 'Orthopedics', time: '09:30 AM', status: 'waiting' },
    { patient: 'James O’Neil', patientId: 'PT-10236', doctor: 'Dr. Sarah Reynolds', department: 'Neurology', time: '10:00 AM', status: 'urgent' },
    { patient: 'Amara Okafor', patientId: 'PT-10237', doctor: 'Dr. Alan Wu', department: 'Cardiology', time: '10:45 AM', status: 'confirmed' },
    { patient: 'Liu Wei', patientId: 'PT-10238', doctor: 'Dr. Priya Nair', department: 'Orthopedics', time: '11:15 AM', status: 'confirmed' }
  ];

  doctors: DoctorAvailability[] = [
    { name: 'Dr. Alan Wu', specialty: 'Cardiology', initials: 'AW', status: 'available' },
    { name: 'Dr. Priya Nair', specialty: 'Orthopedics', initials: 'PN', status: 'in-surgery' },
    { name: 'Dr. Sarah Reynolds', specialty: 'Neurology', initials: 'SR', status: 'available' },
    { name: 'Dr. Tomas Silva', specialty: 'Pediatrics', initials: 'TS', status: 'off-duty' }
  ];

  statusLabel(status: Appointment['status']): string {
    switch (status) {
      case 'confirmed': return 'Confirmed';
      case 'waiting': return 'Waiting';
      case 'urgent': return 'Urgent';
    }
  }

  doctorStatusLabel(status: DoctorAvailability['status']): string {
    switch (status) {
      case 'available': return 'Available';
      case 'in-surgery': return 'In Surgery';
      case 'off-duty': return 'Off Duty';
    }
  }
}