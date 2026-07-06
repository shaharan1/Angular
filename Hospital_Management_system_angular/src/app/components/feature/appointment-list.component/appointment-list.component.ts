import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
    private appointmentService: AppointmentService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {

    this.loadAppointments();

  }

  loadAppointments() {

    this.appointmentService
      .getAllAppointments()
      .subscribe({

        next: (res) => {

          this.appointments = res;
          console.log('Appointments:', res);
          this.cdr.markForCheck();
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
