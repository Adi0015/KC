const db = require('../lib/db')
const nodemailer = require('nodemailer');


class Admission{
    constructor(name,childAge,birthdate,branch,standard,fatherName,fatheroccupation,fatherMobileNumber,motherName,motheroccupation,motherMobileNumber,email,whatsapp,childPicture,parentPicture,birthCertificate){
        this.name = name
        this.childAge = childAge
        this.birthdate = birthdate
        this.branch = branch
        this.standard = standard
        this.fatherName = fatherName
        this.fatheroccupation = fatheroccupation
        this.fatherMobileNumber = fatherMobileNumber
        this.motherName = motherName
        this.motheroccupation = motheroccupation
        this.motherMobileNumber = motherMobileNumber
        this.email = email
        this.whatsapp = whatsapp
        this.childPicture = childPicture
        this.parentPicture = parentPicture 
        this.birthCertificate = birthCertificate
        this.uniqueId = '';
        this.password = '';
    }
    
    async save(){

        

        const currentDate = new Date().toISOString().slice(0, 19).replace('T', ' ')
        
        // Generate uniqueId
        const branchInitials = this.branch.slice(0, 2).toUpperCase();
        const lastId = await this.getLastInsertedId();
        const uniqueId = `${branchInitials}-${lastId + 1}`;
        this.uniqueId = uniqueId;

        // Generate password
        const password = this.birthdate.replace(/-/g, '');
        this.password = password;

        // Send an email notification
        const transporter = nodemailer.createTransport({
          // Configure your email transport options here
          // Example: SMTP settings for Gmail
          service: 'gmail',
          auth: {
            user: 'swapnilsawant576@gmail.com',
            pass: 'obodgsfotcgeexrf',
              },
          });
    
        const mailOptions = {
          from: 'swapnilsawant576@gmail.com',
          to: this.email,
          subject: 'Admission Form Submitted',
          text: `Your admission form has been submitted successfully.\n\nUnique ID: ${this.uniqueId}\nPassword: ${this.password}`,
        };
    
        try {
          await transporter.sendMail(mailOptions);
          console.log('Email sent successfully!');
        } catch (error) {
          console.log('Failed to send email:', error);
        }
        
        const sql = `INSERT INTO admisson(childname, childage, birthdate, branch, standard, fathername, fatheroccupation, fathermobilenum, mothername, motheroccupation, mothermobilenum, email ,whatsapp,childPicture,parentPicture,birthCertificate,date,uniqueId,password) VALUES ('${this.name}','${this.childAge}','${this.birthdate}','${this.branch}','${this.standard}','${this.fatherName}','${this.fatheroccupation}','${this.fatherMobileNumber}','${this.motherName}','${this.motheroccupation}','${this.motherMobileNumber}','${this.email}','${this.whatsapp}','${this.childPicture}','${this.parentPicture}','${this.birthCertificate}','${currentDate}','${this.uniqueId}','${this.password}')`
        return await db.execute(sql)
        
    }

    async getLastInsertedId() {
      const sql = 'SELECT MAX(id) AS lastId FROM admisson';
      const [rows, fields] = await db.execute(sql);
      const lastId = rows[0].lastId || 0;
      return lastId;
    }
    
}


module.exports = Admission 
