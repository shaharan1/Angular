export interface PrescriptionItemModel {
  id?: number;

  medicineId: number;

  medicineName?: string; // শুধু Display করার জন্য

  dosage: string;
  duration: string;
  instruction: string;
}

export interface PrescriptionModel {
  id?: number;

  appointmentId: number | null;
  doctorId: number | null;
  patientId: number | null;

  diagnosis: string;
  chiefComplaints: string;
  symptoms: string;

  bloodPressure: string;
  pulseRate: string;
  bodyTemperature: string;
  weight: string;

  notes: string;

  nextFollowUpDate: string;

  prescriptionItems: PrescriptionItemModel[];
}