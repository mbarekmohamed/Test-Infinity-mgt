import { Component, OnInit } from "@angular/core";
import { ApiService } from './../../service/api.service';
import { MegaMenuItem,MenuItem } from 'primeng/api';
import { SelectMultipleControlValueAccessor } from '@angular/forms';

@Component({
  selector: "app-dashboard",
  templateUrl: "dashboard.component.html"
})
export class DashboardComponent implements OnInit {
  items={name:"",prenom:"",email:"",date:"",tel:"",disp:"",exp:"",cv:"",msg:""};

  constructor(private apiService: ApiService) {}

  ngOnInit() {

  }
OnInput (event: any, key:any) {
    let val=event.target.value;
    this.items[key] = val;
    }

save(event:any) {
  var items=this.items;
  this.apiService.getAllChartDetails(items.name,items.prenom,items.email,items.date,items.tel,items.disp,items.exp,items.cv,items.msg).subscribe((data: any[])=>{


  })
}
}

