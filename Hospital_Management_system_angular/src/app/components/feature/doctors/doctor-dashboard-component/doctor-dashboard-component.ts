import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DoctorModel } from '../../../../models/doctorModel';
import { DoctorModelService } from '../../../../services/doctor.service';

@Component({
  selector: 'app-doctor-dashboard-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './doctor-dashboard-component.html',
  styleUrl: './doctor-dashboard-component.css',
})
export class DoctorDashboardComponent {


  totalDoctors = 0;

  doctors: DoctorModel[] = [];

  constructor(private doctorService: DoctorModelService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.loadDoctors();
  }

  loadDoctors() {
    this.doctorService.getAll().subscribe({

      next: (res) => {
        this.doctors = res;
        this.totalDoctors = res.length;
        this.cdr.markForCheck();
      },

      error: (err) => {
        console.log(err);
      }

    });
  }

}
