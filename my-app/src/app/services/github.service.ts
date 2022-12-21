import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http:HttpClient) { }


  getdata(){
    const url = "https://api.github.com/users"
    return this.http.get(url)
  }
}
