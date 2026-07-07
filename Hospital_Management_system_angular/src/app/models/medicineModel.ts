
export interface MedicineModel {

  id?: number;

  medicineName: string;

  genericName: string;

  dosage: string;

  frequency: string;

  route: string;

  duration: string;

  applyWay: string;

  quantity: number;

  startDate: string;

  instructions: string;

  active: boolean;

  prescriptionId: number;

}
