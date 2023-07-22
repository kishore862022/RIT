import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { FnavbarComponent } from './fnavbar/fnavbar.component';

import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
// import { DataTablesModule } from 'angular-datatables';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { MainpageComponent } from './mainpage/mainpage.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { CourseMasterComponent } from './JA/course-master/course-master.component';
import { UniversityMarksComponent } from './JA/university-marks/university-marks.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    DashboardComponent,
    PagenotfoundComponent,
   LoginComponent,RegisterComponent,FnavbarComponent, MainpageComponent, FirstpageComponent, CourseMasterComponent, UniversityMarksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,RouterModule,
    // DataTablesModule,
    BrowserAnimationsModule,
    MatTableModule,ReactiveFormsModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
