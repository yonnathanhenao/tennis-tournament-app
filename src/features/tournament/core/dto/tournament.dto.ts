export class TournamentDto {
  name?: string;
  startDate?: Date;
  endDate?: Date;
  location?: string;
  category?: string;
  isCompleted?: boolean;

  public constructor(json: Partial<TournamentDto>) {
    this.name = json.name;
    this.startDate = json.startDate;
    this.endDate = json.endDate;
    this.location = json.location;
    this.category = json.category;
    this.isCompleted = json.isCompleted ?? false;
  }
}
