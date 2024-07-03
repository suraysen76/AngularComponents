import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { LoginModel } from '../Models/login-model.model';

@Component({
  selector: 'app-form-comp',
  templateUrl: './form-comp.component.html',
  styleUrl: './form-comp.component.css'
})
export class FormCompComponent {
  
  loginModel:LoginModel[]=[];
  setValue(inputStr:string) {
    alert('Input: '+ inputStr);  
    this.loginModel=[new LoginModel("Suraysen", "pwd")]
  }}