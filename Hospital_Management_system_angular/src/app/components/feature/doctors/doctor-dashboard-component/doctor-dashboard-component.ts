import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DoctorModel, DoctorResponseModel } from '../../../../models/doctorModel';
import { DoctorModelService } from '../../../../services/doctor.service';
import { KEYS, StorageService } from '../../../../services/storage.service';
import { LoginResponse } from '../../../../models/login.model';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-doctor-dashboard-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './doctor-dashboard-component.html',
  styleUrl: './doctor-dashboard-component.css',
})
export class DoctorDashboardComponent {

  user: LoginResponse | null = null;
  doctor: DoctorResponseModel | null= null;

   loading = true;

  constructor(
    private doctorService: DoctorModelService,
    private cdr: ChangeDetectorRef,
    private storage: StorageService,
    private auth: AuthService
   
  ) { }

  ngOnInit(): void {
     this.user = this.storage.getUser();

    this.loadDoctor();

  }


loadDoctor(): void {
    this.loading = true;
 
    const cached = this.storage.getData<DoctorResponseModel>(KEYS.Doctor);
    if (cached) {     
      this.loading = false;
    }
 
    // Always refresh from server too, in case it changed elsewhere
    if (this.user?.userId) {
      this.doctorService.findByUserId(this.user.userId).subscribe({
        next: (res) => {
          this.doctor= res;
          this.storage.saveData(KEYS.Doctor, res);
          this.loading = false;
          this.cdr.markForCheck();

          console.log("Doctor "+ this.doctor);
        },
        error: () => { this.loading = false; }
      });
    }
  }


   logout(): void {
    this.auth.logout();
    this.storage.removeData(KEYS.RIDER);
  }






}
