import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HOST_NAME } from './constant';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private htp:HttpClient) { }

  insertdata(main:any) :Observable<any>{
return this.htp.post<any>(`${HOST_NAME}/api/register`,main)
  }


  
  login(main:any) :Observable<any>{
    return this.htp.post<any>(`${HOST_NAME}/api/login`,main)
      }


      // logout(main:any) :Observable<any>{
      //   return this.htp.post<any>(`${HOST_NAME}/api/logout`,main)
      //     }
}
