import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ClarityModule } from '@clr/angular';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
    imports:[IonicModule,  ClarityModule ,CommonModule],
  standalone:true,
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

}
