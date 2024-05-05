import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ClarityModule } from '@clr/angular';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ProjectService } from '../service/project.service';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
    imports:[IonicModule,  ClarityModule ,CommonModule , RouterLink , FormsModule ,NgFor],
  standalone:true,
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private pro:ProjectService) {}

  id:any='';
  name:any='';
  first:any='current';
  commingproject:any=[];
  commingcurrent:any=[];

ngOnInit(){

    this.id=localStorage.getItem('id') as string;
    this.name=localStorage.getItem('name') as string;

    this.pro.getproject(this.id).subscribe(res=>{
      this.commingproject=res
      console.log(this.commingproject)
    })



    this.pro.getcurrent(this.id).subscribe(res=>{
      this.commingcurrent=res
      console.log(this.commingcurrent)
    })
  }



  currentdata(main:any){
console.log(main.value)

this.pro.makestatuscurrent(main.value).subscribe(res=>{

})
  }

}
