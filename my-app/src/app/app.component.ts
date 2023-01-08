import { Component } from '@angular/core';
import { GithubService } from "./services/github.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  users:any = [];
  buttonType:string = "";
  buttonColor:string = "";
  constructor(private githubService:GithubService){}
  clear() {
    this.users=[]
  }
  getUsers(){
    this.githubService.getdata().subscribe((data)=>{
      console.log(data)
      this.users = data
    })
  }
  getUser(){
    this.githubService.getOne().subscribe((data)=>{
      console.log(data)
      this.users = data
    })
  }
}
