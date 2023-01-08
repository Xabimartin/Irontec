import { Attribute, Component, Input, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit{
  @Input() buttonType:any=""
  @Input() buttonColor:any=""
  
  constructor(){}
  ngOnInit():void{
      
  }
  
}
