const db = require('../lib/db')

class Admission{
    constructor(name,childAge,birthdate,branch,standard,fatherName,fatheroccupation,fatherMobileNumber,motherName,motheroccupation,motherMobileNumber,email,childPicture,parentPicture,birthCertificate){
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
        this.childPicture = childPicture
        this.parentPicture = parentPicture 
        this.birthCertificate =birthCertificate
    
    }
    
    async save(){
        const currentDate = new Date().toISOString().slice(0, 19).replace('T', ' ')
        const sql = `INSERT INTO admisson(childname, childage, birthdate, branch, standard, fathername, fatheroccupation, fathermobilenum, mothername, motheroccupation, mothermobilenum, email,childPicture,parentPicture,birthCertificate,date) VALUES ('${this.name}','${this.childAge}','${this.birthdate}','${this.branch}','${this.standard}','${this.fatherName}','${this.fatheroccupation}','${this.fatherMobileNumber}','${this.motherName}','${this.motheroccupation}','${this.motherMobileNumber}','${this.email}','${this.childPicture}','${this.parentPicture}','${this.birthCertificate}','${currentDate}')`
        return await db.execute(sql)
        
    }
    
}


module.exports = Admission 
