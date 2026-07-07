export interface MedicineModel {
  id?: number;
  medicineName: string;
  genericName: string;
  dosage: string;
  prescriptionId?: number;
}