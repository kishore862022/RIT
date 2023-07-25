const pool = require('../../bd');
const query = require('./queries')


const getcoursedata = (req, res) => {
    pool.query(query.getcoursedata, (error, result) => {
        if (error) throw error;
        res.status(200).json(result.rows);
    })
};

// const addcoursdata = async (req, res) => {
//     const { course_code,degree_code, dept_code, year, semester,
//         regulation, course_type,category, credit, 
//          ppw_lectur,  ppw_tutorial, ppw_practical} = req.body;
//     pool.query(query.checkcourse_code, [course_code], (error, results) => {
//         if (error) {
//             res.send('This course is already exist');
//         }
//         pool.query(query.addcoursdata, [course_code, degree_code, dept_code, year, semester, regulation, course_type, category, credit, ppw_lectur, ppw_tutorial, ppw_practical], (error, results) => {
//             if (error) throw error
//             res.status(201).send("Added the course successfully");
            
//         });
//     });

// }




const addcoursdata = async (req, res) => {
    // Assuming the client is sending JSON data with a 'message' property
    const { course_code,degree_code, dept_code, year, semester,regulation, course_type,category, credit, 
                 ppw_lectur,  ppw_tutorial, ppw_practical} = req.body;
  
    try {
      // Perform database insert operation
      await pool.query(query.addcoursdata,[course_code, degree_code, dept_code, year, semester, regulation, course_type, category, credit, ppw_lectur, ppw_tutorial, ppw_practical]);
  
      // Send the response
      // alert("Data saved successfully.");
      res.status(201).json({ status: 'Success', message: 'Data saved successfully.' });
    } catch (error) {
      console.error('Error saving data to database:', error);
      res.status(500).json({ status: 'Error', message: 'Failed to save data.' });
    }
  };
  
  



module.exports = {
    getcoursedata,
    addcoursdata,
}