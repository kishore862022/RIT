import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-questionpattern1',
  templateUrl: './questionpattern1.component.html',
  styleUrls: ['./questionpattern1.component.css']
})
export class Questionpattern1Component implements OnInit {
  showQuestion11=true;
  showQuestion12=true;
  showQuestion13=true;
  showQuestion14=true;
  showQuestion15=true;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.disable()
}


course_master_data = {
  course_code: '',
  degree_code: 1,
  dept_code: 1,
  year: null,
  semester: null,
  regulation: '',
  Register_Number:'',
  course_type: '',
  category: '',
  credit: null,
  ppw_lectur: null,
  ppw_tutorial: null,
  ppw_practical: null,
  course_title:'',
  course_subtype:'',
  q2:null,
  q1:null,
  q3:null,
  q4:null,
  q5:null,
  q6:null,
  q7:null,
  q8:null,
  q9:null,
  q10:null,
  q11a:null,
  q11b:null,
  q12a:null,
  q12b:null,
  q13a:null,
  q13b:null,
  q14a:null,
  q14b:null,
  q15a:null,
  q15b:null,
  q16a:null,
  testtype:1


};



To_DB(): void {
  console.log(this.course_master_data);
  this.http.post('http://172.16.71.2:9090/api/v1/JA/', this.course_master_data)
    .subscribe(
      (response) => {
        
        alert('Data saved successfully...');
        // Handle success, show a success message, or perform any other action
      },
      (error) => {
        alert("This course is alrady exist");
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
      Register_Number:'',
      course_type: '',
      category: '',
      credit: null,
      ppw_lectur: null,
      ppw_tutorial: null,
      ppw_practical: null,
      course_title:'',
      course_subtype:'',
      q2:null,
      q1:null,
      q3:null,
      q4:null,
      q5:null,
      q6:null,
      q7:null,
      q8:null,
      q9:null,
      q10:null,
      q11a:null,
      q11b:null,
      q12a:null,
      q12b:null,
      q13a:null,
      q13b:null,
      q14a:null,
      q14b:null,
      q15a:null,
      q15b:null,
      q16a:null,
      testtype: 1



    };
}
show11(){
  return this.showQuestion11 = !this.showQuestion11;
}
show12(){
  return this.showQuestion12 = !this.showQuestion12;
}
show13(){
  return this.showQuestion13 = !this.showQuestion13;
}
show14(){
  return this.showQuestion14 = !this.showQuestion14;
}
show15(){
  return this.showQuestion15 = !this.showQuestion15;
}


disable(){
  if ((this.course_master_data.q11a || this.course_master_data.q11b ) == !null && (this.course_master_data.q12a || this.course_master_data.q12b )== !null && (this.course_master_data.q13a || this.course_master_data.q13b )== !null&& (this.course_master_data.q14a || this.course_master_data.q14b )== !null && (this.course_master_data.q15a || this.course_master_data.q15b )== !null ){
    return true;
  }
  else{
    return false
  }

};

}

