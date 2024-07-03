import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-comp',
  templateUrl: './parent-comp.component.html',
  styleUrl: './parent-comp.component.css'
})
export class ParentCompComponent implements OnInit {
  messageTextInParent="";
  constructor(){}

  ngOnInit(){}

  clickEvent() {
      if (this.messageTextInParent!="")
        alert("Messgae is " + this.messageTextInParent);
      else
        alert("No Message");

  }
    
  
}
