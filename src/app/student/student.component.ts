import { Component } from '@angular/core';
import { StudentModel } from "../Models/student-model.model";
import { Input } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
  @Input() studentList : StudentModel[]=[];

  students: StudentModel[] = [
    new StudentModel("Suraysen", "KL", 60122330102,"Male",48),
    new StudentModel("Nirmala", "NS", 60122759484,"Female",44),
    new StudentModel("Kavina", "KL", 10000,"Female",17),
  ];
  

}
