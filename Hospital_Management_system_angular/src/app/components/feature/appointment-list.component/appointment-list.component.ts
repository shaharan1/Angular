import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppointmentModel } from '../../../models/appointmentModel';
import { AppointmentService } from '../../../services/appointment.service';

@Component({
  selector: 'app-appointment-list.component',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css',
})
export class AppointmentList implements OnInit {

  appointments: AppointmentModel[] = [];

  selectedDoctorId = 1;

  constructor(
    private appointmentService: AppointmentService
  ) {}

  ngOnInit(): void {

    this.loadAppointments();

  }

  loadAppointments() {

    this.appointmentService
      .getDoctorAppointments(this.selectedDoctorId)
      .subscribe({

        next: (res) => {

          this.appointments = res;

        },

        error: (err) => console.log(err)

      });

  }

  cancel(id: number) {

    if(confirm("Cancel this Appointment?")){

      this.appointmentService
      .cancelAppointment(id)
      .subscribe(()=>{

        alert("Appointment Cancelled");

        this.loadAppointments();

      });

    }

  }
}
