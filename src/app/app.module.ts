import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { ItemsComponent } from './components/items/items.component';
import { PostsService } from './services/posts.service';
import {HttpClientModule} from '@angular/common/http';
import { PostComponent } from './components/post/post.component'
import { SummaryPipe } from './pipes/summary.pipe';
import { CountriesComponent } from './components/countries/countries.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { ContactComponent } from './components/contact/contact.component';
import { QRCodeModule } from 'angular2-qrcode';
@NgModule({
  declarations: [
    AppComponent,
    SummaryPipe,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent,
    ItemsComponent,
    PostComponent,
    CountriesComponent,
    ParentComponent,
    ChildComponent,
    ContactComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    QRCodeModule,
  ],
  providers: [
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
