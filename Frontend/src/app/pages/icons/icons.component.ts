
import { ApiService } from './../../service/api.service';
import { Component, OnInit } from "@angular/core";
import { MegaMenuItem,MenuItem } from 'primeng/api';
import { SelectMultipleControlValueAccessor } from '@angular/forms';

@Component({
  selector: "app-icons",
  templateUrl: "icons.component.html",
  styleUrls: ['./icons.component.scss'],
  providers:[ApiService]
})
export class IconsComponent implements OnInit {
  title = '';
  dialogVisible: boolean;
  candidats = [];


  constructor(private apiService: ApiService) { }

  ngOnInit() {
    //first table
    this.apiService.getAllCandidats().subscribe((data: any[])=>{
      this.candidats = data;
      console.log(this.candidats)


    })



  }



  showDialog() {
    this.dialogVisible = true;}

  public updateOptions() {

  }



}
