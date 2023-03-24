const db = require('../lib/db')

class vdCaption {
    constructor(id,label) {
        this.id = id
        this.label = label
    }

    async save() {
       
        const sql = `UPDATE video SET label = '${this.label}' WHERE id = '${this.id}'`;
        return await db.execute(sql)
    }
}

module.exports = vdCaption
