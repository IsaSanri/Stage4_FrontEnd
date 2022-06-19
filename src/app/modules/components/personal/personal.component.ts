import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AppState } from 'src/app/core/store/models/app.model';
import { Store } from '@ngrx/store';
import { storePersonalData } from 'src/app/core/store/actions/personal-data.action';
import { PersonalInformationInterface } from 'src/app/models/information.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent {
  personalForm:FormGroup;
  personalDataSource: PersonalInformationInterface;

  constructor(private fb:FormBuilder,private store: Store<AppState>, private router:Router)
  {
    this.personalDataSource = {
      name: '',
      lastName: '',
      age: '',
      email: '',
      phoneNumber: ''
    };

    this.personalForm=this.fb.group({
      name:["",Validators.required],
      lastName:["",Validators.required],
      age:["",[Validators.required,Validators.maxLength(2)]],
      email:["",[Validators.required,Validators.email]],
      phoneNumber:["",[Validators.required,Validators.maxLength(10)]],
    });

    // this.store.select("personalData").subscribe(result => {
    //   this.personalDataSource = result.personalInformation;
    // //   this.getName.setValue(this.personalDataSource.name)
    // //   this.getLastName.setValue(this.personalDataSource.lastName)
    // //   this.getAge.setValue(this.personalDataSource.age)
    // //   this.getEmail.setValue(this.personalDataSource.email)
    // //   this.getPhoneNumber.setValue(this.personalDataSource.phoneNumber)
    // })

  }


  // get getName(){
  //   return this.personalForm.get("name");
  // }

  // get getLastName(){
  //   return this.personalForm.get("lastName");
  // }

  // get getAge(){
  //   return this.personalForm.get("age");
  // }

  // get getEmail(){
  //   return this.personalForm.get("email");
  // }

  // get getPhoneNumber(){
  //   return this.personalForm.get("phoneNumber");
  // }


  // savePersonalInformation(personalDatavalue: FormGroup){
  //   this.store.dispatch(
  //     storePersonalData({ personalInformation: personalDatavalue.value}
  //   ))
  // }
  nextForm(){
    this.router.navigate(['/adress'])
  }

}

