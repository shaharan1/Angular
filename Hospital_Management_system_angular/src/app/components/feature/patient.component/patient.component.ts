import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PatientModel } from '../../../models/patientModel';
import { PatientService } from '../../../services/patient.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-patient.component',
  imports: [CommonModule, FormsModule],
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.css',
})
export class PatientComponent implements OnInit {

  patient: PatientModel = {

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

  constructor(
    private service: PatientService,
    private route: ActivatedRoute,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {

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
