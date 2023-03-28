const db = require('../lib/db')

class Caption {
    constructor(id,vdlabel) {
        this.id = id
        this.vdlabel = vdlabel
    }

    async save() {
       
        const sql = `UPDATE video SET label = '${this.vdlabel}' WHERE id = '${this.id}'`;
        return await db.execute(sql)
    }
}

module.exports = Caption
