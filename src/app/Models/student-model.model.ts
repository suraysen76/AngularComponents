import { IStudent } from '../Interfaces/istudent.model';

export class StudentModel implements IStudent {
  public Name: string;
  public Branch: string;
  public Mobile: number;
  public Gender: string;
  public Age: number;

 

  constructor(name: string, branch:string, mobile: number, gender: string, age: number) {
    this.Name = name;
    this.Branch = branch;
    this.Mobile = mobile;
    this.Gender=gender;
    this.Age = age;
}
  getName(): string {
    return this.Name;
  }

  getAge(): number {
    return this.Age;
  }
  
  getGender(): string {
    return this.Gender;
  }

  getBranch(): string {
    return this.Branch;
  }

  getMobile(): number {
    return this.Mobile;
  }

  getGenderColor(value: string): string {
    if (value =="Male") {
        return 'gray';
    } else 
        return 'orange';
    }

    getTitle(value: string): string {
        if (value =="Male") {
            return 'Mr';
        } else 
            return 'Ms';
        }
}

