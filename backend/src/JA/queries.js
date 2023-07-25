const getcoursedata = 'select * from course_master';
const checkcourse_code = 'select s from course_master where course_master.course_code = $1';
const addcoursdata = 'insert into course_master (course_code,degree_code,dept_code,year,semester,regulation,course_type,category,credit,ppw_lectur,ppw_tutorial,ppw_practical) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12);' 
module.exports = {
    getcoursedata,
    addcoursdata,
    checkcourse_code,
}