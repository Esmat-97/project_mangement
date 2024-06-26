import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ClarityModule } from '@clr/angular';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
// import { ProjectService } from '../service/project.service';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
    imports:[IonicModule,  ClarityModule ,CommonModule , RouterLink , FormsModule ,NgFor],
  standalone:true,
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor( private htpp:HttpClient) {}

  id:any='';
  name:any='';
  first:any='current';
  second:any='complete';
  commingproject:any=[];
  commingcurrent:any=[];
  commingnotstrated:any=[]; 
  commingcomplete:any=[]; 


ngOnInit(){

    this.id=localStorage.getItem('id') as string;
    this.name=localStorage.getItem('name') as string;
    console.log(this.id )

    // this.pro.getproject(this.id).subscribe(res=>{
    //   this.commingproject=res
    //   console.log(this.commingproject)
    // })


    this.htpp.get(`http://192.168.1.2:80/api/projects/select/${this.id}`).subscribe(res=>{
      this.commingproject=res
    })


    this.htpp.get(`http://192.168.1.2:80/api/current-project/${this.id}`).subscribe(res=>{
      this.commingcurrent=res
    })


    this.htpp.get(`http://192.168.1.2:80/api/notstarted-project/${this.id}`).subscribe(res=>{
      this.commingnotstrated=res
    })


    this.htpp.get(`http://192.168.1.2:80/api/complete-project/${this.id}`).subscribe(res=>{
      this.commingcomplete=res
    })

    // this.pro.getcurrent(this.id).subscribe(res=>{
    //   this.commingcurrent=res
    //   console.log(this.commingcurrent)
    // })



    // this.pro.getnotstarted(this.id).subscribe(res=>{
    //   this.commingnotstrated=res
    //   console.log(this.commingnotstrated)
    // })



    // this.pro.getcomplete(this.id).subscribe(res=>{
    //   this.commingcomplete=res
    //   console.log(this.commingcomplete)
    // })


  }



  currentdata(main:any){
console.log(main.value)

// this.pro.makestatuscurrent(main.value).subscribe(res=>{
// })

this.htpp.put(`http://192.168.1.2:80/api/projects`,main.value).subscribe(res=>{

})

  }


  completedata(main:any){
    console.log(main.value)

    // this.pro.makestatuscurrent(main.value).subscribe(res=>{
    // })

    this.htpp.put(`http://192.168.1.2:80/api/projects`,main.value).subscribe(res=>{

})

      }

}
