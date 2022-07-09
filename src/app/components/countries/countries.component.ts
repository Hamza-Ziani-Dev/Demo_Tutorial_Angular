import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css'],
  styles: [`
      .countries{
        color: blue;
      font-weight: bold;
      }
  `]
})
export class CountriesComponent implements OnInit {
countries = [
  {name : 'Marrocco' , value : 'marrocco'},
  {name : 'Brasilia' , value : 'brasilia'},
  {name : 'Egypt' , value : 'egypt'},
  {name : 'Tunsia' , value : 'tunsia'},
  {name : 'Algeria' , value : 'algeria'},
]
  constructor() { }

  ngOnInit(): void {
  }

}
