import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAllPets(){
    return this._http.get('/api/pets')
  }
  createPet(pet){
    return this._http.post('/api/pets',pet);
  }

  findOne(pet_id){
    return this._http.get('/api/pets/'+pet_id);
  }
  updateIt(id,pet){
    return this._http.put('/api/pets/'+id,pet);
  }

  deleteOne(id){
    return this._http.delete('/api/pets/'+id);
  }

}
