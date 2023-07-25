import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-course-master',
  templateUrl: './course-master.component.html',
  styleUrls: ['./course-master.component.css']
})
export class CourseMasterComponent implements OnInit {
 
  constructor(private http: HttpClient) {
   }

  ngOnInit(): void {
  }

course_master_data = {
  course_code: '',
  degree_code: 1,
  dept_code: 1,
  year: null,
  semester: null,
  regulation: '',
  course_type: '',
  category: '',
  credit: null,
  ppw_lectur: null,
  ppw_tutorial: null,
  ppw_practical: null
};



To_DB(): void {
  console.log(this.course_master_data);
  this.http.post('http://localhost:3000/api/v1/JA/', this.course_master_data)
    .subscribe(
      (response) => {
        
        alert('Data saved successfully...');
        // Handle success, show a success message, or perform any other action
      },
      (error) => {
        console.error('Error submitting form:', error);
        // Handle error, show an error message, or perform any other action
      }
    );
    this.course_master_data = {
      course_code: '',
      degree_code: 1,
      dept_code: 1,
      year: null,
      semester: null,
      regulation: '',
      course_type: '',
      category: '',
      credit: null,
      ppw_lectur: null,
      ppw_tutorial: null,
      ppw_practical: null
    };
}




};


