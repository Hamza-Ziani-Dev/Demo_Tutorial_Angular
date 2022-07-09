import { PostsService } from './../../services/posts.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  public QrCodeText : any;
  name = 'Hamza';
  location= 'maroc';
  status ='active';
  message = "any message";
  isactive = true;

  datalist = [
    {id : 1, name : 'Hamza', country : 'Marrocco'},
    {id : 2, name : 'Aya', country : 'Fransh'},
    {id : 3, name : 'Siham', country : 'Italia'},
    {id : 4, name : 'Nouhaila', country : 'Canada'},
  ];
  jours = 'lun';
  // Service in Angular
  posts : any;
  constructor(private route:Router,postsService : PostsService) {
    postsService.getPosts().subscribe(res => {
      console.log(res);
      this.posts = res;
    }, err => {
      console.log(err);
    })
   }
  

  ngOnInit(): void {
  }
  getStatus (){
    return this.status;
  }

  getMessage(){
    console.log('This Is New Message')
  }
  goToNextPage(){
    this.route.navigate(['/home'])
  }
}
