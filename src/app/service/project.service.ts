import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HOST_NAME } from './constant';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http:HttpClient) { }


  getcurrent(user_id:any) :Observable<any[]>{
    return this.http.get<any[]>(`${HOST_NAME}/api/current-project/${user_id}`)
      }



  getproject(user_id:any) :Observable<any[]>{
    console.log(user_id)
    return this.http.get<any[]>(`${HOST_NAME}/api/projects/select/${user_id}`)
      }


      
  makestatuscurrent(user_id:any) :Observable<any>{
    return this.http.put<any>(`${HOST_NAME}/api/projects`,user_id)
      }

}
