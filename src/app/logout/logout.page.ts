import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  imports:[IonicModule],
  standalone:true,
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(private rot:Router) { }

  ngOnInit() {
    localStorage.removeItem('name')
    localStorage.removeItem('email')
    localStorage.removeItem('id')
    localStorage.removeItem('token')
    this.rot.navigate(['/login'])
  }

}
