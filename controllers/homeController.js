const Enquiry = require('../models/enquiry')
const Admission = require('../models/admission')
const imgCaption = require('../models/imageCaption')
const vdCaption = require('../models/videoCaption')

const db = require('../lib/db')
const excel = require('exceljs')

exports.getHome = async (req, res) => {
  try {
    const totalStudents = 'SELECT MAX(id) FROM admisson';    
    const [totalStudent] = await db.execute(totalStudents)
    res.status(200).render("home", { page: "Home", content: "default", students:totalStudent });
  } catch (error) {
    console.log(error);
    res.status(404).render("404", { content: "default" });
  }
}

exports.getAdmission = async (req, res) => {
  res.status(200).render("admission", { page: "admission" });
};

exports.getVideos = async (req, res) => {
  try {
    let sql = `SELECT * FROM video;`;
    const [rows] = await db.execute(sql);
    
    res.render('video', { labels: rows });
  } catch (error) {
    console.log(error);
    res.render('404');
  }
};

exports.getGallery = async (req, res) => {
  
    try {
      let sql = `SELECT * FROM gallery;`;
      const [rows] = await db.execute(sql);
      
      res.render('gallery', { labels: rows });
    } catch (error) {
      console.log(error);
      res.render('404');
    }
  
  // res.status(200).render("gallery", { page: "gallery" });
};

exports.getContact = async (req, res) => {
  res.status(200).render("contact", { page: "contact" });
};

exports.createContact = async (req, res) => {
  let {
    parent_name,
    parent_email,
    parent_phone,
    branch,
    message
  } = req.body
  console.log(parent_name);
  try {
    let enquiry = new Enquiry(parent_name,
      parent_email,
      parent_phone,
      branch,
      message)
    let data = await enquiry.save()
    res.status(200).redirect('/')
  } catch (error) {
    console.log(error);
    res.status(500).render('404')
  }
};

exports.newImgCaptions =async (req,res) => {
  try {
    for (let i = 1; i <= 9; i++){
    if (req.body[`label${i}`]!== ''){ 
    let cap = new imgCaption(
      i,
      req.body[`label${i}`],

    );
    let data = await cap.save();  
    }
    }

  } catch (error) {
    console.log(error);
    res.status(500).render('404');
  }
};

exports.newVideoCaption =async (req,res) => {
  try {
    for (let i = 1; i <= 9; i++){
    if (req.body[`vdlabel${i}`]!== ''){ 
    let vdcap = new vdCaption(
      i,
      req.body[`vdlabel${i}`],
    
    );
    let data = await vdcap.save();  
    }
    }
    
  } 
 
  catch (error) {
    console.log(error);
    res.status(500).render('404');
  }
};

exports.createAdmisson = async (req, res) => {
  const {
    name,
    childAge,
    birthdate,
    branch,
    standard,
    fatherName,
    fatheroccupation,
    fatherMobileNumber,
    motherName,
    motheroccupation,
    motherMobileNumber,
    email,
    whatsapp,
  } = req.body;
  // console.log(req.files.childPicture);
  const childPicture = req.files.childPicture[0].originalname;
  const parentPicture = req.files.parentPicture[0].originalname;
  const birthCertificate =req.files.birthCertificate[0].originalname;
  // console.log(childPicture);
  
  try {
   
    const admit = new Admission(
      name,
      childAge,
      birthdate,
      branch,
      standard,
      fatherName,
      fatheroccupation,
      fatherMobileNumber,
      motherName,
      motheroccupation,
      motherMobileNumber,
      email,
      whatsapp,
      childPicture,
      parentPicture,
      birthCertificate
    );
    
    const data = await admit.save();

    res.status(200).redirect('/');
  } catch (error) {
    console.log(error);
    res.status(500).render('404');
  }
};

exports.getadmin = async (req, res) => {
  try {
    const insightssql = 'SELECT id, childname,branch,standard, email, whatsapp, totalFees, feespaid, remainingFees FROM admisson';    
    const { startDate, endDate } = req.query
    let sql = `SELECT * FROM enquiry`
    if (startDate && endDate) {
      sql += ` WHERE date BETWEEN '${startDate}' AND '${endDate}'`
    }
    const [insightsrows] = await db.execute(insightssql);
    const [rows] = await db.execute(sql)
    res.render('admin', { admin: rows, startDate, endDate ,admissions: insightsrows })
    
  } catch (error) {
    console.log(error)
    res.render('404')
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body
    // console.log(req.body);
    const data = {
      'admin1':'password1',
      'admin2':'password2',
      'admin3':'password3',
      'admin4':'password4',
    }
    if(data[email] && data[email]==password){
      res.status(202).json({login:true})
    }
    else{
      res.status(401).json({login:false})
    }
  } catch (error) {
    console.log(error)
    res.render('404')
  }
};


exports.downloadadmin = async (req, res) => {
  try {
    const { startDate, endDate } = req.query
    let sql = `SELECT * FROM enquiry`
    if (startDate && endDate) {
      sql += ` WHERE date BETWEEN '${startDate}' AND '${endDate}'`
    }
    const [rows] = await db.execute(sql)
    
    // Create a new Excel workbook
    const workbook = new excel.Workbook()
    const sheet = workbook.addWorksheet('admin')

    // Define the table header
    sheet.columns = [
      { header: 'Date', key: 'date' },
      { header: 'Parent Name', key: 'parent_name' },
      { header: 'Email', key: 'email' },
      { header: 'Phone', key: 'phone' },
      { header: 'Branch', key: 'branch' },
      { header: 'Message', key: 'message' }
    ]

    // Add the rows of data to the table
    for (const enquiry of rows) {
      sheet.addRow({
        date: enquiry.date.toDateString(),
        parent_name: enquiry.parent_name,
        email: enquiry.email,
        phone: enquiry.phone,
        branch: enquiry.branch,
        message: enquiry.message
      })
    }

    // Set the response headers to force download the file
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
    res.setHeader('Content-Disposition', 'attachment; filename=admin.xlsx')

    // Write the workbook to the response
    await workbook.xlsx.write(res)
    res.end()

  } catch (error) {
    console.log(error)
    res.render('404')
  }
};


exports.updateData = async (req, res) => {
  try {
    const { id, newData } = req.body;
    let updates = '';

    for (const key in newData) {
      if (newData.hasOwnProperty(key)) {
        updates += `${key} = '${newData[key]}', `;
      }
    }
    updates = updates.slice(0, -2); // Remove the trailing comma and space

    const sql = `UPDATE admisson SET ${updates} WHERE id = '${id}'`;
    await db.execute(sql);

    res.sendStatus(200); // Send a success status code
  } catch (error) {
    console.log(error);
    res.sendStatus(500); // Send an error status code
  }
};

