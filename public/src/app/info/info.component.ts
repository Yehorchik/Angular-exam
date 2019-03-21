import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  pet:any = {
    name : "",
    type : "",
    description : "",
    skills : {
         skillfirst : "",
         skillsecond : "",
         skillthird  :"" 
     }
  }
  constructor(
    private _httpService:HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id']);
      this.findPet(params['id']);
   });
  }
   
  findPet(id){
    this._httpService.findOne(id)
    .subscribe(pet =>{
      this.pet = pet;
    })
  }

  deletePet(id){
      this._httpService.deleteOne(id)
        .subscribe(pet =>{
          
        })
  }
}
