const db = require('../lib/db')

class Enquiry {
    constructor(parent_name, parent_email, parent_phone,branch, message) {
        this.parent_name = parent_name
        this.parent_email = parent_email
        this.parent_phone = parent_phone
        this.branch = branch
        this.message = message
    }

    async save() {
        const currentDate = new Date().toISOString().slice(0, 19).replace('T', ' ')
        const sql = `INSERT INTO enquiry(parent_name, email, phone, branch, message, Date) VALUES ('${this.parent_name}', '${this.parent_email}', '${this.parent_phone}', '${this.branch}', '${this.message}', '${currentDate}')`
        // const sql = `INSERT INTO enquiry(parent_name, email, phone, message, Date) VALUES ('${this.parent_name}', '${this.parent_email}', '${this.parent_phone}', '${this.message}')`
        return await db.execute(sql)
    }
}

module.exports = Enquiry
