export class Tournament {
  _id?: string;
  name?: string;
  startDate?: Date;
  endDate?: Date;
  location?: string;
  category?: string;
  isCompleted?: boolean;

  public constructor(json: Partial<Tournament>) {
    if (json?._id) {
      this._id = json._id;
    }
    if (json?.name) {
      this.name = json.name;
    }
    if (json?.startDate) {
      this.startDate = json.startDate;
    }
    if (json?.endDate) {
      this.endDate = json.endDate;
    }
    if (json?.location) {
      this.location = json.location;
    }
    if (json?.category) {
      this.category = json.category;
    }
    if (json?.isCompleted) {
      this.isCompleted = json.isCompleted;
    }
  }
}

export class TournamentDto {
  name?: string;
  startDate?: Date;
  endDate?: Date;
  location?: string;
  category?: string;
  isCompleted?: boolean;

  public constructor(json: Partial<Tournament>) {
    this.name = json.name;
    this.startDate = json.startDate;
    this.endDate = json.endDate;
    this.location = json.location;
    this.category = json.category;
    this.isCompleted = json.isCompleted ?? false;
  }
}
