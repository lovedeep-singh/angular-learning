import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { ExampleTestComponent } from './example-test/example-test.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes=[
{path:'',component: HomeComponent},
{path: 'contact', component: ContactComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    ExampleTestComponent,
    HomeComponent,
    ContactComponent
 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
