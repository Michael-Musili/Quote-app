
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  constructor(
    private Userformfomponent: UserFormComponent,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

}