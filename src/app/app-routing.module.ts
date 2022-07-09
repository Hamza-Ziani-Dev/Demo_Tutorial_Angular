import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ChildComponent } from './components/child/child.component';
import { ContactComponent } from './components/contact/contact.component';
import { CountriesComponent } from './components/countries/countries.component';
import { HomeComponent } from './components/home/home.component';
import { ItemsComponent } from './components/items/items.component';
import { ParentComponent } from './components/parent/parent.component';
import { PostComponent } from './components/post/post.component';

const routes: Routes = [
  {path: "home", component:HomeComponent},
  {path: "posts", component:PostComponent},
  {path: "about", component:AboutComponent},
  {path: "items", component:ItemsComponent},
  {path: "countries", component:CountriesComponent},
  {path: "parent", component:ParentComponent},
  {path: "child", component:ChildComponent},
  {path: "contact", component:ContactComponent},
  
  {path: "" , redirectTo: "home",pathMatch:"full"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
