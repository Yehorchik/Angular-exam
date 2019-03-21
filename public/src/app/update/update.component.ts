import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  createErrors : any;

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
      console.log(this.pet)
    })
  }

  updatePet(id,pet){
    this._httpService.updateIt(id, pet)
    .subscribe(results =>{
      this._router.navigate(['/pets']);
    });
  }

}
