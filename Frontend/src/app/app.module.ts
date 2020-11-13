import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { ComponentsModule } from "./components/components.module";

import {TableModule, TableBody} from 'primeng/table';
import {MenubarModule} from 'primeng/menubar';
import {MatDatepickerModule, MatDatepickerInputEvent} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';



@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    TableModule,
    MenubarModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,


  ],
  exports:[TableModule,MatDatepickerModule],
  declarations: [AppComponent, AdminLayoutComponent, AuthLayoutComponent ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
