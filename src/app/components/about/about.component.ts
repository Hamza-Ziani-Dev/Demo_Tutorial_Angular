import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  title = "THis Is Images";
  image1 = 'https://picsum.photos/200/300';
  image2 ='https://picsum.photos/seed/picsum/200/300';
  image3 ='https://picsum.photos/200/300.jpg';
  image4 ='https://picsum.photos/200/300';
  image5 ='https://picsum.photos/200';
  image6 ='https://picsum.photos/200/300?grayscale';

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

goToBack(){
    this.route.navigate(["/home"])
  }
}
