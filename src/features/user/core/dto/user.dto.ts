export class UserDto {
  name?: string;
  lastName?: string;
  email?: string;
  password?: string;
  birthDate?: Date;
  address?: string;
  isAdmin?: boolean;

  public constructor(json: Partial<UserDto>) {
    this.name = json?.name;
    this.lastName = json?.lastName;
    this.email = json?.email;
    this.password = json?.password;
    this.birthDate = json?.birthDate;
    this.address = json?.address;
    this.isAdmin = json?.isAdmin;
  }
}
