import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

// import { AppComponent } from './app.component';
import { HomeListComponent } from './home-list/home-list.component';

import {RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CreateComponent } from './create/create.component';
import { FrameworkComponent } from './framework/framework.component';
import { APP_BASE_HREF} from '@angular/common';
import { DetailsPageComponent } from './details-page/details-page.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
 
@NgModule({
  declarations: [
    HomeListComponent,
    CreateComponent,
    DetailsPageComponent,
    FrameworkComponent,
    DeleteBookComponent,
    UpdateBookComponent,
    HeaderComponent,
    HomepageComponent,
    AboutComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
     {
      path: '',
      component: HomepageComponent
     },
     {
      path: 'list',
      component: HomeListComponent
     },
     {
      path: 'about',
      component: AboutComponent
     },
     { 
      path: 'create', 
      component: CreateComponent 
    }, 
    {
      path: 'books/delete/:bookid',
      component: DeleteBookComponent
    },
    {
      path: 'books/update/:bookid',
      component: UpdateBookComponent
    },
    { 
      path: 'books/:bookid', 
      component: DetailsPageComponent 
    }
   ])
      ],
      providers: [{provide: APP_BASE_HREF, useValue: '/'}],
      bootstrap: [FrameworkComponent]
})
export class AppModule { }
