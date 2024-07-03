import { Component,OnInit } from '@angular/core';
import { StudentComponent } from './student/student.component';
import { environment } from './environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {  

  envTitle:string='';

 
  ngOnInit(): void {
    this.envTitle=environment.envTitle;
  }
}
