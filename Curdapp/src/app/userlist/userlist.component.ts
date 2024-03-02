import { Component } from '@angular/core';
import { CommonService } from '../common.service';
import { UsersComponent } from '../users/users.component';
declare var $:any;

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.css'
})
export class UserlistComponent {

users: any;
  userForm: any;
constructor(private service:CommonService){
}
ngOnInit(): void {
  this.GetAllUsers(); 
}

DeleteUserById(ID:any){
  this.service.DeleteUserById(ID).subscribe(data=>{ 
      alert("user deleted!");
      this.GetAllUsers();
    })
  }
GetAllUsers(){
  this.service.GetAllUsers().subscribe(data=>{ 
      console.log('users', data);
      this.users = data;
    })
  }

  GetUserById(Id:any){
    this.service.GetUserById(Id).subscribe(data=>{
     alert("get users sucessfully");
     $("#nav-home").addClass('show');
     $("#nav-home").addClass('active');

     $("#profile").removeClass('show');
     $("#profile").removeClass('active');

      console.log('users', data);
      this.userForm.patchValue({
        id:data.id,
         Name:data.Name,
         Email:data.Email,
        Mobile:data.Mobile,
        Age:data.Age
      })
    })

  }
}
