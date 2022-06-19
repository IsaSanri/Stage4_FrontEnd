import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adress',
  templateUrl: './adress.component.html',
  styleUrls: ['./adress.component.scss']
})
export class AdressComponent {

  constructor(private router:Router) { }

  submit(){
    this.router.navigate(['/resume']);
  }
}
