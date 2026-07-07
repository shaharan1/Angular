import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicineModel } from '../../../models/medicineModel';
import { MedicineService } from '../../../services/medicine.service';

@Component({
  selector: 'app-medicine.component',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './medicine.component.html',
  styleUrl: './medicine.component.css',
})
export class MedicineComponent implements OnInit {

  medicine: MedicineModel = {
    medicineName: '',
    genericName: '',
    dosage: '',
    
    prescriptionId: 1
  };

  id?: number;

  constructor(
    private medicineService: MedicineService,
    private route: ActivatedRoute,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');

    if (id) {

      this.id = +id;

      this.medicineService.getById(this.id).subscribe({

        next: (res) => {

          this.medicine = res;
          this.cdr.detectChanges();

        },

        error: (err) => console.log(err)

      });

    }

  }

  save() {

    if (this.id) {

      this.medicineService.update(this.id, this.medicine).subscribe({

        next: () => {

          alert("Medicine Updated Successfully");

          this.router.navigate(['/medicine-list']);

        },

        error: (err) => console.log(err)

      });

    } else {

      this.medicineService.save(this.medicine).subscribe({

        next: () => {

          alert("Medicine Saved Successfully");

          this.router.navigate(['/medicine-list']);

        },

        error: (err) => console.log(err)

      });

    }

  }

}