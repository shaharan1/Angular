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
import { TestMasterService } from '../../../services/test-master.service';
import { TestMasterModel } from '../../../models/testMasterModel';

@Component({
  selector: 'app-prescription',
  imports: [CommonModule, FormsModule],
  templateUrl: './prescription.html',
  styleUrl: './prescription.css',
})
export class PrescriptionComponent implements OnInit {

  medicines: MedicineModel[] = [];
  filteredMedicines: MedicineModel[] = [];

  filteredTests: TestMasterModel[] = [];

  selectedTests: TestMasterModel[] = [];

  testKeyword = '';

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

    testIds: [],


  };


  instructions: string[] = [
    'Before Meal',
    'After Meal',
    'With Meal',
    'Empty Stomach',
    'Before Breakfast',
    'After Breakfast',
    'Before Lunch',
    'After Lunch',
    'Before Dinner',
    'After Dinner',
    'Morning',
    'Noon',
    'Night',
    'Morning & Night',
    'As Needed (SOS)',
    'At Bedtime'
  ];

  constructor(
    private appointmentService: AppointmentService,
    private doctorService: DoctorModelService,
    private service: PrescriptionService,
    private medicineService: MedicineService,
    private testService: TestMasterService,
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadMedicines();

    this.addMedicine();

    this.route.params.subscribe(params => {

      // Edit Prescription
      if (params['id']) {

        this.loadPrescription(+params['id']);
        return;
      }

      // Create From Appointment
      if (params['appointmentId']) {

        this.loadAppointment(+params['appointmentId']);
      }

    });

    const appointmentId =
      Number(this.route.snapshot.paramMap.get('appointmentId'));

    if (appointmentId) {

      this.loadAppointment(appointmentId);

    }

  }

  loadMedicines() {
    this.medicineService.getAll().subscribe({
      next: (res) => {
        this.medicines = res;
        this.cdr.markForCheck();
        console.log("Medicines: "+this.medicines);
      }
    });
  }


  loadAppointment(appointmentId: number) {

    this.appointmentService
      .getById(appointmentId)
      .subscribe({

        next: (res) => {

          this.prescription.appointmentId = res.id!;
          this.prescription.patientId = res.registeredPatientId!;
          this.prescription.doctorId = res.doctorId!;
          this.cdr.markForCheck();

          console.log(res);

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
      this.cdr.markForCheck();
      return;
    }

    this.medicineService.search(keyword).subscribe({
      next: (res) => {
        this.filteredMedicines = res;
        this.cdr.markForCheck();
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

  searchTest(keyword: string): void {

    this.testKeyword = keyword;

    if (!keyword || keyword.trim().length < 1) {

      this.filteredTests = [];
      return;

    }

    this.testService.search(keyword).subscribe({

      next: (res) => {

        this.filteredTests = res;
        this.cdr.markForCheck();

      }

    });

  }

  selectTest(test: TestMasterModel): void {

    const exists = this.prescription.testIds.includes(test.id!);

    if (!exists) {

      this.prescription.testIds.push(test.id!);

      this.selectedTests.push(test);

    }

    this.filteredTests = [];

    this.testKeyword = '';

  }

  removeTest(test: TestMasterModel): void {

    this.selectedTests =
      this.selectedTests.filter(t => t.id !== test.id);

    this.prescription.testIds =
      this.prescription.testIds.filter(id => id !== test.id);

  }

  get totalTestCost(): number {

    return this.selectedTests.reduce(
      (sum, t) => sum + t.standardPrice,
      0
    );

  }

  private cleanPrescriptionItems(items: any[]): any[] {
    return items.map(({ medicineName, ...rest }) => rest);
  }

  save() {

    const payload = {
      ...this.prescription,
      prescriptionItems: this.cleanPrescriptionItems(this.prescription.prescriptionItems)
    };

    if (this.prescription.id) {

      this.service.update(this.prescription.id, payload).subscribe({

        next: () => {

          alert('Prescription Updated Successfully');

          this.router.navigate(['/prescription-list']);

        },

        error: err => console.log(err)

      });

    } else {

      this.service.save(payload).subscribe({

        next: () => {

          alert('Prescription Saved Successfully');

          this.router.navigate(['/prescription-list']);

        },

        error: err => console.log(err)

      });

    }

  }
}
