import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  userForm: any;
  users: any;

  constructor(public fb:FormBuilder,private service:CommonService, private router:Router){
    this.userForm = this.fb.group({
     
      Name:[""],
      Email:[""],
      Mobile:[""],
      Age:[" "]
    })
  }
  ngOnInit(): void {
     this.GetAllUsers(); 
  }

  SubmitForm(){
  this.service.AddUpdateUser(this.userForm.value).subscribe(data=>{
      alert("Added");
      this.router.navigate(["/userlist"]);
      this.GetAllUsers();
      console.log(data);
    })
  }
  GetAllUsers(){
    this.service.GetAllUsers().subscribe(data=>{ 
        console.log('users', data);
        this.users = data;
      })
    }
  

}
