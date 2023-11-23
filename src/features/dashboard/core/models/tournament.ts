export interface Tournament {
  _id: string;
  name: string;
  startDate: Date;
  endDate: Date;
  location?: string;
  category: string;
  isCompleted?: boolean;
}
