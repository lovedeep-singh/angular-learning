import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  city:string;
  firstName='Lovedeep';
  lastName='Singh'
  status: boolean= true;
  posts:object[];
  user = {
    username:'',
    password:''
  };

  constructor()
  {
   this.posts=[

    {title:'Post 1'},
    {title:'Post 2'},
    {title:'Post 3'},
    {title:'Post 4'},
    {title:'Post 5'}


   ];

  }

  getUserStatus(){
   this.status=true;
  }

  greetPerson()
  {
    alert('hello user');
  }

  mousingOver()
  {
    console.log("we just moused over");
  }
  onSubmit(form1){

    console.log("form submitted");
    this.user.username=form1.value.username;
    this.user.password=form1.value.password;
    console.log(this.user);
  }
}
