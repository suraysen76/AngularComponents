import { Component } from '@angular/core';
import { StudentComponent } from './student/student.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title='AngularComponents Main Component';
  pageHeader = ' Student Details';
 
  
}
