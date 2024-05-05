import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone:true,
  imports:[IonicModule,FormsModule],
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage  {

  constructor( private rot:Router ,private http:HttpClient) { }

  formdata(main:any){

// this.auth.insertdata(main.value).subscribe(res=>{
//   this.rot.navigate(['/login'])
// })
console.log(main.value)

this.http.post('http://192.168.1.2:80/api/register',main.value).subscribe(res=>{
  
})
this.rot.navigate(['/login'])
  }

}
