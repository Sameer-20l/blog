import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component'; 
import { UsersListComponent } from './users-list/users-list.component'; 
import { HeaderComponent } from './header/header.component'; 
import { ChildComponent } from './child/child.component'; 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { UsdtoinrPipe } from './pipes/usdtoinr.pipe'; 

@Component({

  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UserListComponent,UsersListComponent,CommonModule,HeaderComponent,ChildComponent,FormsModule,NgbModule,MatButtonModule,UsdtoinrPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blog';
/*  displayVal:string = '';
  show = false;
  color = "blue";
  getData(val:string){
    console.log(val)
    this.displayVal=val;
  }
  users=["Sameer", "OmiBhau" ,"Salil","5 foot 12 inch"];
  user1=[
    {name:"Sameer" , phone : "1111",randomnum:[1,2,3,4]},
    {name:"Rishabh" , phone : "5678",randomnum:[1,2,3,5]},
    {name:"Ankush" , phone : "4321",randomnum:[1,2,3,6]},
    {name:"Aaju" , phone : "1234",randomnum:[1,2,3,7]}
  ]*/

  // style binding
  color = "red";
  updateColor(){
    this.color = "blue"
  }
  userData:any={};
  getData(data:any){
    console.log(data)
    this.userData=data;
  }

  child="Make use of Child Components"

  data=10;

  name:any;


}
