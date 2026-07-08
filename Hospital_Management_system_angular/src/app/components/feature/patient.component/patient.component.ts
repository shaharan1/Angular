import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PatientModel } from '../../../models/patientModel';
import { PatientService } from '../../../services/patient.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentService } from '../../../services/appointment.service';

@Component({
  selector: 'app-patient.component',
  imports: [CommonModule, FormsModule],
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.css',
})
export class PatientComponent implements OnInit {

  patient: PatientModel = {

    appointmentId: null,

    name: '',
    gender: '',
    dateOfBirth: '',

    bloodGroup: '',
    maritalStatus: '',

    phone: '',
    alternatePhone: '',

    email: '',
    nationalId: '',

    address: '',
    city: '',
    district: '',
    postalCode: '',

    emergencyContactName: '',
    emergencyContactNumber: '',
    relationship: ''

  };

  appointments: any[] = [];

  constructor(
    private service: PatientService,
    private appointmentService: AppointmentService,
    private route: ActivatedRoute,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {

    this.loadAppointments();

    this.route.params.subscribe(params => {

      if (params['id']) {

        this.loadPatient(+params['id']);

      }

    });

  }

  loadPatient(id: number) {

    this.service.getById(id).subscribe({

      next: res => {

        this.patient = res;
        this.cdr.markForCheck();

      },

      error: err => console.log(err)

    });

  }

  loadAppointments() {

    this.appointmentService.getAllAppointments().subscribe({

      next: (res) => {

        this.appointments = res;

      },

      error: (err) => {

        console.log(err);

      }

    });

  }


  loadAppointment() {

    if (!this.patient.appointmentId) {
      alert("Please enter Appointment ID");
      return;
    }

    this.appointmentService.getById(this.patient.appointmentId).subscribe({

      next: (res) => {

        this.patient.name = res.patientName;
        this.patient.phone = res.mobileNumber;

      },

      error: () => {
        alert("Appointment not found");
      }

    });

  }

  save() {

    if (this.patient.id) {

      this.service.update(this.patient.id, this.patient).subscribe({

        next: () => {

          alert('Patient Updated Successfully');
          this.router.navigate(['/patient-list']);

        },

        error: err => console.log(err)

      });

    } else {

      this.service.save(this.patient).subscribe({

        next: () => {

          alert('Patient Saved Successfully');

          this.resetForm();

          this.router.navigate(['/patient-list']);

        },

        error: err => console.log(err)

      });

    }

  }

  resetForm() {

    this.patient = {

      name: '',
      gender: '',
      dateOfBirth: '',

      bloodGroup: '',
      maritalStatus: '',

      phone: '',
      alternatePhone: '',

      email: '',
      nationalId: '',

      address: '',
      city: '',
      district: '',
      postalCode: '',

      emergencyContactName: '',
      emergencyContactNumber: '',
      relationship: ''

    };

  }
}
