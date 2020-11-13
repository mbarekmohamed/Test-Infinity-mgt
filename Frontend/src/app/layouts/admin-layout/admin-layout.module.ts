import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AdminLayoutRoutes } from "./admin-layout.routing";
import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { UserComponent } from "../../pages/user/user.component";

// import { RtlComponent } from "../../pages/rtl/rtl.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import {MenubarModule} from 'primeng/menubar';
import {MegaMenuModule} from 'primeng/megamenu';
import {MatDatepickerModule, MatDatepickerInputEvent} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgxDateRangeModule } from 'ngx-daterange';
import { MatNativeDateModule } from '@angular/material/core';




@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    TableModule,
    DialogModule,
    MenubarModule,
    MegaMenuModule,
    MatDatepickerModule,
    MatFormFieldModule,
    NgxDateRangeModule,
    MatNativeDateModule,

  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    IconsComponent,

    // RtlComponent
  ]
})
export class AdminLayoutModule {}
