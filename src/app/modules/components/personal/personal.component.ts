import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';



@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent {
  personalForm:FormGroup;

  constructor(private fb:FormBuilder, private router:Router)
  {

    this.personalForm=this.fb.group({
      name:["",Validators.required],
      lastName:["",Validators.required],
      age:["",[Validators.required,Validators.maxLength(2)]],
      email:["",[Validators.required,Validators.email]],
      phoneNumber:["",[Validators.required,Validators.maxLength(10)]],
    });

  }

   nextInfo(){
    this.router.navigate(['/adress']);
  }


}

