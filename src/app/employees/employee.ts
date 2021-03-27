export class Employee {

  id: number;
  name: string;
  email: string;
  jobTitle: string;
  imageUrl: string;


  constructor(id: number, name: string, email: string, jobTitle: string, imageUrl: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.jobTitle = jobTitle;
    this.imageUrl = imageUrl;
  }
}
