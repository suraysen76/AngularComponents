import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrl: './child-comp.component.css'
})
export class ChildCompComponent implements OnInit {

  @Input()
  messagetext : string='default';
  constructor() {}

  ngOnInit(): void {
    
  }

}
