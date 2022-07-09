import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  //Pass data from  child to parent component in angular
  @Output() public ChildEvent = new EventEmitter();
 //Pass data from parent to child  component in angular
  @Input() public nameFromParent : any;
  constructor() { }

  ngOnInit(): void {
  }

  public handeldata(){
    this.ChildEvent.emit('Message from child to parent');
  }
}
