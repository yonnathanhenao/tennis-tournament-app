export class User {
  _id?: string;
  name?: string;
  lastName?: string;
  email?: string;
  password?: string;
  birthDate?: Date;
  address?: string;
  isAdmin?: boolean;

  constructor(json: Partial<User>) {
    if (json?._id) {
      this._id = json._id;
    }
    if (json?.name) {
      this.name = json.name;
    }
    if (json?.lastName) {
      this.lastName = json.lastName;
    }
    if (json?.email) {
      this.email = json.email;
    }
    if (json?.password) {
      this.password = json.password;
    }
    if (json?.birthDate) {
      this.birthDate = json.birthDate;
    }
    if (json?.address) {
      this.address = json.address;
    }
    if (json?.isAdmin) {
      this.isAdmin = json.isAdmin;
    }
  }
}
