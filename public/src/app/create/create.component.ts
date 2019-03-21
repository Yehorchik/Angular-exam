import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';
import { getCheckNoChangesMode } from '@angular/core/src/render3/state';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
   createErrors : any;

   newPet = {
     name : "",
     type : "",
     description : "",
     skills : {
          skillfirst : "",
          skillsecond : "",
          skillthird  :"" 
      }
   }

   redirect : Boolean = false;
  constructor(
    private _httpService:HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  addPet(){
    let observable =this._httpService.createPet(this.newPet);
    observable.subscribe(results =>{
      if(results['errors']){
         this.createErrors = results;
         console.log(this.createErrors);
      }
      else{
        this.createErrors ="";
        this._router.navigate(['/pets']);
      }
    });
    this.newPet = {
      name : "",
      type : "",
      description : "",
      skills : {
           skillfirst : "",
           skillsecond : "",
           skillthird  :"" 
       }
    }
  }

}
