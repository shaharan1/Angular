

export interface PrescriptionItemModel {
  id?: number;
  medicineName: string;
  dosage: string;
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