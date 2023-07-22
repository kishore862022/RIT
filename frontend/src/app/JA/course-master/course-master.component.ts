import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-master',
  templateUrl: './course-master.component.html',
  styleUrls: ['./course-master.component.css']
})
export class CourseMasterComponent implements OnInit {
 
  constructor() {
   }

  ngOnInit(): void {
  }

course_master_data ={
  degree_code:'',
  dept_code:'',
  year:'',
  semester:'',
  Regulation:'',
  Course_Type:'',
  Credit:'',
  Course_code:'',
  Category:'',
  PPW_Lectur:'',
  PPW_Tutorial:"",
  PPW_Practical:""
}
To_DB(){
  
}



}
