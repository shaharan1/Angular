import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DoctorModel } from '../../../models/doctor.model';
import { DoctorService } from '../../../services/doctor.service';
import { DoctorDepartmentService } from '../../../services/doctor-department.service';
import { DoctorDepartmentModel } from '../../../models/doctorDepartment.model';

@Component({
  selector: 'app-doctor',
  imports: [CommonModule, FormsModule],
  templateUrl: './doctor.html',
  styleUrl: './doctor.css',
})
export class Doctor implements OnInit {

doctors: DoctorModel[] = [];
  departments: DoctorDepartmentModel[] = [];


  // Empty initializing object mirroring your JPA mappings
  doctor: DoctorModel = this.getInitialDoctorState();

  isEdit = false;

  constructor(
 private doctorService: DoctorService,
    private departmentService: DoctorDepartmentService,
    private cdr: ChangeDetectorRef

  ) { }

  ngOnInit(): void {

    this.loadDoctors();
    this.loadDepartments();
  }

  loadDoctors() {
    this.doctorService.getAllDoctors()
      .subscribe(data => {
        this.doctors = data;
        this.cdr.markForCheck();
      });
  }

  loadDepartments() {
    this.departmentService.getAllDepartments()
      .subscribe(data => {
        this.departments = data;
        this.cdr.markForCheck();
      });
  }


   save() {
    if (this.isEdit) {
      this.doctorService.updateDoctor(this.doctor.id!, this.doctor)
        .subscribe(() => {
          alert("Doctor Updated Successfully");
          this.reset();
          this.loadDoctors();
        });
    } else {
      this.doctorService.createDoctor(this.doctor)
        .subscribe(() => {
          alert("Doctor Registered Successfully");
          this.reset();
          this.loadDoctors();
        });
    }
  }


  edit(d: DoctorModel) {
    this.doctor = {
      ...d,
      user: d.user ? { ...d.user } : { id: 0, username: '', email: '' },
      doctorDepartment: d.doctorDepartment ? { ...d.doctorDepartment } : { id: 0, departmentName: '' }
    };
    this.isEdit = true;
  }

  delete(id: number) {
    if (confirm("Are you sure you want to remove this doctor profile?")) {
      this.doctorService.deleteDoctor(id)
        .subscribe(() => {
          alert("Doctor Record Deleted");
          this.loadDoctors();
        });
    }
  }

  reset() {
    this.doctor = this.getInitialDoctorState();
    this.isEdit = false;
  }

private getInitialDoctorState(): DoctorModel {
    return {
      gender: '',
      status: 'Active',
      study: '',
      specialization: '',
      designation: '',
      registrationNumber: '',
      experienceYears: 0,
      consultationFee: 0.0,
      followUpFee: 0.0,
      availableDays: '',
      dutyHours: '',
      chamber: '',
      joinDate: new Date().toISOString().substring(0, 10), // Set current date as string format YYYY-MM-DD
      photo: '',
      user: { id: 0, username: '', email: '' },
      doctorDepartment: { id: 0, departmentName: '' }
    };
  }

}
