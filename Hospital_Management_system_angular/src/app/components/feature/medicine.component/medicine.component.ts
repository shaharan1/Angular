import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MedicineModel } from '../../../models/medicineModel';
import { MedicineService } from '../../../services/medicine.service';

@Component({
  selector: 'app-medicine.component',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './medicine.component.html',
  styleUrl: './medicine.component.css',
})
export class MedicineComponent {


  medicine: MedicineModel = {

    medicineName: '',
    genericName: '',
    dosage: '',
    frequency: '',
    route: '',
    duration: '',
    applyWay: '',
    quantity: 1,
    startDate: '',
    instructions: '',
    active: true,
    prescriptionId: 1

  };

  constructor(
    private medicineService: MedicineService,
    private cdr: ChangeDetectorRef
  ) { }

  save() {

    this.medicineService.save(this.medicine).subscribe({

      next: () => {

        alert("Medicine Saved Successfully");

      },

      error: (err) => {

        console.log(err);

      }

    });

  }



}
