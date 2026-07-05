import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NurseModel } from '../../../models/nurseModel';
import { NurseService } from '../../../services/nurse.service';

@Component({
  selector: 'app-nurse-list',
  imports: [CommonModule,FormsModule],
  templateUrl: './nurse-list.html',
  styleUrl: './nurse-list.css',
})
export class NurseList implements OnInit {


nurses: NurseModel[] = [];
  filteredNurses: NurseModel[] = [];

  searchText = '';
  ward = '';

  constructor(private nurseService: NurseService) {}

  ngOnInit(): void {
    this.loadNurses();
  }

  loadNurses(): void {
    this.nurseService.getAllNurses().subscribe({
      next: (data) => {
        this.nurses = data;
        this.filteredNurses = data;
      },
      error: (err) => console.error(err)
    });
  }

  search(): void {

    const keyword = this.searchText.toLowerCase();

    this.filteredNurses = this.nurses.filter(n =>
      n.name.toLowerCase().includes(keyword) ||
      n.email.toLowerCase().includes(keyword) ||
      n.phone.toLowerCase().includes(keyword)
    );

  }

  searchWard(): void {

    if (!this.ward) {
      this.loadNurses();
      return;
    }

    this.nurseService.getNurseByWard(this.ward).subscribe({
      next: (data) => {
        this.filteredNurses = data;
      }
    });

  }

  loadOnDuty(): void {

    this.nurseService.getOnDutyNurses().subscribe({
      next: (data) => {
        this.filteredNurses = data;
      }
    });

  }

  reset(): void {

    this.searchText = '';
    this.ward = '';
    this.loadNurses();

  }

  changeDutyStatus(nurse: NurseModel): void {

    this.nurseService
      .updateDutyStatus(nurse.id!, !nurse.onDuty)
      .subscribe(() => {
        this.loadNurses();
      });

  }

  changeActiveStatus(nurse: NurseModel): void {

    this.nurseService
      .updateActiveStatus(nurse.id!, !nurse.active)
      .subscribe(() => {
        this.loadNurses();
      });

  }
  
}
