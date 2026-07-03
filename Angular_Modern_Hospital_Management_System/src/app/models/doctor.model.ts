import { DoctorDepartmentModel } from "./doctorDepartment.model";




export interface DoctorModel {

    id?: number; // Optional because it is null/undefined before saving to the DB
    gender: string;
    status: string;
    study: string;
    specialization: string;
    designation: string;
    registrationNumber: string;
    experienceYears: number;
    consultationFee: number;
    followUpFee: number;
    availableDays: string; // If parsing as JSON string later, you can use 'string | string[]'
    dutyHours: string;
    chamber: string;
    joinDate: string | Date; // Backend localDate maps to string (YYYY-MM-DD) in JSON response
    photo: string;
    //   slots?: ScheduleSlot[];
    reports?: Report[];
    //   user: User;
    doctorDepartment: DoctorDepartmentModel;
} 