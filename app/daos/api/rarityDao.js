const con = require('../../config/dbconfig')

const rarityDao = {
    table: 'rarity',

    create: (req, res)=> {
        if(Object.keys(req.body).length === 0) {
            res.json({
                "error": true,
                "message": "No fields to create."
            })
        } else {
            const fields = Object.keys(req.body)
            const values = Object.values(req.body)

            con.execute(
                `INSERT INTO rarity SET ${fields.join(' = ?, ')} = ?`,
                values,
                (error, dbres)=> {
                    if(!error) {
                        res.send(`Last id: ${dbres.insertId}`)
                    } else {
                        console.log(' DAO ERROR ', error)
                        res.send('Error creatign record')
                    }
                }
            )
        }
    },

    update: (req, res)=> {
        if(isNaN(req.params.id)) {
            res.json({
                "error": true,
                "message": "Id must be a number."
            })
        } else if (Object.keys(req.body) === 0) {
            res.json({
                "error": true,
                "message": "No fields to update."
            })
        } else {
            const fields = Object.keys(req.body)
            const values = Object.values(req.body)

            con.execute(
                `UPDATE rarity SET ${fields.join(' =?, ')} = ? WHERE rarity_id = ?`,
                [...values, req.params.id],
                (error, dbres)=> {
                    if(!error) {
                        res.send(`Changed ${dbres.changedRows} row(s)`)
                    } else {
                        console.log(' DAO ERROR ', error)
                        res.send('Error updating record')
                    }
                }
            )
        }
    }
}

module.exports = rarityDao