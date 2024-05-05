import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AuthService } from '../service/auth.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone:true,
  imports:[IonicModule ,FormsModule],
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
commingdata:any=[]

  constructor(private auth:AuthService , private rot:Router) { }

  formdata(main:any){

this.auth.login(main.value).subscribe(res=>{
  this.commingdata=res.user
  console.log(this.commingdata)
  localStorage.setItem('name',this.commingdata.name)
  localStorage.setItem('email',this.commingdata.email)
  localStorage.setItem('id',this.commingdata.id)
  localStorage.setItem('token',res.access_token)
})

this.rot.navigate(['/home'])
  }

}
