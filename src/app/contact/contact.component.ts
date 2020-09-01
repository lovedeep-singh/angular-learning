import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  onSubmit(form1){
    this.http.post('https://jsonplaceholder.typicode.com/posts',{
      userId:Math.random(),
      id:Math.random(),
      title:form1.value.title



    }).subscribe(res =>{

      console.log(res);


      },error => {
        console.log(error);
      });
  }

}
