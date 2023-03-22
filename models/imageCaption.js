const db = require('../lib/db')

class Caption {
    constructor(id,label) {
        this.id = id
        this.label = label
    }

    async save() {
       
        const sql = `UPDATE gallery SET label = '${this.label}' WHERE id = '${this.id}'`;
        return await db.execute(sql)
    }
}

module.exports = Caption
