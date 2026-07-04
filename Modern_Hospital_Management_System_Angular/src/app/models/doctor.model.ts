import { DoctorDepartmentModel } from "./doctorDepartment.model";




export interface DoctorModel {

    gender: '',
  status: 'Active',
  study: '',
  specialization: '',
  designation: '',
  registrationNumber: '',
  experienceYears: 0,
  consultationFee: 0,
  followUpFee: 0,
  availableDays: '',
  dutyHours: '',
  chamber: '',
  joinDate: '',
  photo: '',

  user: {
    id: 0,
    username: '',
    email: ''
  },

  DoctorDepartmentModel: {
    id: 0,
    departmentName: '',
    description: ''
  }
} 