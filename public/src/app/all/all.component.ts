import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  pets : any;

  constructor(private _httpService:HttpService) { }

  ngOnInit() {
    this.allPets()
  }

  allPets(){
    this._httpService.getAllPets()
    .subscribe(results =>{
      this.pets = results;
      console.log(this.pets);
    })
  }
}
