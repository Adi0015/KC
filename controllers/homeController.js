const Enquiry = require('../models/enquiry')
const Admission = require('../models/admission.js')
const fs = require('fs');
const path = require('path');
const db = require('../lib/db')
const excel = require('exceljs')

exports.getHome = async (req, res) => {
  try {
    res.status(200).render("home", { page: "Home", content: "default" });
  } catch (error) {
    console.log(error);
    res.status(404).render("404", { content: "default" });
  }
}

exports.getAdmission = async (req, res) => {
  res.status(200).render("admission", { page: "admission" });
};

exports.getVideos = async (req, res) => {
  res.status(200).render("video", { page: "video" });
};

exports.getGallery = async (req, res) => {
  res.status(200).render("gallery", { page: "gallery" });
};
exports.getContact = async (req, res) => {
  res.status(200).render("contact", { page: "contact" });
};
exports.createContact = async (req, res) => {
  let {
    parent_name,
    parent_email,
    parent_phone,
    message
  } = req.body
  console.log(parent_name);
  try {
    let enquiry = new Enquiry(parent_name,
      parent_email,
      parent_phone,
      message)
    let data = await enquiry.save()
    res.status(200).redirect('/')
  } catch (error) {
    console.log(error);
    res.status(500).render('404')
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
  } = req.body;
  console.log(req.files.childPicture);
  const childPicture = req.files.childPicture[0].originalname;
  const parentPicture = req.files.parentPicture[0].originalname;
  console.log(childPicture);
  
  try {
    // Save admission to database
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
      childPicture,
      parentPicture,
    );
    const data = await admit.save();

    res.status(200).redirect('/');
  } catch (error) {
    console.log(error);
    res.status(500).render('404');
  }
};
exports.getActivity = async (req, res) => {
  res.status(200).render("activity", { page: "activity" });
};
exports.getRegistration = async (req, res) => {
  res.status(200).render("registration", { page: "registration" });
};

exports.getEnquiries = async (req, res) => {
  try {
    const { startDate, endDate } = req.query
    let sql = `SELECT * FROM enquiry`
    if (startDate && endDate) {
      sql += ` WHERE date BETWEEN '${startDate}' AND '${endDate}'`
    }
    const [rows] = await db.execute(sql)
    res.render('enquiries', { enquiries: rows, startDate, endDate })
  } catch (error) {
    console.log(error)
    res.render('404')
  }
}

exports.downloadEnquiries = async (req, res) => {
  try {
    const { startDate, endDate } = req.query
    let sql = `SELECT * FROM enquiry`
    if (startDate && endDate) {
      sql += ` WHERE date BETWEEN '${startDate}' AND '${endDate}'`
    }
    const [rows] = await db.execute(sql)
    
    // Create a new Excel workbook
    const workbook = new excel.Workbook()
    const sheet = workbook.addWorksheet('Enquiries')

    // Define the table header
    sheet.columns = [
      { header: 'Date', key: 'date' },
      { header: 'Parent Name', key: 'parent_name' },
      { header: 'Email', key: 'email' },
      { header: 'Phone', key: 'phone' },
      { header: 'Message', key: 'message' }
    ]

    // Add the rows of data to the table
    for (const enquiry of rows) {
      sheet.addRow({
        date: enquiry.date.toDateString(),
        parent_name: enquiry.parent_name,
        email: enquiry.email,
        phone: enquiry.phone,
        message: enquiry.message
      })
    }

    // Set the response headers to force download the file
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
    res.setHeader('Content-Disposition', 'attachment; filename=enquiries.xlsx')

    // Write the workbook to the response
    await workbook.xlsx.write(res)
    res.end()

  } catch (error) {
    console.log(error)
    res.render('404')
  }
}