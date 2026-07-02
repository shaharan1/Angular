import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  appointments = [
    { patient: 'John Doe', doctor: 'Dr. Smith', dept: 'Cardiology', time: '09:30 AM', status: 'Confirmed' },
    { patient: 'Alice Brown', doctor: 'Dr. Taylor', dept: 'Pediatrics', time: '10:15 AM', status: 'Pending' },
    { patient: 'Robert Wilson', doctor: 'Dr. Evans', dept: 'Orthopedics', time: '11:00 AM', status: 'Confirmed' },
    { patient: 'Emma Davis', doctor: 'Dr. Green', dept: 'ICU', time: '11:45 AM', status: 'Confirmed' }
  ];

  departments = [
    { name: 'Emergency Room', load: 85, color: 'bg-danger' },
    { name: 'Cardiology', load: 60, color: 'bg-primary' },
    { name: 'Pediatrics', load: 40, color: 'bg-warning' },
    { name: 'General Surgery', load: 70, color: 'bg-success' }
  ];

  constructor() { }

  ngOnInit(): void { }
}
