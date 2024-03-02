import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  DeleteUserId() {
    throw new Error('Method not implemented.');
  }
  readonly url = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  AddUpdateUser(user:any):Observable<any>{
    debugger
    return this.http.post(this.url+"Users",user); 
  }

  GetAllUsers():Observable<any>{
    return this.http.get(this.url+"Users"); 
  }
  DeleteUserById(id:any):Observable<any>{
    return this.http.delete(this.url+"Users/"+id); 
  }
  GetUserById(id:any):Observable<any>{
    return this.http.get(this.url+"Users/"+id); 
  }

}
