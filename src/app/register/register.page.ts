import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone:true,
  imports:[IonicModule,FormsModule],
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage  {

  constructor(private auth:AuthService , private rot:Router) { }

  formdata(main:any){
this.auth.insertdata(main.value).subscribe(res=>{
  this.rot.navigate(['/login'])
})
  }

}
