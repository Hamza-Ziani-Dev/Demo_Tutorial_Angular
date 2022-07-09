import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {
 //id : number = 0;
// colors : any[];
currentid = 1
items = [
        {id : 1, name: "Hamza", age:25, country:'Fransh', status: 'isactive',price: 200, date : new Date()},
        {id : 2, name: "Ilyas", age:23, country:'spanish', status: 'isactive',price: 180, date: new Date()},
        {id : 3, name: "Aya", age:20, country:'Canada', status: 'isnotactive',price: 900, date: new Date()},
        ]
  constructor() { }

  ngOnInit(): void {
    //this.id = 4;

  }
  clickMe(){
    console.log('Bravo and thanks for click me');
  }

  handeleKeyUp(){
    console.log('This key up was fired');
  }

  handeleInputOne(e: any){
    console.log(e.target.value);
  }

  handeleInputTwo(value: any){
    console.log(value);
  }
}
