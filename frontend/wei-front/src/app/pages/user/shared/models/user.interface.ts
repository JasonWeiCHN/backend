export interface IUser {
  name: string;
  email: string;
  phone: string;
  creationTime: string;
}

export interface IAddUser {
  username: string;
  password: string;
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  gender: string;
  role: string;
  dateOfBirth: Date;
  country: string;
  city: string;
  streetAddress: string;
  zipCode: string;
  status: string;
  avatar: string;
  timezone: string;
  language: string;
  occupation: string;
  company: string;
  interests: string;
  education: string;
  biography: string;
  socialMediaLinks: string;
}
