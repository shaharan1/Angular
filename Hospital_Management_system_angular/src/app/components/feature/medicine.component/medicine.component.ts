import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { GenericService } from '../../../services/generic.service';
import { MedicineService } from '../../../services/medicine.service';
import { GenericModel } from '../../../models/genericModel';
import { MedicineModel } from '../../../models/medicineModel';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-medicine',
   imports: [ CommonModule,FormsModule  ],
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css']
})
export class MedicineComponent implements OnInit {

  generics: GenericModel[] = [];

  medicineList: MedicineModel[] = [];

  selectedGenericId: number | null = null;

  medicine: MedicineModel = {
    medicineName: '',
    dosage: '',
    genericId: 0,
    prescriptionId: 1
  };

  constructor(
    private genericService: GenericService,
    private medicineService: MedicineService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.loadGenerics();
  }

  loadGenerics() {
    this.genericService.getAll().subscribe(data => {
      this.generics = data;
      this.cdr.markForCheck();
    });
  }

  onGenericChange() {

    if (!this.selectedGenericId) {
      this.medicineList = [];
      return;
    }

    this.medicine.genericId = this.selectedGenericId;

    this.medicineService
      .getMedicineByGeneric(this.selectedGenericId)
      .subscribe(data => {

        this.medicineList = data;

      });

  }

  save() {

    this.medicine.genericId = this.selectedGenericId!;

    this.medicineService.save(this.medicine).subscribe({

      next: (res) => {

        alert("Medicine Saved Successfully");

        console.log(res);

        this.router.navigate(['/medicine-list']);

      },

      error: (err) => {

        console.log(err);

      }

    });

  }

}