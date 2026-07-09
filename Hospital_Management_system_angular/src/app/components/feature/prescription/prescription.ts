import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PrescriptionModel } from '../../../models/prescriptionModel';
import { PrescriptionService } from '../../../services/prescription.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentService } from '../../../services/appointment.service';
import { DoctorModelService } from '../../../services/doctor.service';
import { MedicineModel } from '../../../models/medicineModel';
import { MedicineService } from '../../../services/medicine.service';

@Component({
  selector: 'app-prescription',
  imports: [CommonModule, FormsModule],
  templateUrl: './prescription.html',
  styleUrl: './prescription.css',
})
export class PrescriptionComponent implements OnInit {

  medicines: MedicineModel[] = [];
  filteredMedicines: MedicineModel[] = [];

  prescription: PrescriptionModel = {

    appointmentId: null,
    doctorId: null,
    patientId: null,

    diagnosis: '',
    chiefComplaints: '',
    symptoms: '',

    bloodPressure: '',
    pulseRate: '',
    bodyTemperature: '',
    weight: '',

    notes: '',
    nextFollowUpDate: '',

    prescriptionItems: [],

    testIds: []
  };

  constructor(
    private appointmentService: AppointmentService,
    private doctorService: DoctorModelService,
    private service: PrescriptionService,
    private medicineService: MedicineService,
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadMedicines();

    this.route.params.subscribe(params => {

      const id = params['id'];

      if (id) {

        this.loadPrescription(+id);

      } else {

        this.addMedicine();

      }

    });

  }

  loadMedicines() {
    this.medicineService.getAll().subscribe({
      next: (res) => {
        this.medicines = res;
        this.cdr.markForCheck();
      }
    });
  }

  loadPrescription(id: number) {

    this.service.getById(id).subscribe({

      next: (res) => {

        this.prescription = res;
        this.cdr.markForCheck();

      },

      error: (err) => {

        console.log(err);

      }

    });

  }

  searchMedicine(keyword: string) {
    if (keyword.length < 2) {
      this.filteredMedicines = [];
      return;
    }

    this.medicineService.search(keyword).subscribe({
      next: (res) => {
        this.filteredMedicines = res;
      }
    });
  }

  selectMedicine(item: any, medicine: MedicineModel): void {

    item.medicineId = medicine.id;
    item.medicineName = medicine.medicineName;

    this.filteredMedicines = [];

  }

  addMedicine(): void {

    this.prescription.prescriptionItems.push({

      medicineId: 0,
      dosage: '',
      duration: '',
      instruction: ''

    });

  }

  removeMedicine(index: number) {

    this.prescription.prescriptionItems.splice(index, 1);

  }

  save() {

    if (this.prescription.id) {

      this.service.update(this.prescription.id, this.prescription).subscribe({

        next: () => {

          alert('Prescription Updated Successfully');

          this.router.navigate(['/prescription-list']);

        },

        error: err => console.log(err)

      });

    } else {

      this.service.save(this.prescription).subscribe({

        next: () => {

          alert('Prescription Saved Successfully');

          this.router.navigate(['/prescription-list']);

        },

        error: err => console.log(err)

      });

    }

  }
}
