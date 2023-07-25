const pool = require('../../bd');
const query = require('./queries')


const getcoursedata = (req, res) => {
    pool.query(query.getcoursedata, (error, result) => {
        if (error) throw error;
        res.status(200).json(result.rows);
    })
};



const addcoursdata = async (req, res) => {
    // Assuming the client is sending JSON data with a 'message' property
    const { course_code,degree_code, dept_code, year, semester,regulation, course_type,category, credit, 
                 ppw_lectur,  ppw_tutorial, ppw_practical,course_title} = req.body;
  
    try {
      // Perform database insert operation
      await pool.query(query.addcoursdata,[course_code, degree_code, dept_code, year, semester, regulation, course_type, category, credit, ppw_lectur, ppw_tutorial, ppw_practical,course_title]);
  
      // Send the response
      // alert("Data saved successfully.");
      res.status(201).json({ status: 'Success', message: 'Data saved successfully.' });
    } catch (error) {
      console.error('Error saving data to database:', error);
      res.status(500).json({ status: 'Error', message: 'Failed to save data.' });
    }
  };
  
  
  // this set of code line for university mark data entry to db
  const add_university_mark_data = async (req, res) => {

    const { degree_code,batch_no, dept_code, regulation_no, semester,course_code, reg_no,grade} = req.body;
  
    try {
      await pool.query(query.add_university_mark_data,[degree_code,batch_no, dept_code, regulation_no, semester,course_code, reg_no,grade]);
      res.status(201).json({ status: 'Success', message: 'Data saved successfully.' });
    } catch (error) {
      console.error('Error saving data to database:', error);
      res.status(500).json({ status: 'Error', message: 'Failed to save data.' });
    }
  };



module.exports = {
    getcoursedata,
    addcoursdata,
    add_university_mark_data,
}